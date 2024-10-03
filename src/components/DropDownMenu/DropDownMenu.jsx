import { Link, useNavigate } from 'react-router-dom';
import './dropDownMenu.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { LogoutRounded, Person } from '@mui/icons-material';
import { makeRequest } from '../../axios';

const DropDownMenu = () => {
    const { currentUser, setHasAccessToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = async () => {
        await makeRequest.post('/auth/logout');
        setHasAccessToken(false);
        navigate('/login');
    };
    return (
        <div className="dropDownMenu">
            <ul>
                <Link to={`/profile/${currentUser.id}`}>
                    <li>
                        <Person className="icon" />
                        <span>Profile</span>
                    </li>
                </Link>
                <li onClick={handleLogOut}>
                    <LogoutRounded className="icon" />
                    <span>Log out</span>
                </li>
            </ul>
        </div>
    );
};

export default DropDownMenu;
