import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image src="/post.png" alt="" fill />
      </div>
      <span className={styles.date}>01.01.2024</span>
      <div className={styles.bottom}>bottom</div>
    </div>
  );
};

export default PostCard;
