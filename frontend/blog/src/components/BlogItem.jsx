import { Link } from "react-router-dom";

function BlogItem({ blogPost }) {
  return (
    <>
      <h1>
        {blogPost.title} by {blogPost.author.username}
      </h1>
      <p>{blogPost.content}</p>
      <Link to={`/blog/${blogPost.id}`}>View</Link>
    </>
  );
}

export default BlogItem;
