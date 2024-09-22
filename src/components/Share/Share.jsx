import { useContext, useState } from 'react';
import './share.scss';
import { AuthContext } from '../../context/authContext';
import { InsertPhotoRounded, AddLocationRounded, LoyaltyRounded } from '@mui/icons-material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Share = () => {
    const { currentUser } = useContext(AuthContext);
    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState('');
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (newPost) => {
            makeRequest.post('/posts', newPost);
            setDesc('');
        },
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });

    const handleClick = () => {
        mutation.mutate({ desc });
    };

    return (
        <div className="share">
            <div className="top">
                <img src={currentUser.profilePic} alt="avatar" />
                <textarea
                    value={desc}
                    placeholder={`What's on your mind ${currentUser.name}?`}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="item">
                        <input type="file" id="uploadFile" onChange={(e) => setFile(e.target.files[0])} />
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
                    <button onClick={handleClick}>Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;
