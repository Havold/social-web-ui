import './navBar.scss';
import {
    DarkModeOutlined,
    AppsOutlined,
    MailOutlineOutlined,
    NotificationsNoneOutlined,
    WbSunnyRounded,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';

const NavBar = () => {
    const { currentUser } = useContext(AuthContext);
    const { darkMode, toggle } = useContext(DarkModeContext);
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
                <div className="user">
                    <img className="avatar" src={currentUser.avatar} alt="avatar" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
