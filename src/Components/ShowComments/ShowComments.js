import React from 'react';

const ShowComments = (props) => {
    const css ={
        border:'2px solid blue',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }
    const {name,email,body} = props.comment;

    return (
        <div style={css}>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <h5>Body: {body}</h5>
        </div>
    );
};

export default ShowComments;