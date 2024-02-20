import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" width={500} height={500} fill />
      </div>
    </div>
  );
};

export default AboutPage;
