import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className={styles.textContainer}>hello</div>
    </div>
  );
};

export default SinglePage;
