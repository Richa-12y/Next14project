import React from "react";
import styles from "./blog.moudle.css";
import PostCard from "@/components/postCard/postCard";

const BlogPage = () => {
  return (
    <div className={styles.conatiner}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default BlogPage;
