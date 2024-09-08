
import { FaFacebookSquare, FaInstagramSquare,  FaCaretUp, FaCaretDown, FaTwitterSquare, FaYoutube} from "react-icons/fa";
// import './Subcontent.css'
import '../../index.css'


const Subcontent = () => {
  return (
    <div className='subcontent container'>
        
        <h1 className="toptitle">Overview - Today</h1>
        <div className="boxMode">
            {/* Below code is the Start box Model-One */}
            <div className="box stat">
                <div className="icon statTop">
                    <h3 className="statLabel">Page View</h3>
                    <FaFacebookSquare className="statImg"></FaFacebookSquare>
                </div>
                <div className="statDown">
                    <h1 className="statCount">87</h1>
                    <div className="imgIcon statProgress up">
                        <FaCaretUp className="statIcon"></FaCaretUp>
                        <h4 className="statPlabel">5%</h4>
                    </div>
                </div>
            </div>
            {/* Below code is the End box Model-One */}

            {/* Below code is the Start box Model-Two */}
            <div className="box stat">
                <div className="icon statTop">
                    <h3 className="statLabel">Likes</h3>
                    <FaFacebookSquare className="statImg"></FaFacebookSquare>
                </div>
                <div className="statDown">
                    <h1 className="statCount">52</h1>
                    <div className="imgIcon statProgress up">
                        <FaCaretDown className="statIcon"></FaCaretDown>
                        <h4 className="statPlabel">2%</h4>
                    </div>
                </div>
            </div>
            {/* Below code is the End box Model-Two */}

            {/* Below code is the Start box Model-Three */}
            <div className="box stat">
                <div className="icon statTop">
                    <h3 className="statLabel">Likes</h3>
                    <FaInstagramSquare className="statImg"></FaInstagramSquare>
                </div>
                <div className="statDown">
                    <h1 className="statCount">5462</h1>
                    <div className="imgIcon statProgress up">
                        <FaCaretUp className="statIcon"></FaCaretUp>
                        <h4 className="statPlabel">2257%</h4>
                    </div>
                </div>
            </div>
            {/* Below code is the End box Model-Three */}


            {/* Below code is the Start box Model-Fourth */}
            <div className="box stat">
                <div className="icon statTop">
                    <h3 className="statLabel">Profile View</h3>
                    <FaInstagramSquare className="statImg"></FaInstagramSquare>
                </div>
                <div className="statDown">
                    <h1 className="statCount">52K</h1>
                    <div className="imgIcon statProgress up">
                        <FaCaretUp className="statIcon"></FaCaretUp>
                        <h4 className="statPlabel">1375%</h4>
                    </div>
                </div>
            </div>
            {/* Below code is the End box Model-Fourth */}

            {/* Below code is the Start box Model-Fiveth */}
            <div className="box stat">
                <div className="icon statTop">
                    <h3 className="statLabel">Retweets</h3>
                    <FaTwitterSquare className="statImg"></FaTwitterSquare>
                </div>
                <div className="statDown">
                    <h1 className="statCount">117</h1>
                    <div className="imgIcon statProgress up">
                        <FaCaretUp className="statIcon"></FaCaretUp>
                        <h4 className="statPlabel">303%</h4>
                    </div>
                </div>
            </div>
            {/* Below code is the End box Model-Fiveth */}

            {/* Below code is the Start box Model-Sixth */}
            <div className="box stat">
                <div className="icon statTop">
                    <h3 className="statLabel">Likes</h3>
                    <FaTwitterSquare className="statImg"></FaTwitterSquare>
                </div>
                <div className="statDown">
                    <h1 className="statCount">507</h1>
                    <div className="imgIcon statProgress up">
                        <FaCaretUp className="statIcon"></FaCaretUp>
                        <h4 className="statPlabel">553%</h4>
                    </div>
                </div>
            </div>
            {/* Below code is the End box Model-Sixth */}

            {/* Below code is the Start box Model-Seventh */}
            <div className="box stat">
                <div className="icon statTop">
                    <h3 className="statLabel">Likes</h3>
                    <FaYoutube className="statImg"></FaYoutube>
                </div>
                <div className="statDown">
                    <h1 className="statCount">107</h1>
                    <div className="imgIcon statProgress down">
                        <FaCaretDown className="statIcon"></FaCaretDown>
                        <h4 className="statPlabel">19%</h4>
                    </div>
                </div>
            </div>
            {/* Below code is the End box Model-Seventh */}

            {/* Below code is the Start box Model-Eight */}
            <div className="box stat">
                <div className="icon statTop">
                    <h3 className="statLabel">Total Views</h3>
                    <FaYoutube className="statImg"></FaYoutube>
                </div>
                <div className="statDown">
                    <h1 className="statCount">1407</h1>
                    <div className="imgIcon statProgress down">
                        <FaCaretDown className="statIcon"></FaCaretDown>
                        <h4 className="statPlabel">12%</h4>
                    </div>
                </div>
            </div>
            {/* Below code is the End box Model-Eight */}


        </div>
        
       
    </div>
  )
}

export default Subcontent
