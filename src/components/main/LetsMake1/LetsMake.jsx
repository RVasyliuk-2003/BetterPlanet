import "./letsMake.css";
import "../../../App.css";
import mainPng from "./images/mainPng.png";

const LetsMake = () => {
  return (
    <>
      <section>
        <div className="positionCenter colorMainBox">
          <div className="leftMainBox">
            <p className="welcome_p">Welcome to GreenShop</p>
            <h1>
              Let’s Make a <br /> Better <span>Planet</span>
            </h1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>

            <button>SHOP NOW</button>
          </div>

          <div className="rightMainBox">
            <img className="imgMain" src={mainPng} alt="img" />
            <img className="imgMimi" src={mainPng} alt="img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default LetsMake;
