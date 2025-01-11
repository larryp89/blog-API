import { Link } from "react-router-dom";
import { useAuth } from "../authContext";
import Logout from "./Logout";

function Navbar() {
  const { logout } = useAuth();
  return (
    <>
      <h1>I'm the nav bar</h1>
      <Link to="/">Home</Link>
      <Link to="blog"> Blog</Link>
      <Logout />
    </>
  );
}

export default Navbar;
