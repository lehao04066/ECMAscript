// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Tours from "./pages/Tour";  // Giữ như fix trước

function App() {
  console.log('App loaded!');  // Debug: Kiểm tra App chạy

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;