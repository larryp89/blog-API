import AdminLayout from "./components/AdminLayout";
import AdminApp from "../AdminApp";
import CreateNewPost from "./pages/CreateNewPost/CreateNewPost";
import EditPost from "./pages/EditPost/EditPost";

const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <AdminApp /> },
      { path: "new-post", element: <CreateNewPost /> },
      { path: "edit/:postID", element: <EditPost /> },
    ],
  },
];

export default adminRoutes;
