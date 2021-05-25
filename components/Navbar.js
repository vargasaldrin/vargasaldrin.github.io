import styles from "../styles/navbar.module.css";

export default function Navbar(props) {
  return (
    <nav className={styles.container}>
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
