import { Link } from "react-router-dom";

function AdminBlogItem({ blogPost }) {
  return (
    <Link to={`edit/${blogPost.id}`} className="block">
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <h2 className="mb-2 text-xl font-semibold text-gray-900">
          {blogPost.title}
        </h2>
        {blogPost.published ? "Published" : "Unpublished"}
        <p>Created: {blogPost.createdAt}</p>
        <p>Last edit: {blogPost.updatedAt}</p>
      </div>
    </Link>
  );
}

export default AdminBlogItem;
