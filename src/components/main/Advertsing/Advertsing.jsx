import "../../../App.css";
import "./advertsing.css";
import img1 from "./images/image14.png";
import img2 from "./images/image15.png";

const Advertsing = () => {
  return (
    <section>
      <div className="positionCenter">
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

              <button>find more</button>
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
              <button>find more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertsing;
