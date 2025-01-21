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
    <button
      onClick={handleClick}
      className="text-sm mr-3 text-gray-600 hover:text-indigo-600"
    >
      Logout
    </button>
  );
}

export default AdminLogout;
