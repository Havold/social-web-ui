import './navBar.scss';
import {
    DarkModeOutlined,
    AppsOutlined,
    MailOutlineOutlined,
    NotificationsNoneOutlined,
    WbSunnyRounded,
    Person,
    LogoutRounded,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import Search from '../Search/Search';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { makeRequest } from '../../axios';

const NavBar = () => {
    const { currentUser, setHasAccessToken } = useContext(AuthContext);
    const { darkMode, toggle } = useContext(DarkModeContext);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const menuData = [
        {
            id: 1,
            href: `/profile/${currentUser.id}`,
            icon: <Person className="icon" />,
            content: 'Profile',
        },
        {
            id: 2,
            onClick: async () => {
                await makeRequest.post('/auth/logout');
                setHasAccessToken(false);
                navigate('/login');
            },
            icon: <LogoutRounded className="icon" />,
            content: 'Log out',
        },
    ];
    return (
        <div className="navBar">
            <div className="left">
                <Link to="/">
                    <span>METAN</span>
                </Link>
                {darkMode ? (
                    <WbSunnyRounded className="icon" onClick={toggle} />
                ) : (
                    <DarkModeOutlined className="icon" onClick={toggle} />
                )}
                <AppsOutlined className="icon" />
            </div>
            <Search />
            <div className="right">
                <MailOutlineOutlined className="icon" />
                <NotificationsNoneOutlined className="icon" />
                <div className="userContainer" onClick={() => setShowMenu(!showMenu)}>
                    <div className="user">
                        <img className="avatar" src={currentUser.profilePic} alt="avatar" />
                    </div>
                    {showMenu ? <DropDownMenu data={menuData} /> : <></>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
