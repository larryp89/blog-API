import { Outlet } from "react-router-dom";
import BlogNavbar from "./BlogNavbar";

function BlogLayout() {
  return (
    <div>
      <BlogNavbar /> {/* Navbar will be displayed on every page */}
      <Outlet /> {/* Nested routes will be rendered here */}
    </div>
  );
}

export default BlogLayout;
