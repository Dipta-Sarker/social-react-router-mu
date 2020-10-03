import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const styleCss ={
        border:'2px solid red',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }

    const {postId} = useParams();
    const [post,setPost] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    return (
        <div>
            <div style={styleCss}>
                <h4>ID: {post.id}</h4>
                <h4>Title: {post.title}</h4>
                <h5>Body: {post.body}</h5>
            </div>
            
            <div>
                 <Comments></Comments>               
            </div>    
            
        </div>
    );
};

export default PostDetail;