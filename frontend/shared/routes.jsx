import BlogLayout from "../blog/src/components/BlogLayout";
import BlogApp from "../blog/src/BlogApp";
import Blog from "../blog/src/pages/Blog/Blog";
import BlogPost from "../blog/src/pages/BlogPost/BlogPost";
import Signup from "../blog/src/pages/Signup/Signup";
import AdminLayout from "../dashboard/src/components/AdminLayout";
import AdminApp from "../dashboard/AdminApp";
import CreateNewPost from "../dashboard/src/pages/CreateNewPost/CreateNewPost";
import EditPost from "../dashboard/src/pages/EditPost/EditPost";

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
      { path: "new-post", element: <CreateNewPost /> },
      { path: "edit/:postID", element: <EditPost /> },
    ],
  },
];

export default routes;
