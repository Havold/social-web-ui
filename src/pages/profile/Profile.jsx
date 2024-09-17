import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import {
    FacebookRounded,
    Instagram,
    Twitter,
    LinkedIn,
    LocationOnRounded,
    PublicRounded,
    MailRounded,
    MoreVert,
} from '@mui/icons-material';
import './profile.scss';
import Posts from './../../components/Posts/Posts';

const Profile = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className="profile">
            <div className="images">
                <img src={currentUser.cover} alt="cover" className="cover" />
                <img src={currentUser.avatar} alt="avatar" className="avatar" />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="https://www.facebook.com/tho.truong.509511/">
                            <FacebookRounded fontSize="large" />
                        </a>
                        <a href="https://www.instagram.com/sontungmtp/">
                            <Instagram fontSize="large" />
                        </a>
                        <a href="https://x.com/?lang=vi">
                            <Twitter fontSize="large" />
                        </a>
                        <a href="https://www.linkedin.com/">
                            <LinkedIn fontSize="large" />
                        </a>
                    </div>
                    <div className="center">
                        <span className="name">{currentUser.name}</span>
                        <div className="contact">
                            <div className="item">
                                <LocationOnRounded fontSize="medium" />
                                <span>Vietnam</span>
                            </div>
                            <div className="item">
                                <PublicRounded fontSize="medium" />
                                <span>capiboii</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <MailRounded fontSize="large" />
                        <MoreVert fontSize="large" />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    );
};

export default Profile;
