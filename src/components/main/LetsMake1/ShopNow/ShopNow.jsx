import { useState } from "react";
import "./shopNow.css";
import LetsMake from "../../LetsMake1/LetsMake";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const ShopNow = ({ setModalShop, modalShop }) => {
  const [inpt, setInpt] = useState("");
  const [errorNumber, setErrorNumber] = useState(true);

  const nun =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  const inptNum = () => {
    if (nun.test(inpt)) {
      setErrorNumber(true);
      setInpt("");
    } else {
      setErrorNumber(false);
    }
  };

  return (
    <div className={modalShop ? "positinBoxShop" : "positinBoxShopClossest"}>
      <button className="btnClosest" onClick={() => setModalShop(false)}>
        X
      </button>

      <h6>Are you interested in plants?</h6>

      <div className="boxShopinpt">
        <p>Give us a call:</p>
        <PhoneInput
          defaultCountry="ua"
          style={{ border: errorNumber ? undefined : "1px solid red" }}
          onChange={(inpt) => setInpt(inpt)}
          value={inpt}
          type="tel"
        />
        <button onClick={() => inptNum()}>Send</button>
      </div>
    </div>
  );
};

export default ShopNow;
