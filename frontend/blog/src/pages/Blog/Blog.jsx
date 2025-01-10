import { fetchPosts } from "../../services/api";

const posts = await fetchPosts();

function Blog() {
  console.log(posts);
  return (
    <div className="container">
      <h1>This is the blog page</h1>
    </div>
  );
}

export default Blog;
