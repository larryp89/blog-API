import { useAuth } from "../../../shared/authContext";
import { useUser } from "../../../shared/userContext";
import { useNavigate } from "react-router-dom";

function AdminLogout() {
  const { logout } = useAuth();
  const { removeStoredUser } = useUser();
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    removeStoredUser();
    navigate("");
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

export default AdminLogout;
