import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

function App() {
  

  return (
    <div className='bg-white min-h-screen text-green-950 font-serif'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>
  )
}

export default App
