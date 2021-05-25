import styles from "../styles/about.module.css";

export default function About(props) {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <img src="/images/aldrin_avatar.png" alt="Artwork by Raffa" />
      <p>
        I am a web developer currently residing in Manila, Philippines. My
        programming skills focuses on front-end technologies for the web. I
        value simple content structure, clean design patterns, and thoughtful
        interactions. I believe that the intersection between design and
        technology is what pushes the human race forward and I want to create
        products that follows this philisophy.
      </p>
    </section>
  );
}
