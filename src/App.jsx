import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

function App() {
  

  return (
    <div className='bg-gradient-to-br from-slate-500 to-slate-700 min-h-screen text-blue-600'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>
  )
}

export default App
