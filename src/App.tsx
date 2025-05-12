
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPlaceholder from "./pages/VideoPlaceholder";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/elevator-pitch" element={<VideoPlaceholder />} />
      </Routes>
    </div>
  );
}

export default App;
