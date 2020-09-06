import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Grid, Container } from '@material-ui/core';
import './Home.css'

const Home = () => {
    const [posts, setPosts] = useState([]);
    // console.log(posts)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div className="all-post">
            <Container>
            <h1>All Posts</h1>
            <Grid container spacing={3}>
            <Grid item xs>
                {
                    posts.map(post => <Post post ={post}></Post>)
                }            
            </Grid>            
            </Grid>
            </Container>
        </div>
    );
};

export default Home;