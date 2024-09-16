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
import { DarkModeContext } from '../../context/DarkModeContext';
import { UserContext } from '../../context/UserContext';

const NavBar = () => {
    const { currentUser } = useContext(UserContext);
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
                    <span>{currentUser.username}</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
