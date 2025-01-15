import { useState } from "react";
import FormInput from "../../../shared/components/FormInput";
import FormCheckbox from "../../../shared/components/FormCheckbox";

function EditPostDetails({ post }) {
  const [postDetails, setPostDetails] = useState({
    title: post.title,
    content: post.content,
    isPublished: post.isPublished,
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
      createPost(postData);
    } catch (err) {
      console.log("CreatePost error", err);
    }
  };
  return (
    <>
      <h1>This is the edit post form</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          text="Title"
          type="text"
          handleChange={handleChange}
          name="title"
          value={postDetails.title}
        />

        <FormInput
          text="Content"
          type="textarea"
          handleChange={handleChange}
          name="content"
          value={postDetails.content}
        />

        <FormCheckbox
          text="Publish?"
          handleChange={handleChange}
          name="isPublished"
          value={postDetails.isPublished}
        />

        <button type="submit">Edit Post</button>
      </form>
    </>
  );
}

export default EditPostDetails;
