import { deleteUser } from "../services/apiMethods";
import { useUser } from "../userContext";
import { useAuth } from "../authContext";
import { useNavigate } from "react-router-dom";

function DeleteAccountButton() {
  const { user, removeStoredUser } = useUser();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleDelete = async () => {
    console.log(user);
    if (
      window.confirm(
        "Are you sure you want to delete? All posts and comments will be permanently removed, as will your details.",
      )
    ) {
      try {
        await deleteUser({ username: user.username });
        logout();
        removeStoredUser();
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-sm text-gray-600 hover:text-indigo-600"
    >
      Delete account
    </button>
  );
}

export default DeleteAccountButton;
