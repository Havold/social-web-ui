import {
    CommentRounded,
    FavoriteBorderRounded,
    FavoriteRounded,
    MoreVertRounded,
    ShareRounded,
} from '@mui/icons-material';
import './post.scss';
import { useContext, useState } from 'react';
import Comments from '../Comments/Comments';
import moment from 'moment';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';

const Post = ({ post }) => {
    const [commentsOpen, setCommentsOpen] = useState(false);
    const queryClient = useQueryClient();
    const { currentUser } = useContext(AuthContext);

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
            return makeRequest.get('/likes?postId=' + post.id).then((res) => {
                return res.data;
            });
        },
    });

    const mutationLike = useMutation({
        mutationFn: (liked) => {
            if (liked) {
                return makeRequest.delete('/likes?postId=' + post.id);
            }
            return makeRequest.post('/likes?postId=' + post.id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['countLikes', post.id] });
        },
    });

    const handleLike = () => {
        mutationLike.mutate(dataLikes.includes(currentUser.id));
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
                    {isPendingLikes ? (
                        <></>
                    ) : dataLikes.includes(currentUser.id) ? (
                        <FavoriteRounded style={{ color: 'red' }} onClick={handleLike} className="icon" />
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
