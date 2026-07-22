import "./header.css";
import "../../../src/App.css";
import Vector from "./images/Vector.png";
import Vector2 from "./images/Vector2.png";
import Logout from "./images/Logout.png";
import VectorLogo from "./images/VectorLogo.png";

import Regist from "./RegistModal/Regist";
import { useState } from "react";

const Header = () => {
  const [modalRegistOpen, setModalRegistOpen] = useState(false);

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

              <button onClick={() => setModalRegistOpen(true)}>
                <img src={Logout} alt="imgOut" />
                Login
              </button>
              <div>
                {modalRegistOpen ? (
                  <Regist
                    modalRegistOpen={modalRegistOpen}
                    setModalRegistOpen={setModalRegistOpen}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
