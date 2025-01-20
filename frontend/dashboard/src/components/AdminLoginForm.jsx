import { useState } from "react";
import { useAuth } from "../../../shared/authContext";
import { login as loginService } from "../../../shared/services/apiMethods";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../../shared/components/FormInput";
import FormContainer from "../../../shared/components/FormContainer";

function AdminLoginForm() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isAdminSite: true,
  });
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
    try {
      const response = await loginService(formData);
      console.log("THE RESPONSE IS", response);
      if (response.token) {
        login(response.token);
        navigate(""); // Redirect to the blog page
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-6">
      <FormContainer>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="flex justify-center mt-4">
            <Link to="" className="text-indigo-600 hover:text-indigo-800">
              Home
            </Link>
          </div>
        </form>
      </FormContainer>
    </div>
  );
}

export default AdminLoginForm;
