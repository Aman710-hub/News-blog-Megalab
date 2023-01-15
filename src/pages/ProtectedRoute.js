import { Outlet, useNavigate } from "react-router";

import { getUserTokenFromLocalStorage } from "../utils/localStorage";
import Rejester from "./Rejester";

const ProtectedRoute = () => {
  const tokenFromLocalStorage = getUserTokenFromLocalStorage();

  return tokenFromLocalStorage ? <Outlet /> : <Rejester />;
};

export default ProtectedRoute;
