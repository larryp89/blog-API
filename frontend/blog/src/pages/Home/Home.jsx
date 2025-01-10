import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../authContext";

function Home() {
  const { isLoggedIn } = useAuth(); // Correctly destructure isLoggedIn

  return (
    <>
      {isLoggedIn ? ( // Correct the conditional syntax
        <h1>You are logged in!</h1>
      ) : (
        <>
          <h1 className="home">Login or Signup to get started!</h1>
          <LoginForm />
        </>
      )}
      <Link to="blog">Blog</Link>
    </>
  );
}

export default Home;
