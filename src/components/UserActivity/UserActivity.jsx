import UserInfo from "../UserInfo/UserInfo";
import "./userActivity.scss";

const UserActivity = ({ avatar, name, type, time }) => {
  let activity = "";
  switch (type) {
    case "changedCover":
      activity = "changed their cover picture";
      break;
    case "changedAvatar":
      activity = "changed their avatar";
      break;
    case "likedPost":
      activity = "liked a post";
      break;
    case "likedComment":
      activity = "liked a comment";
      break;
    case "posted":
      activity = "posted";
      break;
    default:
      break;
  }

  return (
    <div className="userActivity">
      <div className="left">
        <UserInfo avatar={avatar} name={name} />
        <span className="activity">{activity}</span>
      </div>
      <div className="right">
        <span>{time} min ago</span>
      </div>
    </div>
  );
};

export default UserActivity;
