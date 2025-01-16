import AdminLayout from "./src/components/AdminLayout";
import AdminApp from "./src/AdminApp";
import CreateNewPost from "./src/pages/CreateNewPost/CreateNewPost";
import EditPost from "./src/pages/EditPost/EditPost";

const adminRoutes = [
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

export default adminRoutes;
