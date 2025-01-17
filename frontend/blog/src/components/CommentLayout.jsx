import { useState, useEffect } from "react";
import { fetchPostComments } from "../../../shared/services/apiMethods";
import CommentItem from "./CommentItem";
import AddComment from "./AddComment";

function CommentLayout({ postID }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await fetchPostComments(postID);
        console.log("Fetched comments:", data);
        setComments(data.content);
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
        <AddComment postID={postID} />
      </>
    );
  }

  return (
    <>
      {comments.map((comment) => {
        <CommentItem comment={comment} />;
      })}
      <AddComment postID={postID} />
    </>
  );
}

export default CommentLayout;
