import { useContext, useState } from 'react';
import './updateModal.scss';
import { AuthContext } from '../../context/authContext';
import { Close } from '@mui/icons-material';
import { makeRequest } from '../../axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const UpdateModal = ({ showUpdateModal, setShowUpdateModal }) => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const queryClient = useQueryClient();
    const [inputs, setInputs] = useState({
        username: currentUser.username,
        email: currentUser.email,
        name: currentUser.name,
        city: currentUser.city,
        website: currentUser.website,
        phone: currentUser.phone,
    });

    const [coverPic, setCoverPic] = useState({ preview: currentUser.coverPic });
    const [profilePic, setProfilePic] = useState({ preview: currentUser.profilePic });

    const upload = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        const res = await makeRequest.post('/upload', formData);
        return `/upload/` + res.data;
    };

    const handleChangeInput = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const mutation = useMutation({
        mutationFn: (newInfo) => {
            return makeRequest.put('/users', newInfo);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['profile'] });
        },
    });

    const handleUpdate = async () => {
        const coverURL = coverPic.preview === currentUser.coverPic ? currentUser.coverPic : await upload(coverPic);
        const profileURL =
            profilePic.preview === currentUser.profilePic ? currentUser.profilePic : await upload(profilePic);
        mutation.mutate({ ...inputs, coverPic: coverURL, profilePic: profileURL });
        setCurrentUser((prev) => ({ ...prev, ...inputs, coverPic: coverURL, profilePic: profileURL }));
        setShowUpdateModal(false);
    };

    const handleChangePic = (e, isCover = false) => {
        const file = e.target.files[0];
        if (file) {
            file.preview = URL.createObjectURL(file);
            if (isCover) {
                setCoverPic(file);
            } else setProfilePic(file);
        }
    };

    return (
        <div className="updateModal">
            <div className="container">
                <Close className="closeIcon" onClick={() => setShowUpdateModal(!showUpdateModal)} />
                <div className="title">
                    <h2>User Profile</h2>
                    <span>Manage your details, change your password.</span>
                </div>
                <div className="infoContainer">
                    <div className="top">
                        <div className="left">
                            <input
                                style={{ display: 'none' }}
                                type="file"
                                id="uploadProfilePic"
                                onChange={handleChangePic}
                            />
                            <label htmlFor="uploadProfilePic">
                                <img src={profilePic.preview} alt="avatar" />
                            </label>
                            <span className="name">{currentUser.name}</span>
                            <span className="username">{currentUser.username}</span>
                        </div>
                        <div className="right">
                            <h3>General information</h3>
                            <form>
                                <div className="inputsContainer">
                                    <div className="item">
                                        <label htmlFor="name">Your username</label>
                                        <input
                                            onChange={handleChangeInput}
                                            value={inputs.username || ''}
                                            className="bold"
                                            type="text"
                                            placeholder="Enter your username"
                                            id="username"
                                            name="username"
                                        />
                                    </div>
                                    <div className="item">
                                        <label htmlFor="name">Your name</label>
                                        <input
                                            onChange={handleChangeInput}
                                            value={inputs.name || ''}
                                            className="bold"
                                            type="text"
                                            placeholder="Enter your name"
                                            id="name"
                                            name="name"
                                        />
                                    </div>
                                </div>
                                <div className="inputsContainer">
                                    <div className="item">
                                        <label htmlFor="city">Your city</label>
                                        <input
                                            onChange={handleChangeInput}
                                            value={inputs.city || ''}
                                            type="text"
                                            placeholder="Enter your city"
                                            id="city"
                                            name="city"
                                        />
                                    </div>
                                    <div className="item">
                                        <label htmlFor="website">Your website</label>
                                        <input
                                            onChange={handleChangeInput}
                                            value={inputs.website || ''}
                                            type="text"
                                            placeholder="Enter your website"
                                            id="website"
                                            name="website"
                                        />
                                    </div>
                                </div>
                            </form>
                            <input
                                style={{ display: 'none' }}
                                type="file"
                                id="uploadCoverPic"
                                onChange={(e) => {
                                    handleChangePic(e, true);
                                }}
                            />
                            <label htmlFor="uploadCoverPic">
                                <span>Cover picture</span>
                                <img src={coverPic.preview} alt="coverPic" />
                            </label>
                        </div>
                    </div>
                    <div className="bottom">
                        <h3>Security</h3>
                        <form>
                            <div className="item">
                                <label htmlFor="email">Email</label>
                                <input
                                    onChange={handleChangeInput}
                                    value={inputs.email || ''}
                                    type="email"
                                    placeholder="Enter your email"
                                    id="email"
                                    name="email"
                                />
                            </div>
                            <div className="item">
                                <label htmlFor="password">Password</label>
                                <div>
                                    <input
                                        onChange={handleChangeInput}
                                        style={{ color: '#ccc' }}
                                        value="12345"
                                        type="password"
                                        placeholder="Enter your password"
                                        id="password"
                                        readOnly
                                    />
                                    <span>Change</span>
                                </div>
                            </div>
                            <div className="item">
                                <label htmlFor="phone">Phone number</label>
                                <input
                                    onChange={handleChangeInput}
                                    value={inputs.phone || ''}
                                    type="text"
                                    placeholder="Enter your phone number"
                                    id="phone"
                                    name="phone"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="buttons">
                    <button className="cancelBtn" onClick={() => setShowUpdateModal(!showUpdateModal)}>
                        Cancel
                    </button>
                    <button className="updateBtn" onClick={handleUpdate}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;
