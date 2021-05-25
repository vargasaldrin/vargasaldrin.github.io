import { useState } from "react";
import styles from "../styles/card.module.css";

export default function Card(props) {
  const [pop, setPop] = useState(false);
  const shadowColor = "#e1701a";

  const boxShadow = {
    transform: "translate(-8px, -8px)",
    boxShadow: `8px 8px 0px ${shadowColor}, 7px 7px 0px ${shadowColor}, 6px 6px 0px ${shadowColor}, 5px 5px 0px ${shadowColor}, 4px 4px 0px ${shadowColor}`,
  };
  const textShadow = {
    transform: "translate(-8px, -8px)",
    textShadow: `8px 8px 0px ${shadowColor}, 7px 7px 0px ${shadowColor}, 6px 6px 0px ${shadowColor}, 5px 5px 0px ${shadowColor}, 4px 4px 0px ${shadowColor}`,
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setPop(true)}
      onMouseLeave={() => setPop(false)}
      style={{ flexDirection: `${props.direction}` }}
    >
      <img src={props.image} style={pop ? boxShadow : null} />
      <div className={styles.info}>
        <h3 style={pop ? textShadow : null}>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.url}>
          <button style={pop ? boxShadow : null}>View Site</button>
        </a>
      </div>
    </div>
  );
}
