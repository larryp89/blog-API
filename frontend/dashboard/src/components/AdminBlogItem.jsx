import { Link } from "react-router-dom";

function AdminBlogItem({ blogPost }) {
  console.log(blogPost);
  return (
    <Link to={`/blog/${blogPost.id}`} className="block">
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <h2 className="mb-2 text-xl font-semibold text-gray-900">
          {blogPost.title}
        </h2>
        <p className="mb-4 text-gray-600 line-clamp-2">{blogPost.content}</p>
      </div>
    </Link>
  );
}

export default AdminBlogItem;
