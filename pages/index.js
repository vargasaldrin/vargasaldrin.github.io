import Head from "next/head";

import About from "../components/About";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Work from "../components/Work";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aldrin Vargas - Web Developer</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Navbar />
        <Introduction />
        <Work />
        <About />
        <Footer />
      </main>
    </div>
  );
}
