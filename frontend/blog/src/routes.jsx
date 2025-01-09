import App from "./App";
import Blog from "./pages/Blog/Blog";
import Signup from "./pages/Signup/Signup";
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
    path: "signup",
    element: <Signup />,
  },
];

export default routes;
