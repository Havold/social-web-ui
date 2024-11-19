import { useContext } from 'react';
import './stories.scss';
import { AuthContext } from '../../context/authContext';

function Stories() {
    const { currentUser } = useContext(AuthContext);
    const avatar = '/upload/1727962858790haitu.jpg';
    const img = '/upload/1727964002522japan.jpg';
    const stories = [
        {
            id: '1',
            name: 'Hai Tu',
            avatar: avatar,
            img: img,
        },
        {
            id: '2',
            name: 'Hai Tu',
            avatar: avatar,
            img: img,
        },
        {
            id: '3',
            name: 'Hai Tu',
            avatar: avatar,
            img: img,
        },
    ];
    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} alt="thumbnail" className="thumbnail" />
                <div className="createContainer">
                    <div className="create">
                        <button>+</button>
                        <div className="title">Create story</div>
                    </div>
                </div>
            </div>
            {stories.map((story, index) => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="thumbnail" className="thumbnail" />
                    <img src={story.avatar} alt="avatar" className="avatar" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Stories;
