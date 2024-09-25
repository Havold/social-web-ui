import { useContext } from 'react';
import './updateModal.scss';
import { AuthContext } from '../../context/authContext';
import { Close } from '@mui/icons-material';

const UpdateModal = ({ showUpdateModal, setShowUpdateModal }) => {
    const { currentUser } = useContext(AuthContext);
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
                            <img src={currentUser.profilePic} alt="avatar" />
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
                                            value={currentUser.username}
                                            className="bold"
                                            type="text"
                                            placeholder="Enter your username"
                                            id="username"
                                        />
                                    </div>
                                    <div className="item">
                                        <label htmlFor="name">Your name</label>
                                        <input
                                            value={currentUser.name}
                                            className="bold"
                                            type="text"
                                            placeholder="Enter your name"
                                            id="name"
                                        />
                                    </div>
                                </div>
                                <div className="inputsContainer">
                                    <div className="item">
                                        <label htmlFor="city">Your city</label>
                                        <input
                                            value={currentUser.city}
                                            type="text"
                                            placeholder="Enter your city"
                                            id="city"
                                        />
                                    </div>
                                    <div className="item">
                                        <label htmlFor="website">Your website</label>
                                        <input
                                            value={currentUser.website}
                                            type="text"
                                            placeholder="Enter your website"
                                            id="website"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="bottom">
                        <h3>Security</h3>
                        <form>
                            <div className="item">
                                <label htmlFor="email">Email</label>
                                <input
                                    value={currentUser.email}
                                    type="email"
                                    placeholder="Enter your email"
                                    id="email"
                                />
                            </div>
                            <div className="item">
                                <label htmlFor="password">Password</label>
                                <div>
                                    <input
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
                                    value={currentUser.phone}
                                    type="text"
                                    placeholder="Enter your phone number"
                                    id="phone"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="buttons">
                    <button className="cancelBtn" onClick={() => setShowUpdateModal(!showUpdateModal)}>
                        Cancel
                    </button>
                    <button className="updateBtn">Update</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;
