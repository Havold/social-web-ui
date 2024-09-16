import { useContext } from 'react';
import './stories.scss';
import { AuthContext } from '../../context/authContext';

function Stories() {
    const { currentUser } = useContext(AuthContext);
    const stories = [
        {
            id: '1',
            name: 'Havold',
            avatar: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/149128164_1379855842365987_6424596517571655275_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHezHCbi3oaiQjzSf8pFNC6kGGyVcIOkTuQYbJVwg6ROzjFWJLz-Q3Y7dJO3NqfSjxPAbm_YwXdKnJMi6hIg8dK&_nc_ohc=c9BgkSROktMQ7kNvgF8SuVn&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AdTHq8VtDCZ3JmH_oIe44yI&oh=00_AYCItTCuBLW1EugSkUneaU4ICLI7xMdDgd66LDcRjimy0Q&oe=670FBB5D',
            img: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/149657892_1379856125699292_4884889491938171786_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeGU7RJaEp0Z0Rl3KyQ60xfQTPV7dT68BzpM9Xt1PrwHOm23mWms6PEHJfEx31kjsX-Hdr_p8oDmZjdDqmmvHlI8&_nc_ohc=gEJN-u3VcMoQ7kNvgHu2RwU&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=ALBPid4Q6JOjAaBvtUb0q6J&oh=00_AYCGWI7qymD2b9LHgjW3V9Sj19J8G48LJGxZXNbvmWSI-g&oe=670FC69F',
        },
        {
            id: '2',
            name: 'Havold',
            avatar: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/149128164_1379855842365987_6424596517571655275_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHezHCbi3oaiQjzSf8pFNC6kGGyVcIOkTuQYbJVwg6ROzjFWJLz-Q3Y7dJO3NqfSjxPAbm_YwXdKnJMi6hIg8dK&_nc_ohc=c9BgkSROktMQ7kNvgF8SuVn&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AdTHq8VtDCZ3JmH_oIe44yI&oh=00_AYCItTCuBLW1EugSkUneaU4ICLI7xMdDgd66LDcRjimy0Q&oe=670FBB5D',
            img: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/149657892_1379856125699292_4884889491938171786_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeGU7RJaEp0Z0Rl3KyQ60xfQTPV7dT68BzpM9Xt1PrwHOm23mWms6PEHJfEx31kjsX-Hdr_p8oDmZjdDqmmvHlI8&_nc_ohc=gEJN-u3VcMoQ7kNvgHu2RwU&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=ALBPid4Q6JOjAaBvtUb0q6J&oh=00_AYCGWI7qymD2b9LHgjW3V9Sj19J8G48LJGxZXNbvmWSI-g&oe=670FC69F',
        },
        {
            id: '3',
            name: 'Havold',
            avatar: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/149128164_1379855842365987_6424596517571655275_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHezHCbi3oaiQjzSf8pFNC6kGGyVcIOkTuQYbJVwg6ROzjFWJLz-Q3Y7dJO3NqfSjxPAbm_YwXdKnJMi6hIg8dK&_nc_ohc=c9BgkSROktMQ7kNvgF8SuVn&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AdTHq8VtDCZ3JmH_oIe44yI&oh=00_AYCItTCuBLW1EugSkUneaU4ICLI7xMdDgd66LDcRjimy0Q&oe=670FBB5D',
            img: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/149657892_1379856125699292_4884889491938171786_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeGU7RJaEp0Z0Rl3KyQ60xfQTPV7dT68BzpM9Xt1PrwHOm23mWms6PEHJfEx31kjsX-Hdr_p8oDmZjdDqmmvHlI8&_nc_ohc=gEJN-u3VcMoQ7kNvgHu2RwU&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=ALBPid4Q6JOjAaBvtUb0q6J&oh=00_AYCGWI7qymD2b9LHgjW3V9Sj19J8G48LJGxZXNbvmWSI-g&oe=670FC69F',
        },
    ];
    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.avatar} alt="thumbnail" className="thumbnail" />
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
