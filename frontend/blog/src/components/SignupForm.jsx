import { useState } from "react";
import FormCheckbox from "./FormCheckbox";
import FormInput from "./FormInput";

function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    username: "",
    author: false,
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await signup(formData);
      console.log(response);
      // Add success handling here
    } catch (err) {
      setError(err.message || "An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
        Create your account
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
          text="Username"
          type="text"
          handleChange={handleChange}
          name="username"
          value={formData.username}
        />

        <FormInput
          text="Password"
          type="password"
          handleChange={handleChange}
          name="password"
          value={formData.password}
        />

        <FormInput
          text="Repeat Password"
          type="password"
          handleChange={handleChange}
          name="repeatPassword"
          value={formData.repeatPassword}
        />

        <FormCheckbox
          text="I want to be an author"
          handleChange={handleChange}
          name="author"
          value={formData.author}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:bg-indigo-400"
        >
          {isLoading ? "Creating account..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
