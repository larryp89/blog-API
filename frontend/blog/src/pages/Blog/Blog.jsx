import BlogPreview from "../../components/BlogPreview";
import { useAuth } from "../../authContext";
import { Link } from "react-router-dom";

function Blog() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900">
            Please log in to view blogs
          </h1>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700">
            Return to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">
        Latest Blog Posts
      </h1>
      <p className="mb-8 text-gray-600">
        Explore the latest thoughts and ideas from our community
      </p>
      <BlogPreview />
    </div>
  );
}

export default Blog;
