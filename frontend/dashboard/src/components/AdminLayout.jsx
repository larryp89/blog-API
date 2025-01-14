import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

function AdminLayout() {
  return (
    <div>
      <AdminNavbar />
      <Outlet /> {/* Nested routes will be rendered here */}
    </div>
  );
}

export default AdminLayout;
