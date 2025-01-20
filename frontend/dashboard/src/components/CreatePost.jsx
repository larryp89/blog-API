import { useState } from "react";
import { createPost } from "../../../shared/services/apiMethods";
import { useNavigate } from "react-router-dom";
import FormContainer from "../../../shared/components/FormContainer";
import FormInput from "../../../shared/components/FormInput";
import FormCheckbox from "../../../shared/components/FormCheckbox";

function CreatePost() {
  const navigate = useNavigate();
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
    try {
      if (!window.confirm("Are you sure you are ready to submit?")) {
        return;
      }
      await createPost(postData);
      setPostData({ title: "", content: "", isPublished: false });
      navigate("/admin");
    } catch (err) {
      console.log("CreatePost error", err);
    }
  };

  return (
    <div className="mt-6">
      <FormContainer>
        <h1 className="text-lg font-semibold mb-4">Create a New Post</h1>
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
