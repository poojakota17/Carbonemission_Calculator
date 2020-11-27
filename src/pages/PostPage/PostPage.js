
import React, { useState, useEffect, useReducer } from 'react';
import {WNavBar} from '../../components/WNavBar'
import { API, Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listPosts } from '../../graphql/queries';
import { createPost as createPostMutation, deletePost as deletePostMutation, updatePost as updatePostMutation } from '../../graphql/mutations';
import { Container } from 'react-bootstrap';


const initialFormState = { title: '', post : '', uname: '', like: 0}
const PostPage = (props) => {
  const [posts, setPosts] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchPosts();
    getEmail();
  }, []);
  async function getEmail(){
    console.log("Getting email...");
    Auth.currentUserInfo()
        .then((res) => {
            setUserEmail(res.attributes.email);

            console.log("Email is: " + res.attributes.email + "!");
        })
        .catch((err) => {
            console.error(err);
        });

  }

  async function fetchPosts() {
    const apiData = await API.graphql({ query: listPosts });
    setPosts(apiData.data.listPosts.items);
  }
  async function createPost() {
    if (!formData.title || !formData.post) return;
    await API.graphql({ query: createPostMutation, variables: { input: formData } });
    setPosts([ ...posts, formData ]);
    setFormData(initialFormState);
  }
  async function deletePost({ id }) {
    const newPostsArray = posts.filter(post => post.id !== id);
    setPosts(newPostsArray);
    await API.graphql({ query: deletePostMutation, variables: { input: { id } }});
  }

  async function hitLike(idx){

    const post=posts[idx];
    console.log("const post",post);
    post.like=post.like+1;
    delete post.createdAt;
    delete post.updatedAt;
    delete post.owner;
    try{
        const postData = await API.graphql({query: updatePostMutation, variables: { input: post } });
        console.log("postData", postData);
    }catch(err) {
        console.log("OOPS!");
        console.log(err);
    }

  }



  return (
    <>
      <WNavBar />
      <h3>Share the Steps you are taking to make world a better place !</h3>
      <input
        onChange={e => setFormData({ ...formData, 'title': e.target.value})}
        placeholder="Title"
        value={formData.title}
      />
      <input
        onChange={e => setFormData({ ...formData, 'post': e.target.value})}
        placeholder="Share the thoughts"
        value={formData.post}
      />
      <button onClick={createPost}>Post</button>

      <div>
        {posts.map((post,idx) => {
          return (

            <div key={`post${idx}`} >
              <div>
                <div key={post.id || post.title}>
                  <h2>{post.title}</h2>
                  <p>{post.post}</p>

                  <p>{post.uname}</p>
                  <button onClick={()=> deletePost(post)}>
                      Del
                  </button>
                  <button onClick={()=>hitLike(idx)}>
                  <p>{post.like}</p>
                  like
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </div>
      <div style={{marginBottom: 30}}>
        {
          posts.map(post => (
            <div key={post.id || post.uname}>
              <h2>{post.title}</h2>
              <p>{post.post}</p>
              <button onClick={() => deletePost(post)}>Delete post</button>
            </div>
          ))
        }
      </div>
    </>
  );
};
export default PostPage;

/*
<div style={{marginBottom: 30}}>
        {
          posts.map(post => (
            <div key={post.id || post.uname}>
              <h2>{post.title}</h2>
              <p>{post.post}</p>
              <button onClick={() => deletePost(post)}>Delete post</button>
            </div>
          ))
        }
      </div>
*/
