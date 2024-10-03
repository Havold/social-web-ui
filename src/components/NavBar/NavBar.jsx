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
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const NavBar = () => {
    const { currentUser } = useContext(AuthContext);
    const { darkMode, toggle } = useContext(DarkModeContext);
    const [showMenu, setShowMenu] = useState(false);
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
                    {showMenu ? <DropDownMenu /> : <></>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
