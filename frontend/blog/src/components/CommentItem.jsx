function CommentItem({ comment }) {
  return (
    <>
      <h1>{comment.content}</h1>
      <h2>from {comment.author.username}</h2>
    </>
  );
}

export default CommentItem;
