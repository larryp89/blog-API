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
      <>
        <h1>No comments to show</h1>
        <AddCommentForm postID={postID} />
      </>
    );
  }

  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      <AddCommentForm postID={postID} />
    </>
  );
}

export default CommentLayout;
