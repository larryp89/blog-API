import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <Navbar /> {/* Navbar will be displayed on every page */}
      <Outlet /> {/* Nested routes will be rendered here */}
    </div>
  );
}

export default Layout;
