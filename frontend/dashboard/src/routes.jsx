import AdminLayout from "./components/AdminLayout";
import CreateNewPost from "./pages/CreateNewPost/CreateNewPost";
import EditPost from "./pages/EditPost/EditPost";

import AdminApp from "./AdminApp";

const adminRoutes = [
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { path: "", element: <AdminApp /> },
      { path: "new-post", element: <CreateNewPost /> },
      { path: "edit/:postID", element: <EditPost /> },
    ],
  },
];

export default adminRoutes;
