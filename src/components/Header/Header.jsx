import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "../../../src/App.css";
import Vector from "./images/Vector.png";
import Vector2 from "./images/Vector2.png";
import Logout from "./images/Logout.png";
import VectorLogo from "./images/VectorLogo.png";

import BasketModal from "./BasketModal/BasketModal";

import Regist from "./RegistModal/Regist";

const Header = ({
  inptHead,
  setInptHead,
  basketBox,
  setBasketBox,
  deleteProductInBasket,
}) => {
  const [modalRegistOpen, setModalRegistOpen] = useState(false);
  const [openInpt, setOpenInpt] = useState(false);
  const [openModalWind, setOpenModalWind] = useState(false);

  const countProd = basketBox.reduce((acc, ell) => acc + ell.count, 0);

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
              <div className={openInpt ? "inputBoxHeaher" : null}>
                <input
                  value={inptHead}
                  className={openInpt ? null : "inputHeaher"}
                  type="text"
                  onChange={(e) => setInptHead(e.target.value)}
                />
                {openInpt ? (
                  <p
                    onClick={() => {
                      setOpenInpt((prev) => !prev);
                      setInptHead("");
                    }}
                  >
                    X
                  </p>
                ) : (
                  <img
                    onClick={() => setOpenInpt((prev) => !prev)}
                    className="pngAut1"
                    src={Vector2}
                    alt="img"
                  />
                )}
              </div>

              <button
                onClick={() => setOpenModalWind(true)}
                className="numProdHeader"
              >
                <img className="pngAut2" src={Vector} alt="img" />
                {basketBox.length > 0 && (
                  <p className="numProdHead">{countProd}</p>
                )}
              </button>

              <button
                className="btnLogin"
                onClick={() => setModalRegistOpen(true)}
              >
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
            {openModalWind ? (
              <BasketModal
                setOpenModalWind={setOpenModalWind}
                basketBox={basketBox}
                deleteProductInBasket={deleteProductInBasket}
                countProd={countProd}
              />
            ) : null}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
