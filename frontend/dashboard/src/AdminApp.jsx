import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import { fetchAuthorPosts } from "../../shared/services/apiMethods";
import { useState, useEffect } from "react";

function AdminApp() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchAuthorPosts();
        setUser(data.user);
      } catch (err) {
        console.log("error getting user", err);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <AdminDashboard user={user} />
    </>
  );
}

export default AdminApp;
