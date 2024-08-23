import Navi from "../Navi/Navi";
import "./header.css";
import {BiMenuAltRight} from 'react-icons/bi'
const Header = () => {
  return (
    <div className="h-wrapper">
      
      <div className="h-container">
        <div className="logo">
          <img src="logo.png" width={120} alt="" />
        </div>

        <div className="navi-menu">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Service</a>
          <a href="">Upcomming Packages</a>

          <button className="btn-tap btn-start">Get in Touch</button>
        </div>
        {/* <div className="menu-icon">
<BiMenuAltRight size={30}/>

        </div> */}
      </div>
      <Navi/>
      
    </div>
  );
};

export default Header;
