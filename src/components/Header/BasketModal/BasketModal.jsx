import "./basketModal.css";

const BasketModal = ({
  setOpenModalWind,
  basketBox,
  deleteProductInBasket,
  countProd,
}) => {
  const totalPrice = basketBox.reduce((acc, ell) => acc + ell.price, 0);

  console.log(basketBox);

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
              X
            </button>

            <div className="countBox">{ell.count}</div>
          </div>
        ))}
      </div>
      <div className="dsfdgdf">
        <p>Total cost:{countProd}</p>
        <h4>Total price: {totalPrice}</h4>

        <button>Buy</button>
      </div>
    </div>
  );
};

export default BasketModal;
