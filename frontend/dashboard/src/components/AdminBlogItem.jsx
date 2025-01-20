import { Link } from "react-router-dom";

function AdminBlogItem({ blogPost }) {
  const postDate = new Date(blogPost.createdAt);
  const editDate = new Date(blogPost.updatedAt);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formattedPostDate = postDate.toLocaleString("en-GB", options);
  const formattedEditDate = editDate.toLocaleString("en-GB", options);

  return (
    <Link to={`edit/${blogPost.id}`} className="block">
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <h2 className="mb-2 text-xl font-semibold text-gray-900">
          {blogPost.title}
        </h2>
        {blogPost.published ? "Published" : "Unpublished"}
        <p>Created: {formattedPostDate}</p>
        <p>Last edit: {formattedEditDate}</p>
      </div>
    </Link>
  );
}

export default AdminBlogItem;
