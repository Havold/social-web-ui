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

const NavBar = () => {
    const { darkMode, toggle } = useContext(DarkModeContext);

    const avatar =
        'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/c14a92a8e2e23babececab98c0f67fac.jpeg?lk3s=a5d48078&nonce=50408&refresh_token=ea762ee039d145a7273a84edb5c369c8&x-expires=1726660800&x-signature=WlQcUlb%2BlgRTT2EsR0ywSnX2mAg%3D&shp=a5d48078&shcp=81f88b70';
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
                    <img className="avatar" src={avatar} alt="avatar" />
                    <span>Son Tung</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
