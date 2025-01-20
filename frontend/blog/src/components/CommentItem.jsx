function CommentItem({ comment }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h1 className="mb-2 text-gray-900">{comment.content}</h1>
      <h2 className="text-sm text-gray-600">from {comment.author.username}</h2>
    </div>
  );
}

export default CommentItem;
