import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {id,title,body} = props.post; 
    const css ={
        border:'2px solid red',
        margin:'30px',
        padding:'30px',
        borderRadius:'5px'
    }
    return (
        <div style={css}>
            <p>ID: {id}</p>
            <h2>Title: {title}</h2>
            <p><b>Body: {body}</b></p>
            <Link to={`/post/${id}`}>
            <Button variant="contained" color="primary">
                Read More
             </Button>
             </Link>
        </div>
    );
};

export default Post;