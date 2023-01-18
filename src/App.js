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
