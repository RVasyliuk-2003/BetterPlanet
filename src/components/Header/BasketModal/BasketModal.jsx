import "./basketModal.css";

const BasketModal = ({
  setOpenModalWind,
  basketBox,
  deleteProductInBasket,
  countProd,
}) => {
  const totalPrice = basketBox.reduce(
    (acc, ell) => acc + ell.price * ell.count,
    0,
  );

  return (
    <div className="basketModalContainer">
      <button
        onClick={() => setOpenModalWind(false)}
        className="closeModalBasketBtn"
      >
        X
      </button>
      <div className="basketCartBox">
        {basketBox.map((ell) => (
          <div className="basketCart" key={ell.id}>
            <img src={ell.img} alt="img" />
            <div>
              <h5>{ell.title}</h5>
              <p>${ell.price}</p>
            </div>
            <button
              onClick={() => deleteProductInBasket(ell.id)}
              className="deleteProduct"
            >
              {ell.count > 1 ? "-" : "X"}
            </button>

            <div className="countBox">{ell.count}</div>
          </div>
        ))}
      </div>

      {basketBox.length > 0 ? (
        <div className="infoBoxBasket">
          <p>Total cost: {countProd}</p>
          <h4>Total price: {totalPrice}</h4>

          <button>Buy</button>
        </div>
      ) : (
        <div className="basketEmpty">
          <p>The basket is empty</p>
        </div>
      )}
    </div>
  );
};

export default BasketModal;
