import { useAuth } from "../../../shared/authContext";
import { useNavigate } from "react-router-dom";
import { removeUserDetails } from "../../../shared/utils/localStorage";

function BlogLogout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    removeUserDetails();
    navigate("/");
  };
  return (
    <>
      <button
        className="text-sm mr-3 text-gray-600 hover:text-indigo-600"
        onClick={handleClick}
      >
        Logout
      </button>
    </>
  );
}

export default BlogLogout;
