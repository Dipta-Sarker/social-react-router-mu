import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowComments from '../ShowComments/ShowComments';

const Comments = () => {
    const {postId} = useParams();
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])
    return (
        <div>
                
            {
                comment.map(comment => <ShowComments comment={comment}></ShowComments>)
            }
                
        </div>
    );
};

export default Comments;