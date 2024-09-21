import './rightBar.scss';
import SuggestedUser from '../SuggestedUser/SuggestedUser';
import UserActivity from '../UserActivity/UserActivity';
import UserInfo from '../UserInfo/UserInfo';

const RightBar = () => {
    const avatar =
        'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/25cc895137a04da3482b762a567a9046.jpeg?lk3s=a5d48078&nonce=91568&refresh_token=f0b665e59cdd1a4c66c611c4a4d71fd2&x-expires=1727103600&x-signature=vY7oO3Kozd4WJHhn4fku%2BR4tt9M%3D&shp=a5d48078&shcp=81f88b70';
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
