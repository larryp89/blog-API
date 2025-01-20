import { useState, useEffect } from "react";
import { fetchPostComments } from "../../../shared/services/apiMethods";
import CommentItem from "./CommentItem";
import AddCommentForm from "./AddCommentForm";

function CommentLayout({ postID }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await fetchPostComments(postID);
        console.log("Fetched comments:", data);
        setComments(data.comments);
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
  }, [postID]);

  if (!comments || comments.length === 0) {
    return (
      <div className="space-y-6">
        <h1 className="text-xl font-semibold text-gray-900">
          No comments to show
        </h1>
        <AddCommentForm postID={postID} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      <AddCommentForm postID={postID} />
    </div>
  );
}

export default CommentLayout;
