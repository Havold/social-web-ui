import Post from '../Post/Post';
import './posts.scss';

function Posts() {
    const posts = [
        {
            id: 1,
            name: 'Hai Tu',
            avatar: 'https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/25cc895137a04da3482b762a567a9046.jpeg?lk3s=a5d48078&nonce=51733&refresh_token=1ad755b6678028489c2128ee89e7bd4e&x-expires=1726660800&x-signature=eaCxU%2FqBdZ5f%2BtO0euZoxtKzKBY%3D&shp=a5d48078&shcp=81f88b70',
            desc: 'Hello everyone. Today, I travel to Hong Kong and have a breakfast in Hong Kong Restaurant. Drink is fresh but food is not tasty like I expected, maybe because I am tired after 5 hours on the airplane. Hope this vacation will be fun!',
            img: 'https://i.pinimg.com/736x/03/c4/53/03c453e56bd40aacc03e9126814407a6.jpg',
            userId: 1,
        },
        {
            id: 2,
            name: 'Hai Tu',
            avatar: 'https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/25cc895137a04da3482b762a567a9046.jpeg?lk3s=a5d48078&nonce=51733&refresh_token=1ad755b6678028489c2128ee89e7bd4e&x-expires=1726660800&x-signature=eaCxU%2FqBdZ5f%2BtO0euZoxtKzKBY%3D&shp=a5d48078&shcp=81f88b70',
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
