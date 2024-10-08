import Posts from '../../components/Posts/Posts';
import Share from '../../components/Share/Share';
import Stories from '../../components/Stories/Stories';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Stories />
            <Share />
            <Posts />
        </div>
    );
};

export default Home;
