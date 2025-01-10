import { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import { fetchPosts } from "../services/api";

function BlogPreview() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching posts...");
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        console.log("Fetched posts:", data);
        setPosts(data.posts);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Show loading state while fetching
  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  // Show error if there is one
  if (error) {
    return <div>Error loading posts: {error.message}</div>;
  }

  // Show message if no posts found
  if (posts.length === 0) {
    return <div>No posts found</div>;
  }

  // Only render posts when we have them
  return (
    <>
      {posts.map((post) => (
        <BlogItem key={post.id} blogPost={post} />
      ))}
    </>
  );
}

export default BlogPreview;
