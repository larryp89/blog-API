function BlogPostDetail({ post }) {
  return (
    <article className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">{post.title}</h1>
      <div className="mb-8 flex items-center">
        <div className="h-10 w-10 rounded-full bg-indigo-100 text-center leading-10">
          {post.author.username[0].toUpperCase()}
        </div>
        <span className="ml-2 text-sm text-gray-500">
          By {post.author.username}
        </span>
      </div>
      <div className="prose prose-indigo max-w-none">{post.content}</div>
    </article>
  );
}

export default BlogPostDetail;
