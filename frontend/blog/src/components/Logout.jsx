import { useAuth } from "../authContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <button onClick={handleClick}>Logout</button>
    </>
  );
}

export default Logout;
