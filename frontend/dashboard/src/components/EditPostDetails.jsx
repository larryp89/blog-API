import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editPost, deletePost } from "../../../shared/services/apiMethods";
import FormContainer from "../../../shared/components/FormContainer";
import FormInput from "../../../shared/components/FormInput";
import FormCheckbox from "../../../shared/components/FormCheckbox";

function EditPostDetails({ post }) {
  const navigate = useNavigate();
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!window.confirm("Confirm edit?")) {
        return;
      }
      await editPost(postDetails);
      navigate("/admin/dashboard");
    } catch (err) {
      console.log("editPostDetails error", err);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      if (
        !window.confirm(
          "ARE YOU SURE YOU WANT TO DELETE THIS. IT WILL BE GONE FOREVER...",
        )
      ) {
        return;
      }
      await deletePost(postDetails);
      navigate("/admin/dashboard"); // Navigate to the dashboard or another route
    } catch (err) {
      console.log("deletePost error", err);
    }
  };

  return (
    <div className="mt-6">
      <FormContainer>
        <h1 className="text-lg font-semibold mb-4">
          This is the edit post form
        </h1>
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
              className="w-full resize-none rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 mt-4"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Edit Post
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Delete this post :(
          </button>
        </div>
      </FormContainer>
    </div>
  );
}

export default EditPostDetails;
