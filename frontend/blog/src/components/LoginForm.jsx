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
        const newUser = {
          username: response.user.username,
          userID: response.user.userID,
        };
        storeUser(newUser);
        navigate("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <FormInput
        text="Email"
        type="text"
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
      <button onClick={handleSubmit}>Log in</button>
      <Link to="blog"></Link>
    </>
  );
}

export default LoginForm;
