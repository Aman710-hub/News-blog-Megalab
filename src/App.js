import { Home, Rejester } from "./pages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rejester" element={<Rejester />} />
      </Routes>
    </div>
  );
}

export default App;
