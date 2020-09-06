import React from 'react';
import './Comment.css'

const Comment = (props) => {
    const {name, email, body} = props.comment
    return (
        <div className="comment-details">
            <h6>Name & Email: {name} <span>({email})</span> </h6>
            <p> <strong>Comment:</strong> {body}</p>
        </div>
    );
};

export default Comment;