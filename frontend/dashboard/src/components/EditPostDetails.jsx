import { useState } from "react";
import FormInput from "../../../shared/components/FormInput";
import FormCheckbox from "../../../shared/components/FormCheckbox";
import { editPost } from "../../../shared/services/api";
function EditPostDetails({ post }) {
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
      editPost(postDetails);
    } catch (err) {
      console.log("EditPostDetails error", err);
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
