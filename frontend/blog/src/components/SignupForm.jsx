import { useState } from "react";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";

function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    username: "",
    author: false,
  });

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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
        text="Tick to be an author"
        handleChange={handleChange}
        name="author"
        value={formData.author}
      />

      <button onClick={handleSubmit}>Log in</button>
    </>
  );
}

export default SignupForm;
