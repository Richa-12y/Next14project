import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.logo}>logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
