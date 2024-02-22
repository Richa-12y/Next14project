import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.logo}>sheCode</div>
      <div className={styles.text}>
        sheCode creative thoughts agency © All right reserved.
      </div>
    </div>
  );
};

export default Footer;
