import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
const Home = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Throughts Agency</h1>
        <p className={styles.desc}>
          Lorem Ipsum has been the industry standard dummy text ever since the
          1500s, when an unknown printer took a galley
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageConatiner}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
