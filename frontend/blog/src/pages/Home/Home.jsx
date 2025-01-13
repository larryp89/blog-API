import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../authContext";

function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <h1 className="text-3xl font-bold underline">You are logged in!</h1>
      ) : (
        <>
          <h1 className="home">Login or Signup to get started!</h1>
          <LoginForm />
          <h4>
            Not a member?
            <Link to="signup"> Sign up!</Link>
          </h4>
        </>
      )}
    </>
  );
}

export default Home;
