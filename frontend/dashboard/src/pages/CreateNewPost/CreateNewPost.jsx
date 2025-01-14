import { useAuth } from "../../../../shared/authContext";

function CreateNewPost() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return (
      <>
        <h1>Only verified authors can write posts!</h1>
      </>
    );
  }
  return (
    <>
      <h1>WRITE A NEW BLOG HERE</h1>
    </>
  );
}

export default CreateNewPost;
