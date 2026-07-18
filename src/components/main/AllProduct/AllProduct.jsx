import "../../../App.css";
import "./allProduct.css";
import CategoryPanel from "./CategotyPanel/Category";

const AllProduct = ({ product }) => {
  return (
    <section>
      <div className="positionCenter">
        <div className="leftAndRightPanels">
          <CategoryPanel product={product} />

          <div className="allRightPanel">
            <nav className="navPanel">
              <ul>
                <li>
                  <a href="#">All Plants</a>
                </li>
                <li>
                  <a href="#">New Arrivals</a>
                </li>
                <li>
                  <a href="#">Sale</a>
                </li>
              </ul>
              <div className="selectBox">
                <p>Short by:</p>
                <select>
                  <option>Default sorting</option>
                  {product.map((ell) => (
                    <option key={ell.id}>{ell.title}</option>
                  ))}
                </select>
              </div>
            </nav>

            <div className="mainPanelProduct">
              {product.map((ell) => (
                <div className="mainCardsBox" key={ell.id}>
                  <img src={ell.img} alt={ell.name} />
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
