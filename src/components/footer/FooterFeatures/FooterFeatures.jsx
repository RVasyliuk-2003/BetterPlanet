import { useState } from "react";
import "./footerFeatures.css";

import Frame1 from "./images/Frame.png";
import Frame01 from "./images/Frame01.png";
import Frame2 from "./images/Group2.png";
import Frame3 from "./images/Group3.png";

const FooterFeatures = () => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [inptEmail, setInptEmail] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errorEmailFn = () => {
    if (emailRegex.test(inptEmail)) {
      setErrorEmail(false);
      setInptEmail("");
    } else {
      setErrorEmail(true);
    }
  };

  return (
    <>
      <footer>
        <div className="ftrBoxOne">
          <div className="ftrBoxFour">
            <div className="positionImg">
              <img className="img2" src={Frame01} alt="#" />
              <img className="img1" src={Frame1} alt="#" />
            </div>

            <div className="boxText">
              <h6>Garden Care</h6>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div className="ftrBoxFour">
            <img src={Frame2} alt="#" />
            <div className="boxText">
              <h6>Plant Renovation</h6>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div className="ftrBoxFour">
            <img src={Frame3} alt="#" />
            <div className="boxText">
              <h6>Watering Graden</h6>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div className="ftrBoxFour4">
            <h5>Would you like to join newsletters?</h5>

            <div
              style={{ border: errorEmail ? "1px solid red" : undefined }}
              className="inptAndBtnBox"
            >
              <input
                value={inptEmail}
                onChange={(e) => setInptEmail(e.target.value)}
                type="email"
                placeholder="enter your email address..."
              />
              <button onClick={() => errorEmailFn()}>Join</button>
            </div>

            <p style={{ color: "red" }}>
              {errorEmail ? "Invalid email address" : undefined}
            </p>

            <p>
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFeatures;
