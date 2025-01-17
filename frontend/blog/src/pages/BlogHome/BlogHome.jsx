import { Link } from "react-router-dom";
import { useAuth } from "../../../../shared/authContext";
import { useUser } from "../../../../shared/userContext";
import FormContainer from "../../../../shared/components/FormContainer";
import LoginForm from "../../components/LoginForm";

function BlogHome() {
  const { isLoggedIn } = useAuth();
  const { user } = useUser();

  return (
    <div className="container mx-auto px-4 py-12">
      {isLoggedIn ? (
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            Welcome to Your Blog, {user}
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Start exploring the latest posts or create your own
          </p>
          <Link
            to="/blog"
            className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700"
          >
            View Blog Posts
          </Link>
        </div>
      ) : (
        <div className="mx-auto max-w-md">
          <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <FormContainer>
            <LoginForm />
            <div className="mt-4 text-center text-sm text-gray-600">
              Not a member?{" "}
              <Link
                to="/signup"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Sign up!
              </Link>
            </div>
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default BlogHome;
