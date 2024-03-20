import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image
          src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          // fill
          className={styles.img}
          width={200}
          height={200}
        />
      </div>
      <span className={styles.date}>01.01.2024</span>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post?.title}</h1>
        <p className={styles.desc}>{post?.body}</p>
        <Link href="/blog/post" className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
