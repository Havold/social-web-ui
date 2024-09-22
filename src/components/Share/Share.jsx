import { useContext } from 'react';
import './share.scss';
import { AuthContext } from '../../context/authContext';
import { InsertPhotoRounded, AddLocationRounded, LoyaltyRounded } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';

const Share = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="share">
            <div className="top">
                <img src={currentUser.profilePic} alt="avatar" />
                <textarea placeholder={`What's on your mind ${currentUser.name}?`} />
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="item">
                        <input type="file" id="uploadFile" />
                        <label htmlFor="uploadFile">
                            <InsertPhotoRounded className="icon" />
                            <span>Add Image</span>
                        </label>
                    </div>
                    <div className="item">
                        <input type="file" />
                        <label htmlFor="">
                            <AddLocationRounded className="icon" />
                            <span>Add Place</span>
                        </label>
                    </div>
                    <div className="item">
                        <input type="file" />
                        <label htmlFor="">
                            <LoyaltyRounded className="icon" />
                            <span>Tag Friends</span>
                        </label>
                    </div>
                </div>
                <div className="right">
                    <button>Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;
