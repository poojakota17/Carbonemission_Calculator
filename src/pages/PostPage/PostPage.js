
import React, { useState, useEffect, useReducer } from 'react';
import { WNavBar } from '../../components/WNavBar'
import { API, Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listPosts } from '../../graphql/queries';
import { createPost as createPostMutation, deletePost as deletePostMutation, updatePost as updatePostMutation } from '../../graphql/mutations';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { BiBulb } from "react-icons/bi";
import { IoMdTrash, IoIosHeart } from "react-icons/io";
import './PostPage.css';
import { Doughnut, Line } from 'react-chartjs-2';


//const [dataChart, setDataChart] = useState ({}); 
const initialFormState = { title: '', post: '', uname: '', like: 0 }
const PostPage = (props) => {
    const [posts, setPosts] = useState([]);
    const [userEmail, setUserEmail] = useState("");
    const [formData, setFormData] = useState(initialFormState);
    //const datagraph =  API.graphql({ query: listPosts });
    //console.log("datagraph", datagraph)
    const [data, setData] = useState({});
    const [chartData, setChartData]= useState({});
    const [unameData, setUnameData]=useState([]);
    const [likeData, setLikeData]= useState([]);

    useEffect(() => {
        fetchPosts();
        getEmail();
        getData();
        chart();
    }, []);


    async function getEmail() {
        console.log("Getting email...");
        Auth.currentUserInfo()
            .then((res) => {
                setUserEmail(res.attributes.email);
                console.log("Email is: " + res.attributes.email);
                console.log("email is :", userEmail);
                console.log("res is ", res)
                setFormData({ ...formData, uname: res.attributes.email, like: 0 });
            })
            .catch((err) => {
                console.error(err);
            });

    }

    async function fetchPosts() {
        const apiData = await API.graphql({ query: listPosts });

        setPosts(apiData.data.listPosts.items);
        console.log("fetched Items", apiData.data.listPosts.items);
        console.log("fetched Items uname    ", apiData.data.listPosts.items);
    }
    async function createPost() {
        if (!formData.title || !formData.post) return;
        await API.graphql({ query: createPostMutation, variables: { input: formData } });
        setPosts([...posts, formData]);
        
        setFormData(initialFormState);
        console.log("setFormData",setFormData )
    }
    async function deletePost({ id }) {
        const newPostsArray = posts.filter(post => post.id !== id);
        setPosts(newPostsArray);
        await API.graphql({ query: deletePostMutation, variables: { input: { id } } });
    }

    async function hitLike(idx) {

        const post = posts[idx];
        console.log("const post", post);
        post.like = post.like + 1;
        delete post.createdAt;
        delete post.updatedAt;
        delete post.owner;
        try {
            const postData = await API.graphql({ query: updatePostMutation, variables: { input: post } });
            console.log("postData", postData);
        } catch (err) {
            console.log("OOPS!");
            console.log(err);
        }
    }
   /*const data={
      

        labels:['mak','lol'],
        datasets: [{
            label: 'likes',
            data:[datagraph.like]}]
            
            
    } */
    const getData = async () => {
        console.log("In getdata")
        try {
          const res =  await API.graphql({ query: listPosts });
          console.log('in get data- value of res',res);
          console.log("res.data.listPosts.items",res.data.listPosts.items);
          console.log("res.data.listPosts.items.uname",res.data.listPosts.items.uname);

            const arry = res.data.listPosts.items;
            const unames = [];
            console.log(" print arry", arry)
            //console.log(" Print arry uname arry", arry);
            //console.log("Json.stringyfy", JSON.stringify(arry,null,2));
            const l =(JSON.stringify(arry,null,2));
            //var i;
            //for (i = 0; i < l.length; ++i) {
            //    console.log(l[i]);
            //}
           // var keys = Object.keys(l);
            //for (var i = 0; i < keys.length; i++) {
              //  var value = l[key];
                // your code here...
                //console.log("value", value);
            // }
            console.log("slijfojfoajfaposfpaso;kfapsofkasofasofas");
            /*for(var i = 0; i < arry.length; i++) {
                console.log(arry[i].uname);
            }*/
            arry.forEach((item) => {
                //console.log("Item: " + item.uname);  
                unames.push(item.uname); 
            })


          setData({
            labels: ["covid"],
            datasets: [
              {
                label: "expenditure",
        
                data: unames
              }
            ]
            
          });
        } catch (error) {
          console.log(error.response);
        }
      };

      const chart = () =>{
        try {
            const res =   API.graphql({ query: listPosts });
            console.log('in chart ',res)
        }
        catch(error){
            console.log(" errorrrrr", error)
        }
          setChartData(
              {
                  labels:["mon","tue","thr"],
                  datasets:[{
                      label: "level",
                      data:[32,22,33],
                      backgroundColor:["rgba(75, 193, 193, 0.6"]
                  }

                  ]
              }
          );
      };


    return (
        <>
            <WNavBar />
            <center><h3>Share the Steps you are taking to make the world a better place !</h3></center>
            <br />
            <Container>

                <Form>
                    <Row>
                        <Col>
                            <Form.Control type="text" onChange={e => setFormData({ ...formData, 'title': e.target.value })}
                                placeholder="Enter Title"
                                value={formData.title} />
                            <br />
                            <Form.Control type="text"
                                onChange={e => setFormData({ ...formData, 'post': e.target.value })}
                                placeholder="Share the thoughts"
                                value={formData.post} />
                        </Col>
                        <Col xs lg="2">
                            <Button variant="primary" onClick={createPost}>
                                Post
                                </Button>
                        </Col>
                    </Row>
                </Form>

            </Container>
            <br />
            <hr />
            <Container>
                <div className="container">
                    {posts.map((post, idx) => {
                        return (
                            <div>
                                <div key={`post${idx}`}>
                                    <fieldset className='mycard'>
                                        <legend className='postTitle'><h2>{post.title}</h2></legend>
                                        <div>
                                            <div className='row'>
                                                <div key={post.id || post.title} className='col-lg-6'>

                                                    <p>{post.post}</p>

                                                    <p>Posted by : {post.uname}</p>
                                                    
                                                    <p>{post.createdAt  }</p>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <Button className="btn btn-warning likebutton" onClick={() => hitLike(idx)}>
                                                        <p>{post.like}</p>
                                                        <IoIosHeart />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <br />
                            </div>
                        );
                    })}
                </div>
                <br />
                <br />
            </Container>
            <div>
<Line data={chartData} />
</div>

        </>
    );
};
export default PostPage;

//   