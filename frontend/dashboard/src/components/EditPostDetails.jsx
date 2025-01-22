import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editPost, deletePost } from "../../../shared/services/apiMethods";
import FormContainer from "../../../shared/components/FormContainer";
import FormInput from "../../../shared/components/FormInput";
import FormCheckbox from "../../../shared/components/FormCheckbox";

function EditPostDetails({ post }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [postDetails, setPostDetails] = useState({
    title: post.title,
    content: post.content,
    isPublished: post.published,
    postID: post.id,
  });

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setPostDetails({
      ...postDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const clearErrors = () => {
    setError("");
    setErrorMessages([]);
  };

  const handleError = (err) => {
    if (err.status === 401 || err.status === 403) {
      setError("Your session has expired. Please login to continue.");
    } else if (err.errors && err.errors.length > 0) {
      setError(err.message);
      setErrorMessages(err.errors);
    } else {
      setError(err.message || "An error occurred. Please try again.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    clearErrors();

    try {
      if (!window.confirm("Are you sure you want to save these changes?")) {
        return;
      }
      await editPost(postDetails);
      navigate("/");
    } catch (err) {
      handleError(err);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    clearErrors();

    try {
      if (
        !window.confirm(
          "Are you sure you want to delete this post? This action cannot be undone.",
        )
      ) {
        return;
      }
      await deletePost(postDetails);
      navigate("/admin");
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="mt-6">
      <FormContainer>
        <h1 className="text-lg font-semibold mb-4">Edit Post</h1>

        {(error || errorMessages.length > 0) && (
          <div className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800">
            {error && <p className="font-medium">{error}</p>}
            {errorMessages.length > 0 && (
              <ul className="mt-2 list-disc pl-5">
                {errorMessages.map((message, index) => (
                  <li key={index}>{message}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <FormInput
              text="Title"
              type="text"
              handleChange={handleChange}
              name="title"
              value={postDetails.title}
              className="w-full resize-none rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <FormInput
              text="Content"
              type="textarea"
              handleChange={handleChange}
              name="content"
              value={postDetails.content}
              className="w-full resize-none rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 mt-4"
            />
            <FormCheckbox
              text="Publish?"
              handleChange={handleChange}
              name="isPublished"
              value={postDetails.isPublished}
              className="mt-4"
            />
          </div>
          <div className="flex justify-between gap-4">
            <button
              onClick={handleDelete}
              type="button"
              className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Delete Post
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
}

export default EditPostDetails;
