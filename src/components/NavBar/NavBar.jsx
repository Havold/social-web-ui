import "./navBar.scss";
import {
  DarkModeOutlined,
  AppsOutlined,
  MailOutlineOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const NavBar = () => {
  const avatar =
    "https://p9-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/c14a92a8e2e23babececab98c0f67fac.jpeg?lk3s=a5d48078&nonce=11710&refresh_token=53de8d581dcb27fb4feec6490fcbdf9b&x-expires=1726070400&x-signature=cK%2BK2e8AZO6ptgJSSQHxVFUZgXo%3D&shp=a5d48078&shcp=81f88b70";
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/">
          <span>METAN</span>
        </Link>
        <DarkModeOutlined className="icon" />
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
