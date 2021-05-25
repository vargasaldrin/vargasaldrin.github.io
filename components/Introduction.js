import { useState, useEffect } from "react";
import roles from "../data/roles";
import styles from "../styles/introduction.module.css";

export default function Introduction(props) {
  const [position, setPosition] = useState(0);
  const [pop, setPop] = useState(false);

  const shadowColor = "#f7fd04";
  const rolesArray = roles.map((item, index) => <li key={index}>{item}</li>);
  const transformStyle = { transform: `translateY(${position}px)` };
  const shadowStyle = {
    transform: "translate(-8px, -8px)",
    textShadow: `8px 8px 0px ${shadowColor}, 7px 7px 0px ${shadowColor}, 6px 6px 0px ${shadowColor}, 5px 5px 0px ${shadowColor}, 4px 4px 0px ${shadowColor}`,
  };
  const isHovering = pop ? shadowStyle : null;

  const roll = (number) => {
    setPosition(position - number);
  };

  useEffect(() => {
    setTimeout(() => {
      if (position === -480) {
        roll(-480);
      } else {
        roll(48);
      }
    }, 4000);
  }, [position]);

  return (
    <section
      className={styles.introduction}
      onMouseEnter={() => setPop(true)}
      onMouseLeave={() => setPop(false)}
    >
      <h1 className={styles.header} style={isHovering}>
        Aldrin Vargas
      </h1>
      <div className={styles.divider}>{`< />`}</div>
      <div className={styles.roulette}>
        <ul className={styles.roles} style={transformStyle}>
          {rolesArray}
        </ul>
      </div>
    </section>
  );
}
