import BlogLayout from "./src/components/BlogLayout";
import BlogApp from "./src/BlogApp";
import Blog from "./src/pages/Blog/Blog";
import BlogPost from "./src/pages/BlogPost/BlogPost";
import Signup from "./src/pages/Signup/Signup";

const blogRoutes = [
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
];

export default blogRoutes;
