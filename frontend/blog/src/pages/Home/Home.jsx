import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { AuthProvider } from "../../authContext";
function Home() {
  return (
    <>
      <h1 className="home">Login or Signup to get started!</h1>
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
      <Link to="blog">Blog</Link>
    </>
  );
}

export default Home;
