import "./header.css";
import "../../../src/App.css";
import Vector from "./images/Vector.png";
import Vector2 from "./images/Vector2.png";
import Logout from "./images/Logout.png";
import VectorLogo from "./images/VectorLogo.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="positionCenter">
          <nav className="mainHeader">
            <div className="boxLogo">
              <img src={VectorLogo} alt="logo" />
              <span>GREENSHOP</span>
            </div>

            <ul className="ulNav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Plant Care</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
            </ul>

            <div className="logOutNav">
              <a href="#">
                <img className="pngAut1" src={Vector2} alt="img" />
              </a>

              <a href="#">
                <img className="pngAut2" src={Vector} alt="img" />
              </a>

              <button>
                <img src={Logout} alt="imgOut" />
                Login
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
