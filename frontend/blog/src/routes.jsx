import App from "./App";
import Blog from "./pages/Blog/Blog";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
];

export default routes;
