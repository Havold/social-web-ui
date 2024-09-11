import "./rightBar.scss";
import SuggestedUser from "../SuggestedUser/SuggestedUser";
import UserActivity from "../UserActivity/UserActivity";
import UserInfo from "../UserInfo/UserInfo";

const RightBar = () => {
  const avatar =
    "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/25cc895137a04da3482b762a567a9046.jpeg?lk3s=a5d48078&nonce=96760&refresh_token=5763b305b78c34f2035853d25c7b1d12&x-expires=1726084800&x-signature=E97pAzf9DLjezS9UK%2BiaStAoHpo%3D&shp=a5d48078&shcp=81f88b70";
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <div className="title">Suggestions For You</div>
          <SuggestedUser avatar={avatar} name="Hai Tu" />
          <SuggestedUser avatar={avatar} name="Hai Tu" />
        </div>
        <div className="item">
          <div className="title">Latest Activities</div>
          <UserActivity
            avatar={avatar}
            name="Hai Tu"
            type="changedCover"
            time={1}
          />
          <UserActivity
            avatar={avatar}
            name="Hai Tu"
            type="likedPost"
            time={2}
          />
          <UserActivity
            avatar={avatar}
            name="Hai Tu"
            type="likedComment"
            time={3}
          />
          <UserActivity avatar={avatar} name="Hai Tu" type="posted" time={4} />
        </div>
        <div className="item">
          <div className="title">Online Friends</div>
            <div className="onlineItem">
              <UserInfo avatar={avatar} name='Hai Tu' online={true} />
            </div>
            <div className="onlineItem">
              <UserInfo avatar={avatar} name='Hai Tu' online={true} />
            </div>
            <div className="onlineItem">
              <UserInfo avatar={avatar} name='Hai Tu' online={true} />
            </div>
            <div className="onlineItem">
              <UserInfo avatar={avatar} name='Hai Tu' online={true} />
            </div>
            <div className="onlineItem">
              <UserInfo avatar={avatar} name='Hai Tu' online={true} />
            </div>
            <div className="onlineItem">
              <UserInfo avatar={avatar} name='Hai Tu' online={true} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
