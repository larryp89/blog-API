import { getToken } from "../utils/localStorage";

const API_URL_POST = "http://localhost:3000/api/posts"; // Base URL of backend
const API_URL_USER = "http://localhost:3000/api/auth"; // Base URL of backend

const fetchPosts = async () => {
  const token = getToken();
  const response = await fetch(`${API_URL_POST}`, {
    mode: "cors",
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

const login = async (formData) => {
  try {
    const response = await fetch(`${API_URL_USER}/login`, {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Form submitted successfully");
      return data;
    } else {
      console.error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

const signup = async (formData) => {
  try {
    const response = await fetch(`${API_URL_USER}/signup`, {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Signed up");
      return data;
    } else {
      console.error("Failed to sign up");
    }
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

export { fetchPosts, login, signup };
