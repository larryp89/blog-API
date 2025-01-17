import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import { fetchAuthorPosts } from "../../shared/services/apiMethods";
import { useState, useEffect } from "react";
import AdminHome from "./pages/AdminHome/AdminHome";

function AdminApp() {
  return (
    <>
      <AdminHome />
    </>
  );
}

export default AdminApp;
