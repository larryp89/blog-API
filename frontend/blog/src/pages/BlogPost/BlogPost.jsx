import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../../services/api";

function BlogPost() {
  const { postID } = useParams(); // Capture the postID from the URL
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await fetchSinglePost(postID);
        console.log("Fetched post:", data);
        setPost(data.post);
      } catch (err) {
        console.log("Get single post error", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [postID]); // Add postID as a dependency to re-fetch if it changes

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading post</div>;

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <small>By {post.author.username}</small>
        </>
      )}
    </div>
  );
}

export default BlogPost;
