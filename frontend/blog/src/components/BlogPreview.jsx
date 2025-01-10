import { useEffect } from "react";
import BlogItem from "./BlogItem";
import { fetchPosts } from "../services/api";

function BlogPreview() {
  //   useEffect(async () => {
  //     const posts = await fetchPosts();
  //     console.log(posts);
  //   }, []);

  const fake = {
    title: "Fake blog",
    author: "lonce",
    content: "Blah blah blah",
  };
  return (
    <>
      <BlogItem blogPost={fake} />
    </>
  );
}
export default BlogPreview;
