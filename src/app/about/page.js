import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.textContainer}>
        <h2>About Agency</h2>
        <h1>We create digital ideas that a bigger,bolder,brave and better</h1>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
};

export default AboutPage;
