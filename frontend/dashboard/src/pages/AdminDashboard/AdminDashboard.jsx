import { useEffect, useState } from "react";
import { useAuth } from "../../../../shared/authContext";
import { fetchAuthorPosts } from "../../../../shared/services/api";

function AdminDashboard() {
  const { isLoggedIn } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAuthorPosts = async () => {
      if (isLoggedIn) {
        try {
          const data = await fetchAuthorPosts();
          console.log("Fetched posts:", data);
          setPosts(data.posts); // Adjust based on your actual response
        } catch (err) {
          console.log("Get single post error", err);
        }
      }
    };
    getAuthorPosts();
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <>
        <h1>You must be a verified author to view this page.</h1>
      </>
    );
  }

  if (posts.length === 0) {
    return (
      <>
        <h1>YOu have not written any posts yet!</h1>
      </>
    );
  }

  return (
    <>
      <h1 className="mb-6 text-4xl font-bold text-gray-900">
        Welcome back, Author!
      </h1>
      <h2>
        This is where you create, edit, publish/unpublish, and delete blog posts
      </h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default AdminDashboard;
