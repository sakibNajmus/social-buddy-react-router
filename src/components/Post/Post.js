import React from 'react';
import './Post.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: "100%",
    },
    media: {
      height: 140,
    },
  });

const Post = (props) => {
    const classes = useStyles();
    // console.log(props)
    const {id, title, body} = props.post;
    const history = useHistory();
    const seeMoreButton = () => {
        history.push(`/post/${id}`)
    }

    return (
        <div className="post">            
                <Card className="Card" className={classes.root}>
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={seeMoreButton} size="small" color="primary">
                    See Details
                    </Button>
                </CardActions>
                </Card>
        </div>
    );
};

export default Post;