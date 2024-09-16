import {
    CommentRounded,
    FavoriteBorderRounded,
    FavoriteRounded,
    MoreVertRounded,
    ShareRounded,
} from '@mui/icons-material';
import './post.scss';
import { useState } from 'react';

const Post = ({ post }) => {
    const [liked, setLiked] = useState(false);

    const handleClickLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="post">
            <div className="user">
                <div className="left">
                    <img src={post.avatar} alt="avatar" />
                    <div className="userInfo">
                        <span className="name">{post.name}</span>
                        <span className="date">1 min ago</span>
                    </div>
                </div>
                <div className="right">
                    <MoreVertRounded />
                </div>
            </div>
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img} alt="image_description" />
            </div>
            <div className="info">
                <div className="item">
                    {liked ? (
                        <FavoriteRounded onClick={handleClickLike} className="icon" />
                    ) : (
                        <FavoriteBorderRounded onClick={handleClickLike} className="icon" />
                    )}
                    <span>24 Likes</span>
                </div>
                <div className="item">
                    <CommentRounded className="icon" />
                    <span>24 Comments</span>
                </div>
                <div className="item">
                    <ShareRounded className="icon" />
                    <span>Share</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
