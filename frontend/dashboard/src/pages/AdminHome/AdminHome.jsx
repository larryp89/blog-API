import { useState, useEffect } from "react";
import { useAuth } from "../../../../shared/authContext";
import { useUser } from "../../../../shared/userContext";
import { fetchAuthorPosts } from "../../../../shared/services/apiMethods";
import FormContainer from "../../../../shared/components/FormContainer";
import AdminLoginForm from "../../components/AdminLoginForm";
import AdminBlogItem from "../../components/AdminBlogItem";
import AdminPostsPreview from "../../components/AdminPostsPreview";

function AdminHome() {
  const { isLoggedIn } = useAuth();
  const { user } = useUser();
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getUserData = async () => {
  //     if (!isLoggedIn) return;

  //     try {
  //       const data = await fetchAuthorPosts();
  //       setPosts(data.posts);
  //       console.log(data.posts);
  //     } catch (err) {
  //       console.error("Error fetching author posts", err);
  //       setError("Failed to load post data");
  //     }
  //   };

  //   getUserData();
  // }, [isLoggedIn]);

  return (
    <div className="container mx-auto px-4 py-12">
      {isLoggedIn ? (
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            Welcome to Blog Manager, {user.username}
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            This is where you can edit, publish, unpublish, or delete your blog
            posts. Click on a post to edit.
          </p>
          <AdminPostsPreview />
        </div>
      ) : (
        <div className="mx-auto max-w-md">
          <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Welcome Back. Please sign in, or signup here.
          </h1>
          <FormContainer>
            <AdminLoginForm />
          </FormContainer>
        </div>
      )}
      {error && <div className="mt-4 text-red-500">{error}</div>}
    </div>
  );
}

export default AdminHome;
