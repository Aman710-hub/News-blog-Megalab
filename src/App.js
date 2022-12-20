import { Favorite, Home, InnerPage, Rejester } from "./pages";
import { Routes, Route } from "react-router-dom";
import { MainLayout, SecenderyLayout } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="inner_page" element={<InnerPage />} />
        </Route>
        <Route path="/" element={<SecenderyLayout />}>
          <Route path="favorite" element={<Favorite />} />
        </Route>
        {/* <Route path="rejester" element={<Rejester />} /> */}
      </Routes>
    </div>
  );
}

export default App;
