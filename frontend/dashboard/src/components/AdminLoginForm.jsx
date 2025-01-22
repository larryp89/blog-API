import { useState } from "react";
import { useAuth } from "../../../shared/authContext";
import { useUser } from "../../../shared/userContext";
import { login as loginService } from "../../../shared/services/apiMethods";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../../shared/components/FormInput";
import FormContainer from "../../../shared/components/FormContainer";

function AdminLoginForm() {
  const { login } = useAuth();
  const { storeUser } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isAdminSite: true,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginService(formData);
      console.log("THE RESPONSE IS", response);
      if (response) {
        const user = {
          username: response.user.username,
          userID: response.user.userID,
        };
        login(response.token);
        storeUser(user);
        navigate(""); // Redirect to the blog page
      }
    } catch (err) {
      setError(err.message || "An error occurred during login");
      console.log(err);
    }
  };

  return (
    <div className="mt-6">
      <FormContainer>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800">
              {error}
            </div>
          )}
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <FormInput
              text="Email"
              type="text"
              handleChange={handleChange}
              name="email"
              value={formData.email}
              className="w-full resize-none rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <FormInput
              text="Password"
              type="password"
              handleChange={handleChange}
              name="password"
              value={formData.password}
              className="w-full resize-none rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 mt-4"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
            >
              Log in
            </button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
}

export default AdminLoginForm;
