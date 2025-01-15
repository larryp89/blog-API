import { useState } from "react";
import { createPost } from "../../../shared/services/apiMethods";
import FormInput from "../../../shared/components/FormInput";
import FormCheckbox from "../../../shared/components/FormCheckbox";

function CreatePost() {
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
      createPost(postData);
    } catch (err) {
      console.log("CreatePost error", err);
    }
  };

  return (
    <>
      <h1>This is the new post form</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          text="Title"
          type="text"
          handleChange={handleChange}
          name="title"
          value={postData.title}
        />

        <FormInput
          text="Content"
          type="textarea"
          handleChange={handleChange}
          name="content"
          value={postData.content}
        />

        <FormCheckbox
          text="Publish?"
          handleChange={handleChange}
          name="isPublished"
          value={postData.isPublished}
        />

        <button type="submit">Submit Post</button>
      </form>
    </>
  );
}

export default CreatePost;
