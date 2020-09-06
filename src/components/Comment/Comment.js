import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Comment.css'

const Comment = (props) => {
    const {email, body} = props.comment    

    // Get Method to Bring Comment Picture using fakeData
    const userImage = fakeData;
    const [users, setUsers] = useState(userImage);
    // console.log(users[0].image)
        
    return (
        <div className="comment-details">             
                <h6><span><img src={users[0].image} alt=""/></span> {email}</h6>
                <p> <strong>Comment:</strong> {body}</p>
        </div>
    );
};

export default Comment;