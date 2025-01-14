import BlogLayout from "../blog/src/components/BlogLayout";
import BlogApp from "../blog/src/BlogApp";
import Blog from "../blog/src/pages/Blog/Blog";
import BlogPost from "../blog/src/pages/BlogPost/BlogPost";
import Signup from "../blog/src/pages/Signup/Signup";
import AdminLayout from "../dashboard/src/components/AdminLayout";
import AdminApp from "../dashboard/AdminApp";
import AdminDashboard from "../dashboard/src/pages/AdminDashboard/AdminDashboard";

const routes = [
  {
    // Blog routess
    path: "/",
    element: <BlogLayout />, // Use Layout as the wrapper component
    children: [
      { path: "", element: <BlogApp /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:postID", element: <BlogPost /> }, // Dynamic segment for blog post
      { path: "signup", element: <Signup /> },
    ],
  },
  {
    // Admin routes
    path: "admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <AdminApp /> },
      { path: "dashboard", element: <AdminDashboard /> },
    ],
  },
];

export default routes;
