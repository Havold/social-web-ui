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
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const { currentUser } = useContext(AuthContext);
    const userId = useLocation().pathname.split('/')[2];

    const { isPending, error, data } = useQuery({
        queryKey: ['users'],
        queryFn: () => {
            return makeRequest.get('/users/' + userId).then((res) => {
                return res.data;
            });
        },
    });

    return (
        <div className="profile">
            {error ? (
                'Something went wrong! '
            ) : isPending ? (
                'Loading...'
            ) : (
                <>
                    <div className="images">
                        <img src={data.coverPic} alt="cover" className="cover" />
                        <img src={data.profilePic} alt="avatar" className="avatar" />
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
                                <span className="name">{data.name}</span>
                                <div className="contact">
                                    <div className="item">
                                        <LocationOnRounded fontSize="medium" />
                                        <span>{data.city}</span>
                                    </div>
                                    <div className="item">
                                        <PublicRounded fontSize="medium" />
                                        <span>{data.website}</span>
                                    </div>
                                </div>
                                {data.id === currentUser.id ? <button>Update</button> : <button>Follow</button>}
                            </div>
                            <div className="right">
                                <MailRounded fontSize="large" />
                                <MoreVert fontSize="large" />
                            </div>
                        </div>
                        <Posts userId={userId} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Profile;
