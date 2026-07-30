import "../../../App.css";
import "./advertsing.css";
import img1 from "./images/image14.png";
import img2 from "./images/image15.png";

import ShopNow from "../LetsMake1/ShopNow/ShopNow";
import { useState } from "react";

const Advertsing = () => {
  const [modalShop, setModalShop] = useState(false);

  return (
    <section>
      <div className="positionCenter centerRelatuve">
        <div className="mainNews">
          <div className="containerNews">
            <img src={img1} alt="img" />

            <div>
              <h5>
                SUMMER CACTUS <br /> & SUCCULENTS
              </h5>
              <p>
                We are an online plant shop offering a wide <br /> range of
                cheap and trendy plants
              </p>

              <button onClick={() => setModalShop(true)}>find more</button>
            </div>
          </div>

          <div className="containerNews">
            <img src={img2} alt="img" />

            <div>
              <h5>
                SUMMER CACTUS <br /> & SUCCULENTS
              </h5>
              <p>
                We are an online plant shop offering a wide <br /> range of
                cheap and trendy plants
              </p>
              <button onClick={() => setModalShop(true)}>find more</button>
            </div>
          </div>
        </div>
        <ShopNow modalShop={modalShop} setModalShop={setModalShop} />
      </div>
    </section>
  );
};

export default Advertsing;
