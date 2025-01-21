import { useState } from "react";
import { useAuth } from "../../../shared/authContext";
import { useUser } from "../../../shared/userContext";
import { login as loginService } from "../../../shared/services/apiMethods";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../../shared/components/FormInput";

function LoginForm() {
  const { login } = useAuth();
  const { storeUser } = useUser();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await loginService(formData);
      if (response.token) {
        login(response.token);
        storeUser({
          username: response.user.username,
          userID: response.user.userID,
        });
        navigate("/");
      }
    } catch (err) {
      setError(err.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
        Log in to your account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800">
            {error}
          </div>
        )}

        <FormInput
          text="Email"
          type="email"
          handleChange={handleChange}
          name="email"
          value={formData.email}
        />

        <FormInput
          text="Password"
          type="password"
          handleChange={handleChange}
          name="password"
          value={formData.password}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:bg-indigo-400"
        >
          {isLoading ? "Logging in..." : "Log in"}
        </button>

        <p className="text-sm text-gray-700 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-700"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
