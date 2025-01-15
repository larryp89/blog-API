import { useEffect, useState } from "react";
import { fetchAuthorPosts } from "../../../shared/services/apiMethods.js";
import AdminBlogItem from "./AdminBlogItem.jsx";

// Get all the blog posts and display them as BlogItems
function AdminPostsPreview() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAuthorPosts();
        setPosts(data.posts);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

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
        <AdminBlogItem key={post.id} blogPost={post} />
      ))}
    </div>
  );
}

export default AdminPostsPreview;
