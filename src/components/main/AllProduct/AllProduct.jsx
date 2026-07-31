import { useState } from "react";
import "../../../App.css";
import "./allProduct.css";
import CategoryPanel from "./CategotyPanel/Category";

const AllProduct = ({ product, inptHead }) => {
  const [selectShop, setSelectShop] = useState("Default sorting");
  const [liCategor, setLiCategor] = useState("All Plants");

  const [clickCategory, setClickCategory] = useState("");
  const [clickSize, setClickSize] = useState("");

  const filteredProducts = product?.filter((ell) => {
    if (!ell.title.toLowerCase().includes(inptHead.toLowerCase())) return false;
    if (clickCategory && ell.category !== clickCategory) return false;
    if (clickSize && ell.size !== clickSize) return false;
    if (liCategor === "New Arrivals" && !ell.isNew) return false;
    if (liCategor === "Sale" && !ell.oldPrice) return false;
    if (selectShop !== "Default sorting" && ell.title !== selectShop)
      return false;
    return true;
  });

  return (
    <section>
      <div className="positionCenter">
        <div className="leftAndRightPanels">
          <CategoryPanel
            product={product}
            clickCategory={clickCategory}
            setClickCategory={setClickCategory}
            clickSize={clickSize}
            setClickSize={setClickSize}
          />

          <div className="allRightPanel">
            <nav className="navPanel">
              <ul>
                <li>
                  <a
                    style={{
                      color: liCategor === "All Plants" ? "green" : undefined,
                    }}
                    onClick={(e) => {
                      setLiCategor("All Plants");
                      setClickCategory("");
                      setClickSize("");
                    }}
                    href="#"
                  >
                    All Plants
                  </a>
                </li>
                <li>
                  <a
                    style={{
                      color: liCategor === "New Arrivals" ? "green" : undefined,
                    }}
                    onClick={(e) => {
                      setLiCategor("New Arrivals");
                    }}
                    href="#"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    style={{
                      color: liCategor === "Sale" ? "green" : undefined,
                    }}
                    onClick={(e) => {
                      setLiCategor("Sale");
                    }}
                    href="#"
                  >
                    Sale
                  </a>
                </li>
              </ul>
              <div className="selectBox">
                <p>Short by:</p>
                <select onChange={(e) => setSelectShop(e.target.value)}>
                  <option
                    style={{
                      backgroundColor:
                        selectShop === "Default sorting" ? "green" : undefined,

                      color:
                        selectShop === "Default sorting" ? "white" : undefined,
                    }}
                  >
                    Default sorting
                  </option>
                  {product.map((ell) => (
                    <option
                      style={{
                        backgroundColor:
                          selectShop === ell.title ? "green" : undefined,

                        color: selectShop === ell.title ? "white" : undefined,
                      }}
                      key={ell.id}
                    >
                      {ell.title}
                    </option>
                  ))}
                </select>
              </div>
            </nav>

            <div className="mainPanelProduct">
              {filteredProducts.map((ell) => (
                <div className="mainCardsBox" key={ell.id}>
                  <img src={ell.img} alt={ell.title} />
                  <h6>{ell.title}</h6>
                  <p>${ell.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
