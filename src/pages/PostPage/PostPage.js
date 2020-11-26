import React, { useState, useEffect } from 'react';
import {WNavBar} from '../../components/WNavBar'
import { API, Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listPosts } from '../../graphql/queries';
import { createPost as createPostMutation, deletePost as deletePostMutation } from '../../graphql/mutations';
const initialFormState = { uname: '', post : '' }
const PostPage = props => {
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
    if (!formData.uname || !formData.post) return;
    await API.graphql({ query: createPostMutation, variables: { input: formData } });
    setPosts([ ...posts, formData ]);
    setFormData(initialFormState);
  }
  /*async function deletePost({ id }) {
    const newPostsArray = posts.filter(post => post.id !== id);
    setPosts(newPostsArray);
    await API.graphql({ query: deletePostMutation, variables: { input: { id } }});
  } */

  return (
    <>
      <WNavBar />
      <h3>Share the Steps you are taking to make world a better place !</h3>
      <input
        onChange={e => setFormData({ ...formData, 'uname': e.target.value})}
        placeholder="Uname"
        value={formData.uname}
      />
      <input
        onChange={e => setFormData({ ...formData, 'post': e.target.value})}
        placeholder="Share the thoughts"
        value={formData.post}
      />
      <button onClick={createPost}>Post</button>
      
    </>
  );
};
export default PostPage;

/*
<div style={{marginBottom: 30}}>
        {
          posts.map(post => (
            <div key={post.id || post.uname}>
              <h2>{post.uname}</h2>
              <p>{post.post}</p>
              <button onClick={() => deletePost(post)}>Delete post</button>
            </div>
          ))
        }
      </div>
*/