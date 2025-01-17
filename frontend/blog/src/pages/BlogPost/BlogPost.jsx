import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../../../../shared/services/apiMethods";
import BlogPostDetails from "../../components/BlogPostDetails";
import CommentLayout from "../../components/CommentLayout";

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
        if (err === "Authentication failed") {
          logout();
          console.log("Get single post error", err);
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [postID]); // Add postID as a dependency to re-fetch if it changes

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="rounded-lg bg-red-50 p-4 text-red-800">
          Error loading post: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      {post && (
        <>
          <BlogPostDetails post={post} />
          <CommentLayout postID={postID} />
        </>
      )}
    </div>
  );
}

export default BlogPost;
