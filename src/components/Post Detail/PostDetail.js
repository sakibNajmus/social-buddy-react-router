import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Container } from '@material-ui/core';
import './PostDetail.css'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const PostDetail = () => {
    const {postId} = useParams();

    const [posts, setPosts] = useState({})

    const {title, body, userId} = posts;

    // Get Method to Bring Specific posts using postId
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    const [comments, setComments] = useState([])

    // Get Method to Bring Comments
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    // Material-ui code
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Container>
            <div className="post-details">                    
                <h3>{title}</h3>
                <p>{body}</p>
            </div>

            <div className={classes.root}>
            <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Click to Expand Comments"
            />
            <div className={classes.container}>
                <Fade in={checked}>
                <Paper elevation={4} className={classes.paper}>
                        {
                            comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                        }
                </Paper>
                </Fade>
            </div>
            </div>
        </Container>
    );
};

export default PostDetail;