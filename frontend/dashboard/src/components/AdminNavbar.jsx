import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../shared/authContext";
import AdminLogout from "./AdminLogout";
import DeleteAccountButton from "../../../shared/components/DeleteAccountButton";

const AdminNavbar = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  // Simple function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white shadow">
      {/* Banner text */}
      <div className="bg-indigo-600 p-2 text-center text-sm text-white">
        I THINK, THEREFORE I BLOG. If I BLOG NOT, AM I NOT?
      </div>

      {/* Navigation links */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex space-x-6">
          <Link
            to=""
            className={`text-sm ${isActive("/admin") ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
          >
            My Dashboard
          </Link>

          <Link
            to="new-post"
            className={`text-sm ${isActive("/admin/new-post") ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
          >
            Write new post
          </Link>
        </div>

        <div>
          {isLoggedIn ? (
            <>
              <AdminLogout />
              <DeleteAccountButton />
            </>
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

export default AdminNavbar;
