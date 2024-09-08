// import './Header.css'
import '../index.css'



const Header = ({isToggle, setIsToggle,  isdark, setDark}) => {
 
  return (
  <div className="container header">
      <div className="title">
        <h1 className='titleIcon'>Social media Dashboard</h1>
        <span>Total Followers: 23,004</span>
      </div>
      <div className="ToggleMode">
        <label htmlFor="darkMode" className="mode">{isdark ? "Dark Mode" : "Light Mode"}</label>
        <div className="theme">
          <input type="checkbox" name="" id="darkMode"
            checked={isToggle} onChange={() => {setIsToggle(!isToggle); setDark(!isdark)}}
            value={isdark}
          />
          <label htmlFor="darkMode" name=""></label>
        </div>
      </div>
    </div>
  )
}

export default Header
