import { deleteUser } from "../../../shared/services/apiMethods";
import { useUser } from "../../../shared/userContext";
import { useAuth } from "../../../shared/authContext";

function DeleteAccountButton() {
  const { user, removeStoredUser } = useUser();
  const { logout } = useAuth();

  const handleDelete = async () => {
    console.log(user)
    if (
      window.confirm(
        "Are you sure you want to delete? All posts and comments will be permanently removed, as will your details.",
      )
    ) {
      try {
        await deleteUser({ username: user.username });
        logout();
        removeStoredUser();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <button onClick={handleDelete}>Delete account</button>
    </>
  );
}

export default DeleteAccountButton;
