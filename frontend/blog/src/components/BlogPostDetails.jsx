function BlogPostDetails({ post }) {
  const postDate = new Date(post.createdAt);
  const editDate = new Date(post.updatedAt);

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
    <article className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">{post.title}</h1>
      <div className="mb-8 flex items-center">
        <div className="h-10 w-10 rounded-full bg-indigo-100 text-center leading-10">
          {post.author.username[0].toUpperCase()}
        </div>
        <div className="flex flex-col">
          <span className="ml-2 text-sm text-gray-500">
            By {post.author.username} on {formattedPostDate}
          </span>
          <span className="ml-2 text-sm text-gray-500">
            Edited {formattedEditDate}
          </span>
        </div>
      </div>
      <div className="prose prose-indigo max-w-none">{post.content}</div>
    </article>
  );
}

export default BlogPostDetails;
