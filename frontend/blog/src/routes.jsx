import Layout from "./components/Layout";
import App from "./App";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import Signup from "./pages/Signup/Signup";

const routes = [
  {
    path: "/",
    element: <Layout />, // Use Layout as the wrapper component
    children: [
      { path: "/", element: <App /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:postID", element: <BlogPost /> }, // Dynamic segment for blog post
      { path: "signup", element: <Signup /> },
    ],
  },
];

export default routes;
