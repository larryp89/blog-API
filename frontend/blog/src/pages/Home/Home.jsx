import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 className="home">Login or Signup to get started!</h1>
      <Link to="blog">Profile page</Link>
    </>
  );
}

export default Home;
