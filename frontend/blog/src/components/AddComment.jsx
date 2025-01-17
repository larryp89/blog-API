import { useState } from "react";
import { addComment } from "../../../shared/services/apiMethods";
import { useUser } from "../../../shared/userContext";
import FormContainer from "../../../shared/components/FormContainer";
import FormInput from "../../../shared/components/FormInput";

function AddComment({ postID }) {
  const { user } = useUser();
  console.log("I AM THE USER", user);
  const [commentData, setComment] = useState({
    userID: user.userID,
    content: "",
    postID: postID,
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setComment({ ...commentData, content: value });
  };

  const handleSubmit = (event) => {
    event.preventdefault();
    addComment(postID, commentData);
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormInput
            text="Add a comment"
            type="textarea"
            handleChange={handleChange}
            name="comment"
          />
          <button type="submit">Add comment</button>
        </form>
      </FormContainer>
    </>
  );
}

export default AddComment;
