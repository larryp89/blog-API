import BlogLayout from "./components/BlogLayout";
import BlogApp from "./BlogApp";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import SignupForm from "./components/SignupForm";

const blogRoutes = [
  {
    path: "/",
    element: <BlogLayout />,
    children: [
      { path: "", element: <BlogApp /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:postID", element: <BlogPost /> },
      { path: "signup", element: <Signup /> },
    ],
  },
];

export default blogRoutes;
