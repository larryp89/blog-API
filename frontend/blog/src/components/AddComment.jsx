import { useState } from "react";
import { addComment } from "../../../shared/services/apiMethods";
import { useUser } from "../../../shared/userContext";
import FormContainer from "../../../shared/components/FormContainer";
import FormInput from "../../../shared/components/FormInput";

function AddComment({ postID }) {
  const { user } = useUser();
  const [commentData, setComment] = useState({
    userID: null,
    content: "",
    username: user,
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setComment(value);
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
