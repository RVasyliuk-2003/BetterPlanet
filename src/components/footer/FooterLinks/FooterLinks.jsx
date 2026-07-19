import "./footerLinks.css";

import imagePay from "./images/image16.png";
import Facebook from "./images/Facebook.png";
import instagram from "./images/instagram.png";
import Twitter from "./images/Twitter.png";
import linkedin from "./images/linkedin.png";
import Union from "./images/Union.png";

const FooterLinks = () => {
  return (
    <div>
      <div className="mainBoxLinks">
        <ul className="ulListNav">
          <li className="mainLiNav">My Account</li>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">Our stores</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">Specials</a>
          </li>
        </ul>
        <ul className="ulListNav">
          <li className="mainLiNav">Help & Guide</li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">How to Buy</a>
          </li>
          <li>
            <a href="#">Shipping & Delivery</a>
          </li>
          <li>
            <a href="#">Product Policy</a>
          </li>
          <li>
            <a href="#">How to Return</a>
          </li>
        </ul>
        <ul className="ulListNav">
          <li className="mainLiNav">Categories</li>
          <li>
            <a href="#">House Plants</a>
          </li>
          <li>
            <a href="#">Potter Plants</a>
          </li>
          <li>
            <a href="#">Seeds</a>
          </li>
          <li>
            <a href="#">Small Plants</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
        </ul>

        <div className="mediaContainer">
          <div className="SocialMediaBox">
            <p>Social Media</p>
            <div className="imgMedia">
              <img src={Facebook} alt="svg" />
              <img src={instagram} alt="svg" />
              <img src={Twitter} alt="svg" />
              <img src={linkedin} alt="svg" />
              <img src={Union} alt="svg" />
            </div>
          </div>

          <div className="weAcceptBox">
            <p>We accept</p>
            <img src={imagePay} alt="svg" />
          </div>
        </div>
      </div>
      <div className="boxReserved">
        <p>
          <a href="#">© 2021 GreenShop. All Rights Reserved.</a>
        </p>
      </div>
    </div>
  );
};

export default FooterLinks;
