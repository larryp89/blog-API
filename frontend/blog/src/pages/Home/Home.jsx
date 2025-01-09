import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
function Home() {
  return (
    <>
      <h1 className="home">Login or Signup to get started!</h1>
      <LoginForm />
      
      <Link to="blog">Blog</Link>
    </>
  );
}

export default Home;
