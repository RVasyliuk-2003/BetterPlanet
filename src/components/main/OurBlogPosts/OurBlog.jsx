import "../../../App.css";
import "./ourBlog.css";

import f1 from "./images/f1.png";
import f2 from "./images/f2.png";
import f3 from "./images/f3.png";
import f4 from "./images/f4.png";
import svg from "./images/ArrowRight.png";

import { Link } from "react-router-dom";

const OurBlog = () => {
  return (
    <section>
      <div className="positionCenter">
        <div className="OurBlogMainBox">
          <h4>Our Blog Posts</h4>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <div className="OurBlogMainBox2">
            <div className="OurBlogCard">
              <img src={f1} alt="#" />
              <div className="contentBox">
                <p className="dateP">September 12 I Read in 6 minutes</p>
                <h6>
                  Cactus & Succulent <br /> Care Tips
                </h6>
                <p>
                  Cacti are succulents are easy care plants for any home or
                  patio.
                </p>
                <Link to="#">
                  Read More <img src={svg} alt="#" />
                </Link >
              </div>
            </div>

            <div className="OurBlogCard">
              <img src={f2} alt="#" />
              <div className="contentBox">
                <p className="dateP">September 12 I Read in 6 minutes</p>
                <h6>
                  Cactus & Succulent <br /> Care Tips
                </h6>
                <p>
                  Cacti are succulents are easy care plants for any home or
                  patio.
                </p>
                <Link to="#">
                  Read More <img src={svg} alt="#" />
                </Link>
              </div>
            </div>
            <div className="OurBlogCard">
              <img src={f3} alt="#" />
              <div className="contentBox">
                <p className="dateP">September 12 I Read in 6 minutes</p>
                <h6>
                  Cactus & Succulent <br /> Care Tips
                </h6>
                <p>
                  Cacti are succulents are easy care plants for any home or
                  patio.
                </p>
                <Link to="#">
                  Read More <img src={svg} alt="#" />
                </Link >
              </div>
            </div>
            <div className="OurBlogCard">
              <img src={f4} alt="#" />
              <div className="contentBox">
                <p className="dateP">September 12 I Read in 6 minutes</p>
                <h6>
                  Cactus & Succulent <br /> Care Tips
                </h6>
                <p>
                  Cacti are succulents are easy care plants for any home or
                  patio.
                </p>
                <Link to="#">
                  Read More <img src={svg} alt="#" />
                </Link >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
