import { useQuery } from '@tanstack/react-query';
import Post from '../Post/Post';
import './posts.scss';
import { makeRequest } from '../../axios';

function Posts({ userId }) {
    const { isPending, error, data } = useQuery({
        queryKey: ['posts'],
        queryFn: () => {
            if (userId) {
                return makeRequest.get('/posts?userId=' + userId).then((res) => {
                    return res.data;
                });
            }
            return makeRequest.get('/posts').then((res) => {
                return res.data;
            });
        },
    });

    return (
        <div className="posts">
            {error
                ? 'Something went wrong!'
                : isPending
                ? 'Loading...'
                : data.map((post, index) => <Post post={post} key={post.id} />)}
        </div>
    );
}

export default Posts;
