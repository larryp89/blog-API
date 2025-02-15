import { useEffect, useState } from "react";
import { fetchPosts } from "../../../shared/services/apiMethods";
import { useAuth } from "../../../shared/authContext";
import { useUser } from "../../../shared/userContext";
import BlogItem from "./BlogItem";

// Get all the blog posts and display them as BlogItems
function BlogPreview() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { logout } = useAuth();
  const { removeStoredUser } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data.posts);
      } catch (err) {
        if (err.message == "Authentication failed") {
          logout();
          removeStoredUser();
        } else {
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [logout]);

  if (isLoading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <div className="text-gray-600">Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-red-800">
        Error loading posts: {error.message}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-lg bg-gray-50 p-4 text-gray-600">
        No posts found
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogItem key={post.id} blogPost={post} />
      ))}
    </div>
  );
}

export default BlogPreview;
