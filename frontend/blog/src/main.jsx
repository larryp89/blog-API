import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "../../shared/authContext";
import { UserProvider } from "../../shared/userContext";
import blogRoutes from "../routes";
import "./index.css";

const router = createBrowserRouter(blogRoutes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AuthProvider>
  </StrictMode>,
);
