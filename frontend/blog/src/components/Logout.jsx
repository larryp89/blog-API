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
      <button
        className={`w-full rounded-lg px-4 py-2 font-medium transition-colors bg-indigo-600 text-white hover:bg-indigo-700`}
        onClick={handleClick}
      >
        Logout
      </button>
    </>
  );
}

export default Logout;
