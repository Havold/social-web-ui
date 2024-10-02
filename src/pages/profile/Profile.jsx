import { useContext, useState } from 'react';
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
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';

const Profile = ({ showUpdateModal, setShowUpdateModal }) => {
    const { currentUser } = useContext(AuthContext);
    const userId = parseInt(useLocation().pathname.split('/')[2]);
    const queryClient = useQueryClient();

    const {
        isPending: profileIsPending,
        error: profileError,
        data: profileData,
    } = useQuery({
        queryKey: ['profile'],
        queryFn: () => {
            return makeRequest.get('/users/' + userId).then((res) => {
                return res.data;
            });
        },
    });

    const {
        isPending: relationshipIsPending,
        error: relationshipError,
        data: relationshipData,
    } = useQuery({
        queryKey: ['relationship'],
        queryFn: () => {
            return makeRequest.get('/relationships').then((res) => {
                return res.data;
            });
        },
    });

    const relationshipMutation = useMutation({
        mutationFn: (followed) => {
            if (followed) {
                return makeRequest.delete('/relationships?userId=' + userId);
            }
            return makeRequest.post('/relationships?userId=' + userId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['relationship'] });
        },
    });

    const handleFollow = () => {
        relationshipMutation.mutate(relationshipData.includes(userId));
    };

    return (
        <div className="profile">
            {profileError ? (
                'Something went wrong! '
            ) : profileIsPending ? (
                'Loading...'
            ) : (
                <>
                    <div className="images">
                        {profileData.coverPic ? (
                            <img src={profileData.coverPic} alt="cover" className="cover" />
                        ) : (
                            <div style={{ backgroundColor: 'var(--bg)' }} alt="cover" className="cover" />
                        )}
                        <img src={profileData.profilePic} alt="avatar" className="avatar" />
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
                                <span className="name">{profileData.name}</span>
                                <div className="contact">
                                    <div className="item">
                                        <LocationOnRounded fontSize="medium" />
                                        <span>{profileData.city}</span>
                                    </div>
                                    <div className="item">
                                        <PublicRounded fontSize="medium" />
                                        <span>{profileData.website}</span>
                                    </div>
                                </div>
                                {profileData.id === currentUser.id ? (
                                    <button onClick={() => setShowUpdateModal(!showUpdateModal)}>Update</button>
                                ) : (
                                    <button onClick={handleFollow}>
                                        {relationshipError
                                            ? 'Error'
                                            : relationshipIsPending
                                            ? 'Loading...'
                                            : relationshipData.includes(userId)
                                            ? 'Following'
                                            : 'Follow'}
                                    </button>
                                )}
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
