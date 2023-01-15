import {
  Favorite,
  Home,
  InnerPage,
  Profile,
  Rejester,
  ProtectedRoute,
} from "./pages";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainLayout, SecenderyLayout } from "./components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./features/userSllice";
function App() {
  const { userData } = useSelector((store) => store.user);
  console.log("🚀 ~ App ~ user", userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<Rejester />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/:postId" element={<InnerPage />} />
            </Route>
            <Route element={<SecenderyLayout />}>
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
