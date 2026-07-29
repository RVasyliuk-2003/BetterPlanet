import "./header.css";
import "../../../src/App.css";
import Vector from "./images/Vector.png";
import Vector2 from "./images/Vector2.png";
import Logout from "./images/Logout.png";
import VectorLogo from "./images/VectorLogo.png";

import { Link } from "react-router-dom";

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AppAllProduct">Shop</Link>
              </li>
              <li>
                <Link to="/Advertsing">Plant Care</Link>
              </li>
              <li>
                <Link to="/ourblog">Blogs</Link>
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
