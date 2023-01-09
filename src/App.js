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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<Rejester />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/:postId" element={<InnerPage />} />
          </Route>
          <Route path="/" element={<SecenderyLayout />}>
            <Route path="favorite" element={<Favorite />} />
            <Route path="profile" element={<Profile />} />
            {/* <Route path="/:favorite/:postID" element={<InnerPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
