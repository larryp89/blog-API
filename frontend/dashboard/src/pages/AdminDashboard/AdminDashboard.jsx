import { useAuth } from "../../../../shared/authContext";
import AdminPostsPreview from "../../components/AdminPostsPreview";

function AdminDashboard() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <>
        <h1>You must be a verified author to view this page.</h1>
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
      <AdminPostsPreview />
    </>
  );
}

export default AdminDashboard;
