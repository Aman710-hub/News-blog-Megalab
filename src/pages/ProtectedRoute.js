import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  console.log("🚀 ~ ProtectedRoute ~ user", user);
  const user1 = true;
  if (user1) {
    return navigate("register");
  }
  return children;
};

export default ProtectedRoute;
