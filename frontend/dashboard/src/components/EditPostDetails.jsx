import { useState } from "react";
import FormInput from "../../../shared/components/FormInput";
import FormCheckbox from "../../../shared/components/FormCheckbox";
import { editPost } from "../../../shared/services/api";
import { deletePost } from "../../../shared/services/api";

function EditPostDetails({ post }) {
  const [postDetails, setPostDetails] = useState({
    title: post.title,
    content: post.content,
    isPublished: post.published,
    postID: post.id,
  });

  console.log("The passed post contaisn", post);

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
      console.log("editPostDetails error", err);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      deletePost(postDetails);
    } catch (err) {
      console.log("deletePost error", err);
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
      <button onClick={handleDelete}>Delete this post :(</button>
    </>
  );
}

export default EditPostDetails;
