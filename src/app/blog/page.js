import React from "react";
import styles from "./blog.moudle.css";
import PostCard from "@/components/postCard/postCard";

const BlogPage = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
