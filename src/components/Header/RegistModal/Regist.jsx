import { useState } from "react";
import "./regist.css";

const Regist = ({ modalRegistOpen, setModalRegistOpen }) => {
  const [inptName, setInptName] = useState("");
  const [inptEmail, setInptEmail] = useState("");
  const [inptPasword, setInptPasword] = useState("");
  const [inptPasword2, setInptPasword2] = useState("");

  const [borderColor, setBorderColor] = useState(true);

  const nameRegex = /^[A-Za-zА-Яа-яІіЇїЄєҐґ]{2,20}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  const resultInpt = (e) => {
    e.preventDefault();

    if (nameRegex.test(inptName)) {
      setBorderColor(false);
    }
    if (emailRegex.test(inptEmail)) {
      setBorderColor(false);
    }
    if (passwordRegex.test(inptPasword)) {
      setBorderColor(false);
    }
    if (inptPasword === inptPasword2) {
      setBorderColor(false);
    }
  };

  return (
    <div className={modalRegistOpen ? "registMainBox" : "clossestModl"}>
      <button onClick={() => setModalRegistOpen(false)} className="btnClossest">
        X
      </button>
      <div className="registLog">
        <p>Enter your email and password to register.</p>
        <form onSubmit={(e) => resultInpt(e)}>
          <input
            value={inptName}
            type="text"
            placeholder="Username"
            style={{
              border: borderColor
                ? "1px solid rgba(128, 128, 128, 0.356)"
                : "1px solid red",
            }}
            onChange={(e) => setInptName(e.target.value)}
          />
          <input
            value={inptEmail}
            type="email"
            placeholder="Enter your email address"
            style={{
              border: borderColor
                ? "1px solid rgba(128, 128, 128, 0.356)"
                : "1px solid red",
            }}
            onChange={(e) => setInptEmail(e.target.value)}
          />
          <input
            value={inptPasword}
            type="password"
            placeholder="Password"
            style={{
              border: borderColor
                ? "1px solid rgba(128, 128, 128, 0.356)"
                : "1px solid red",
            }}
            onChange={(e) => setInptPasword(e.target.value)}
          />
          <input
            value={inptPasword2}
            type="password"
            placeholder="Confirm Password"
            style={{
              border: borderColor
                ? "1px solid rgba(128, 128, 128, 0.356)"
                : "1px solid red",
            }}
            onChange={(e) => setInptPasword2(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Regist;
