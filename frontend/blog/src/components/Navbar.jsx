import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useAuth } from "../authContext";

function Navbar() {
  const { isLoggedIn } = useAuth(); // Correctly destructure isLoggedIn

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="blog"> Blog</Link>
      {isLoggedIn ? <Logout /> : <Link to="signup"> Sign up!</Link>}
    </>
  );
}

export default Navbar;
