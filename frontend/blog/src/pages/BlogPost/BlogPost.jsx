import { useEffect, useState } from "react";
import { fetchSinglePost } from "../../services/api";

function BlogPost({ postID }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await fetchSinglePost(postID);
        console.log("Fetched post:", data);
        setPost(data.post);
      } catch (err) {
        console.log("Get single post error", err);
      }
    };
    fetchPost();
  }, []);

  return;
}

export default BlogPost;
