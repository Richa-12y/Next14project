import React from "react";
import styles from "./blog.moudle.css";
import PostCard from "@/components/postCard/postCard";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();
  return (
    <div className={styles.conatiner}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
