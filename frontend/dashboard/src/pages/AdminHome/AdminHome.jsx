import { useState, useEffect } from "react";
import { useAuth } from "../../../../shared/authContext";
import FormContainer from "../../../../shared/components/FormContainer";
import AdminLoginForm from "../../components/AdminLoginForm";
import { fetchAuthorPosts } from "../../../../shared/services/apiMethods";

function AdminHome() {
  const { isLoggedIn } = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchAuthorPosts();
        setUser(data.user);
      } catch (err) {
        console.log("error getting user", err);
      }
    };
    getUser();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      {isLoggedIn ? (
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            Welcome to Blog Manager, {user.username}.
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            This is where you can edit, publish, unpublish, or delete your blog
            posts.
          </p>
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
    </div>
  );
}

export default AdminHome;
