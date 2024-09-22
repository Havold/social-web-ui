import {
    CommentRounded,
    FavoriteBorderRounded,
    FavoriteRounded,
    MoreVertRounded,
    ShareRounded,
} from '@mui/icons-material';
import './post.scss';
import { useState } from 'react';
import Comments from '../Comments/Comments';

const Post = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [commentsOpen, setCommentsOpen] = useState(false);

    return (
        <div className="post">
            <div className="user">
                <div className="left">
                    <img src={post.profilePic} alt="avatar" />
                    <div className="userInfo">
                        <span className="name">{post.name}</span>
                        <span className="date">{post.createdAt}</span>
                    </div>
                </div>
                <div className="right">
                    <MoreVertRounded />
                </div>
            </div>
            <div className="content">
                <p>{post.desc}</p>
                {post.img ? <img src={post.img} alt="image_description" /> : <></>}
            </div>
            <div className="info">
                <div className="item">
                    {liked ? (
                        <FavoriteRounded onClick={() => setLiked(!liked)} className="icon" />
                    ) : (
                        <FavoriteBorderRounded onClick={() => setLiked(!liked)} className="icon" />
                    )}
                    <span>24 Likes</span>
                </div>
                <div className="item" onClick={() => setCommentsOpen(!commentsOpen)}>
                    <CommentRounded className="icon" />
                    <span>24 Comments</span>
                </div>
                <div className="item">
                    <ShareRounded className="icon" />
                    <span>Share</span>
                </div>
            </div>
            {commentsOpen && <Comments />}
        </div>
    );
};

export default Post;
