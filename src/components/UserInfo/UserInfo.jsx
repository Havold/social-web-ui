import "./userInfo.scss";

const UserInfo = ({ avatar, name, online = false }) => {
  return (
    <div className="userInfo">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
        {online ? <div className="active"></div> : <></>}
      </div>
      <span>{name}</span>
    </div>
  );
};

export default UserInfo;
