import { Link } from "react-router-dom";

function BlogItem({ blogPost }) {
  console.log(blogPost);
  return (
    <Link to={`/blog/${blogPost.id}`} className="block">
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <h2 className="mb-2 text-xl font-semibold text-gray-900">
          {blogPost.title}
        </h2>
        <p className="mb-4 text-gray-600 line-clamp-2">{blogPost.content}</p>
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-indigo-100 text-center leading-8">
            {blogPost.author.username[0].toUpperCase()}
          </div>
          <span className="ml-2 text-sm text-gray-500">
            By {blogPost.author.username}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BlogItem;
