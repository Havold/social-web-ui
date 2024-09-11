import UserInfo from '../UserInfo/UserInfo';
import './suggestedUser.scss'

const SuggestedUser = ({ avatar, name }) => {
  return (
    <div className="suggestedUser">
      <UserInfo avatar={avatar} name={name} />
      <div className="actions">
        <button className="follow">Follow</button>
        <button className="dismiss">Dismiss</button>
      </div>
    </div>
  );
};

export default SuggestedUser;
