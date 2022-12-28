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
      <Routes>
        <Route path="register" element={<Rejester />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="inner_page" element={<InnerPage />} />
        </Route>
        <Route path="/" element={<SecenderyLayout />}>
          <Route path="favorite" element={<Favorite />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
