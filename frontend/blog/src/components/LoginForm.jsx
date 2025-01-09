import { useState } from "react";
import FormInput from "./FormInput";
import { login } from "../services/api";
import { setToken, getToken, removeToken } from "../utils/localStorage";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

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
      const response = await login(formData);
      if (response.token) {
        setToken(response.token);
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
    </>
  );
}

export default LoginForm;
