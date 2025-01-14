import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <h1>I am the admin layout</h1>
      <Outlet /> {/* Nested routes will be rendered here */}
    </div>
  );
}

export default AdminLayout;
