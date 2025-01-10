import App from "./App";
import Blog from "./pages/Blog/Blog";
import Signup from "./pages/Signup/Signup";
import BlogPost from "./pages/BlogPost/BlogPost";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "blog/:postID",
    element: <BlogPost />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
];

export default routes;
