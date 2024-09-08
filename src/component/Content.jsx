
import { FaFacebookSquare, FaTwitter, FaInstagramSquare, FaYoutubeSquare, FaCaretDown, FaCaretUp} from "react-icons/fa";
// import './Content.css'
import '../index.css'


const Content = () => {
   
  return (
    <div className="mainContent container">
        {/* Below code is the FirstBox */}
        <div className="highlight highlight_facebook">
            <div className="users">
                <FaFacebookSquare  role="button" className="userImage" ></FaFacebookSquare>
                <label htmlFor="" className="userName">@Nathan F.</label>
            </div>
            <div className="count">
                <h1 className="userCount">1987</h1>
                <h3 className="userFollower">FOLLOWERS</h3>
            </div>
            <div className="progress">
                <FaCaretUp className="progressUp"></ FaCaretUp>
                <span className="progressCount">12 Today</span>
            </div>
        </div>
        {/* End of First Card */}

        {/* Below code is the SecondtBox */}
        <div className="highlight highlight_Twitter">
            <div className="users">
                <FaTwitter role="button" className="userImage" ></FaTwitter>
                <label htmlFor="" className="userName">@Meshach</label>
            </div>
            <div className="count">
                <h1 className="userCount">1044</h1>
                <h3 className="userFollower">FOLLOWERS</h3>
            </div>
            <div className="progress">
                <FaCaretUp className="progressUp"></ FaCaretUp>
                <span className="progressCount">99 Today</span>
            </div>
        </div>
        {/* End of Second Box */}
      
        {/* Below code is the Third Box */}
        <div className="highlight highlight_Instagram">
            <div className="users">
                <FaInstagramSquare role="button" className="userImage instaImage"></FaInstagramSquare>
                <label htmlFor="" className="userName">@OtunbaNora</label>
            </div>
            <div className="count">
                <h1 className="userCount">11K</h1>
                <h3 className="userFollower">FOLLOWERS</h3>
            </div>
            <div className="progress">
                <FaCaretUp className="progressUp"></ FaCaretUp>
                <span className="progressCount">1099 Today</span>
            </div>
        </div>
        {/* End of Third Box*/}
      
        {/* Below code is the Forth Box */}
        <div className="highlight highlight_Youtube">
            <div className="users">
                <FaYoutubeSquare role="button" className="userImage YoutubeImage" ></FaYoutubeSquare>
                <label htmlFor="" className="userName">@Al-Fatimo</label>
            </div>
            <div className="count">
                <h1 className="userCount">8239</h1>
                <h3 className="userFollower">SUBSCRIBES</h3>
            </div>
            <div className="progress down">
                <FaCaretDown className="progressUp"></FaCaretDown>
                <span className="progressCount">144 Today</span>
            </div>
        </div>
        {/* End of Forth Box*/}
      
    </div>
  )
}

export default Content
