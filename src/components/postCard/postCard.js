import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
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
        <h1 className={styles.title}>
          Lorem Ipsum is that it has a more-or-less
        </h1>
        <p className={styles.desc}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content making it look like
          readable English.
        </p>
        <Link href="/blog/post" className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
