import Post from '../Post/Post';
import './posts.scss';

function Posts() {
    const posts = [
        {
            id: 1,
            name: 'Hai Tu',
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/25cc895137a04da3482b762a567a9046.jpeg?lk3s=a5d48078&nonce=91568&refresh_token=f0b665e59cdd1a4c66c611c4a4d71fd2&x-expires=1727103600&x-signature=vY7oO3Kozd4WJHhn4fku%2BR4tt9M%3D&shp=a5d48078&shcp=81f88b70',
            desc: 'Hello everyone. Today, I travel to Hong Kong and have a breakfast in Hong Kong Restaurant. Drink is fresh but food is not tasty like I expected, maybe because I am tired after 5 hours on the airplane. Hope this vacation will be fun!',
            img: 'https://i.pinimg.com/736x/03/c4/53/03c453e56bd40aacc03e9126814407a6.jpg',
            userId: 1,
        },
        {
            id: 2,
            name: 'Hai Tu',
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/25cc895137a04da3482b762a567a9046.jpeg?lk3s=a5d48078&nonce=91568&refresh_token=f0b665e59cdd1a4c66c611c4a4d71fd2&x-expires=1727103600&x-signature=vY7oO3Kozd4WJHhn4fku%2BR4tt9M%3D&shp=a5d48078&shcp=81f88b70',
            desc: 'Hello everyone. Today, I travel to Hong Kong and have a breakfast in Hong Kong Restaurant. Drink is fresh but food is not tasty like I expected, maybe because I am tired after 5 hours on the airplane. Hope this vacation will be fun!',
            img: 'https://i.pinimg.com/736x/03/c4/53/03c453e56bd40aacc03e9126814407a6.jpg',
            userId: 2,
        },
    ];
    return (
        <div className="posts">
            {posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
}

export default Posts;
