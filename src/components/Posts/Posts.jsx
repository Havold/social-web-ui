import { useQuery } from '@tanstack/react-query';
import Post from '../Post/Post';
import './posts.scss';
import { makeRequest } from '../../axios';

function Posts() {
    const { isPending, error, data } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            makeRequest.get('/posts').then((res) => {
                return res.data;
            }),
    });

    return (
        <div className="posts">
            {error
                ? 'Something went wrong!'
                : isPending
                ? 'Loading...'
                : data.map((post, index) => <Post post={post} key={index} />)}
        </div>
    );
}

export default Posts;
