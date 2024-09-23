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
import moment from 'moment';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Post = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const queryClient = useQueryClient();

    const {
        isPending: isPendingComments,
        error: errorComments,
        data: dataComments,
    } = useQuery({
        queryKey: ['countComments', post.id],
        queryFn: () => {
            return makeRequest.get('/comments/' + post.id).then((res) => {
                return res.data;
            });
        },
    });

    const {
        isPending: isPendingLikes,
        error: errorLikes,
        data: dataLikes,
    } = useQuery({
        queryKey: ['countLikes', post.id],
        queryFn: () => {
            return makeRequest.get('/likes/' + post.id).then((res) => {
                return res.data;
            });
        },
    });

    const mutationLike = useMutation({
        mutationFn: () => {
            return makeRequest.post('/likes/' + post.id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['countLikes', post.id] });
        },
    });

    const mutationDislike = useMutation({
        mutationFn: () => {
            return makeRequest.delete('/likes/' + post.id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['countLikes', post.id] });
        },
    });

    const handleLike = () => {
        setLiked(!liked);
        mutationLike.mutate();
    };

    const handleDislike = () => {
        setLiked(!liked);
        mutationDislike.mutate();
    };

    return (
        <div className="post">
            <div className="user">
                <div className="left">
                    <img src={post.profilePic} alt="avatar" />
                    <div className="userInfo">
                        <span className="name">{post.name}</span>
                        <span className="date">{moment(post.createdAt).fromNow()}</span>
                    </div>
                </div>
                <div className="right">
                    <MoreVertRounded />
                </div>
            </div>
            <div className="content">
                <p>{post.desc}</p>
                {post.img ? <img src={'./upload/' + post.img} alt="image_description" /> : <></>}
            </div>
            <div className="info">
                <div className="item">
                    {liked ? (
                        <FavoriteRounded style={{ color: 'red' }} onClick={handleDislike} className="icon" />
                    ) : (
                        <FavoriteBorderRounded onClick={handleLike} className="icon" />
                    )}
                    <span>{errorLikes ? 'error' : isPendingLikes ? '...' : dataLikes.length} Likes</span>
                </div>
                <div className="item" onClick={() => setCommentsOpen(!commentsOpen)}>
                    <CommentRounded className="icon" />
                    <span>
                        {errorComments ? 'error' : isPendingComments ? '...' : dataComments ? dataComments.length : 0}{' '}
                        Comments
                    </span>
                </div>
                <div className="item">
                    <ShareRounded className="icon" />
                    <span>Share</span>
                </div>
            </div>
            {commentsOpen && <Comments postId={post.id} />}
        </div>
    );
};

export default Post;
