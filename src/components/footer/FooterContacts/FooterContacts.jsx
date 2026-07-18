import "./footerContacts.css";

import logo from "./images/Logo.png";
import Calling from "./images/Calling.png";
import Location from "./images/Location.png";
import Message from "./images/Message.png";

const FooterContacts = () => {
  return (
    <div className="mainBox">
      <img src={logo} alt="Logo" />
      <div className="contactBoxs">
        <img src={Location} alt="png" />
        <a href="#">
          70 West Buckingham Ave. <br /> Farmingdale, NY 11735
        </a>
      </div>
      <div className="contactBoxs">
        <img src={Calling} alt="png" /> <a href="#">contact@greenshop.com</a>
      </div>
      <div className="contactBoxs">
        <img src={Message} alt="png" /> <a href="#">+88 01911 717 490</a>
      </div>
    </div>
  );
};

export default FooterContacts;
