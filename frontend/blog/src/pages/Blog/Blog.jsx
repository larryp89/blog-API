import { useAuth } from "../../authContext";
import BlogPreview from "../../components/BlogPreview";

function Blog() {
  const { isLoggedIn } = useAuth(); // Correctly destructure isLoggedIn

  return (
    <div className="container">
      <h1>This is the blog page</h1>
      {isLoggedIn && (
        <>
          <h1>You are logged in can see this page</h1>;
          <h2>These are the blogs you can see cards for</h2>
          <BlogPreview />
        </>
      )}
    </div>
  );
}

export default Blog;
