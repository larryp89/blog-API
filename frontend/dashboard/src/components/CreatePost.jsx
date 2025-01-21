import { useState } from "react";
import { createPost } from "../../../shared/services/apiMethods";
import { useNavigate } from "react-router-dom";
import FormContainer from "../../../shared/components/FormContainer";
import FormInput from "../../../shared/components/FormInput";
import FormCheckbox from "../../../shared/components/FormCheckbox";

function CreatePost() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    isPublished: false,
  });

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setPostData({
      ...postData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setErrorMessages([]);

    try {
      if (!window.confirm("Are you sure you are ready to submit?")) {
        return;
      }
      const response = await createPost(postData);
      setPostData({ title: "", content: "", isPublished: false });
      navigate("/admin");
    } catch (err) {
      if (err.status === 401 || err.status === 403) {
        setError("Your session has expired. Please login to create a new post");
      } else if (err.errors && err.errors.length > 0) {
        setError(err.message);
        setErrorMessages(err.errors);
      } else {
        setError(err.message || "An error occurred while creating the post");
      }
    }
  };

  return (
    <div className="mt-6">
      <FormContainer>
        <h1 className="text-lg font-semibold mb-4">Create a New Post</h1>
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
              value={postData.title}
              className="w-full resize-none rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <FormInput
              text="Content"
              type="textarea"
              handleChange={handleChange}
              name="content"
              value={postData.content}
              className="w-full resize-none rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 mt-4"
            />
            <FormCheckbox
              text="Publish?"
              handleChange={handleChange}
              name="isPublished"
              value={postData.isPublished}
              className="mt-4"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit Post
            </button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
}

export default CreatePost;
