import { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';

const Comments = () => {
    const { currentUser } = useContext(AuthContext);
    const comments = [
        {
            id: 1,
            name: 'Havold',
            avatar: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/149128164_1379855842365987_6424596517571655275_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHezHCbi3oaiQjzSf8pFNC6kGGyVcIOkTuQYbJVwg6ROzjFWJLz-Q3Y7dJO3NqfSjxPAbm_YwXdKnJMi6hIg8dK&_nc_ohc=c9BgkSROktMQ7kNvgF8SuVn&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AdTHq8VtDCZ3JmH_oIe44yI&oh=00_AYCItTCuBLW1EugSkUneaU4ICLI7xMdDgd66LDcRjimy0Q&oe=670FBB5D',
            userId: 1,
            desc: 'OMG! I was there 3 day ago. People there are so friendly and atmosphere is so warm. Will come back there one day soon.',
        },
        {
            id: 2,
            name: 'Havold',
            avatar: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/149128164_1379855842365987_6424596517571655275_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHezHCbi3oaiQjzSf8pFNC6kGGyVcIOkTuQYbJVwg6ROzjFWJLz-Q3Y7dJO3NqfSjxPAbm_YwXdKnJMi6hIg8dK&_nc_ohc=c9BgkSROktMQ7kNvgF8SuVn&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AdTHq8VtDCZ3JmH_oIe44yI&oh=00_AYCItTCuBLW1EugSkUneaU4ICLI7xMdDgd66LDcRjimy0Q&oe=670FBB5D',
            userId: 2,
            desc: 'OMG! I was there 3 day ago. People there are so friendly and atmosphere is so warm. Will come back there one day soon.',
        },
    ];
    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="avatar" />
                <input type="text" placeholder="Write a comment..." />
                <button>Send</button>
            </div>
            {comments.map((comment) => (
                <div className="comment" key={comment.id}>
                    <img src={comment.avatar} alt="avatar" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <div className="date">1 hour ago</div>
                </div>
            ))}
        </div>
    );
};

export default Comments;
