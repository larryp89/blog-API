import AdminLayout from "./components/AdminLayout";
import CreateNewPost from "./pages/CreateNewPost/CreateNewPost";
import EditPost from "./pages/EditPost/EditPost";
import AdminHome from "./pages/AdminHome/AdminHome";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminApp from "./AdminApp";

const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <AdminApp /> },
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "new-post", element: <CreateNewPost /> },
      { path: "edit/:postID", element: <EditPost /> },
    ],
  },
];

export default adminRoutes;
