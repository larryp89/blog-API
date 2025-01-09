import { body } from "express-validator";

const API_URL_POST = "http://localhost:3000/api/posts"; // Base URL of backend
const API_URL_USER = "http://localhost:3000/api/auth"; // Base URL of backend

const fetchPosts = async () => {
  const response = await fetch(`${API_URL_POST}`, {
    mode: "cors",
    method: "GET",
    headers: {
      // TODO: Refactor this so is from local storage
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImVtYWlsIjoiaGVsbG9AbWFpbC5jb20iLCJpYXQiOjE3MzYzMzMwNDB9.jbjZhuaMEaIgOA0A0IiKwVRySy4wSPjicm_IW8rOdtg",
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

export { fetchPosts, login };
