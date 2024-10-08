import { useContext, useEffect, useRef, useState } from 'react';
import './share.scss';
import { AuthContext } from '../../context/authContext';
import { InsertPhotoRounded, AddLocationRounded, LoyaltyRounded, CloseRounded } from '@mui/icons-material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { Link } from 'react-router-dom';

const Share = () => {
    const { currentUser } = useContext(AuthContext);
    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState('');
    const queryClient = useQueryClient();
    const inputFileRef = useRef();

    const upload = async () => {
        // tạo formData
        const formData = new FormData();
        formData.append('file', file);
        const res = await makeRequest.post('/upload', formData);
        return '/upload/' + res.data;
    };

    const mutation = useMutation({
        mutationFn: (newPost) => {
            return makeRequest.post('/posts', newPost);
        },
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });

    const handleClick = async () => {
        let imgUrl = '';
        if (file) {
            imgUrl = await upload();
        }
        mutation.mutate({ desc, img: imgUrl });
        setDesc('');
        setFile(null);
        if (inputFileRef.current) {
            inputFileRef.current.value = '';
        }
    };

    const handleChangeFile = (e) => {
        const fileUpload = e.target.files[0];
        if (fileUpload) {
            fileUpload.preview = URL.createObjectURL(fileUpload);
            setFile(fileUpload);
        }
    };

    useEffect(() => {
        return () => {
            if (file) {
                URL.revokeObjectURL(file.preview);
            }
        };
    }, [file]);

    return (
        <div className="share">
            <div className="top">
                <Link to={`/profile/${currentUser.id}`}>
                    <img src={currentUser.profilePic} alt="avatar" />
                </Link>
                <textarea
                    value={desc}
                    placeholder={`What's on your mind ${currentUser.name}?`}
                    onChange={(e) => setDesc(e.target.value)}
                />
                {file && (
                    <div className="imgUploadContainer">
                        <img className="imgUpload" src={file.preview} alt="img_upload" />
                        <CloseRounded
                            className="closeIcon"
                            onClick={() => {
                                if (inputFileRef.current) {
                                    inputFileRef.current.value = '';
                                }
                                setFile(null);
                            }}
                        />
                    </div>
                )}
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="item">
                        <input ref={inputFileRef} type="file" id="uploadFile" onChange={handleChangeFile} />
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
