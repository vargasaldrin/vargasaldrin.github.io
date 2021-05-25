import { useState, useEffect } from "react";

import contact from "../data/contact";
import styles from "../styles/footer.module.css";

export default function Footer(props) {
  const [choice, setChoice] = useState("email");
  const [displaced, setDisplaced] = useState(false);
  const [first, setFirst] = useState(contact[choice]);
  const [position, setPosition] = useState(0);
  const [second, setSecond] = useState("Second");

  const transformStyle = { transform: `translateY(${position}px)` };

  const handleClick = (value) => {
    setChoice(value);
  };

  useEffect(() => {
    const value = contact[choice];

    displaced ? setSecond(value) : setFirst(value);
    setDisplaced(!displaced);
  }, [choice]);

  useEffect(() => {
    displaced ? setPosition(0) : setPosition(-58);
  }, [displaced]);

  return (
    <footer id="contact" className={styles.footer}>
      <h2>Contact Me</h2>
      <div className={styles.box}>
        <ul style={transformStyle}>
          <li>{first}</li>
          <li>{second}</li>
        </ul>
      </div>
      <div className={styles.icons}>
        <img src="/images/email.svg" onClick={() => handleClick("email")} />
        <img src="/images/phone.svg" onClick={() => handleClick("phone")} />
        <img
          src="/images/location.svg"
          onClick={() => handleClick("location")}
        />
        <img
          src="/images/facebook.svg"
          onClick={() => handleClick("facebook")}
        />
        <img src="/images/github.svg" onClick={() => handleClick("github")} />
      </div>
    </footer>
  );
}
