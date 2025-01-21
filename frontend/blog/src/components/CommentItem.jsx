import React from "react";

function CommentItem({ comment }) {
  // Convert comment.createdAt to a Date object
  const date = new Date(comment.createdAt);

  // Format the date and time without seconds
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const formattedDate = date.toLocaleString("en-GB", options);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h1 className="mb-2 text-gray-900">{comment.content}</h1>
      <h2 className="text-sm text-gray-600">
        from {comment.author.username} @ {formattedDate}
      </h2>
    </div>
  );
}

export default CommentItem;
