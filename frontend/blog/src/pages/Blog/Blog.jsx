import { useState, useEffect } from "react";
import { fetchPosts } from "../../services/api";

function Blog() {
  const posts = fetchPosts();
  console.log(posts);
  return (
    <div className="container">
      <h1>This is the blog page</h1>
    </div>
  );
}

export default Blog;
