import './rightBar.scss';
import SuggestedUser from '../SuggestedUser/SuggestedUser';
import UserActivity from '../UserActivity/UserActivity';
import UserInfo from '../UserInfo/UserInfo';

const RightBar = () => {
    const avatar = '/upload/1727962858790haitu.jpg';
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
                    <UserActivity avatar={avatar} name="Hai Tu" type="changedCover" time={1} />
                    <UserActivity avatar={avatar} name="Hai Tu" type="likedPost" time={2} />
                    <UserActivity avatar={avatar} name="Hai Tu" type="likedComment" time={3} />
                    <UserActivity avatar={avatar} name="Hai Tu" type="posted" time={4} />
                </div>
                <div className="item">
                    <div className="title">Online Friends</div>
                    <div className="onlineItem">
                        <UserInfo avatar={avatar} name="Hai Tu" online={true} />
                    </div>
                    <div className="onlineItem">
                        <UserInfo avatar={avatar} name="Hai Tu" online={true} />
                    </div>
                    <div className="onlineItem">
                        <UserInfo avatar={avatar} name="Hai Tu" online={true} />
                    </div>
                    <div className="onlineItem">
                        <UserInfo avatar={avatar} name="Hai Tu" online={true} />
                    </div>
                    <div className="onlineItem">
                        <UserInfo avatar={avatar} name="Hai Tu" online={true} />
                    </div>
                    <div className="onlineItem">
                        <UserInfo avatar={avatar} name="Hai Tu" online={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBar;
