import { useState } from "react";
import { addComment } from "../../../shared/services/apiMethods";
import { useUser } from "../../../shared/userContext";
import FormContainer from "../../../shared/components/FormContainer";
import FormInput from "../../../shared/components/FormInput";

function AddCommentForm({ postID, onCommentAdded }) {
  const { user } = useUser();
  const [commentData, setComment] = useState({
    userID: user.userID,
    content: "",
    postID: postID,
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setComment({ ...commentData, content: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!window.confirm("Submit comment?")) {
      return;
    }
    try {
      await addComment(postID, commentData);
      setComment({ ...commentData, content: "" }); // Clear the input
      onCommentAdded(); // Trigger refresh of comments
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-6">
      <FormContainer>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <FormInput
              text="Add a comment"
              type="textarea"
              handleChange={handleChange}
              name="comment"
              value={commentData.content}
              className="w-full resize-none rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="flex justify-center mt-4 pb-4">
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add comment
            </button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
}

export default AddCommentForm;
