import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../shared/authContext";
import Logout from "./Logout";

const BlogNavbar = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  // Simple function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white shadow">
      {/* Banner text */}
      <div className="bg-indigo-600 p-2 text-center text-sm text-white">
        EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
      </div>

      {/* Navigation links */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex space-x-6">
          <Link
            to=""
            className={`text-sm ${isActive("/") ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
          >
            Home
          </Link>
          <Link
            to="blog"
            className={`text-sm ${isActive("/blog") ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
          >
            Blog
          </Link>
        </div>

        <div>
          {isLoggedIn ? (
            <Logout />
          ) : (
            <Link
              to="/signup"
              className={`text-sm ${isActive("/signup") ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default BlogNavbar;
