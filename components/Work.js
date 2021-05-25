import Card from "./Card";
import projects from "../data/projects";
import styles from "../styles/work.module.css";

export default function Work(props) {
  const projectsArray = projects.map((data, index) => {
    const direction = index % 2 ? "row" : "row-reverse";
    return <Card key={index} {...data} direction={direction} />;
  });

  return (
    <section id="work" className={styles.work}>
      <h2>Projects I've Worked on/with: </h2>
      {projectsArray}
    </section>
  );
}
