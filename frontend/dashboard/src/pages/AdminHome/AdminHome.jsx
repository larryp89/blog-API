import { useState, useEffect } from "react";
import { useAuth } from "../../../../shared/authContext";
import FormContainer from "../../../../shared/components/FormContainer";
import AdminLoginForm from "../../components/AdminLoginForm";
import { fetchAuthorPosts } from "../../../../shared/services/apiMethods";
import AdminBlogItem from "../../components/AdminBlogItem";

function AdminHome() {
  const { isLoggedIn } = useAuth();
  const [user, setUser] = useState(null); // Initialize as null
  const [posts, setPosts] = useState([]); // Initialize as empty array

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchAuthorPosts();
        setUser(data.user);
        setPosts(data.posts);
        console.log(data.posts);
      } catch (err) {
        console.log("error getting user details", err);
      }
    };

    getUserData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      {isLoggedIn ? (
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            Welcome to Blog Manager,{user ? ` ${user.username}` : ""}
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            This is where you can edit, publish, unpublish, or delete your blog
            posts. Click on a post to edit.
          </p>
          {posts && posts.length > 0 ? (
            <div>
              <ul>
                {posts.map((post) => (
                  <li key={post.id}>
                    <AdminBlogItem blogPost={post} />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <p>You have not yet written any posts</p>
            </div>
          )}
        </div>
      ) : (
        <div className="mx-auto max-w-md">
          <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Welcome Back. Please sign in, or signup here.
          </h1>
          <FormContainer>
            <AdminLoginForm />
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default AdminHome;
