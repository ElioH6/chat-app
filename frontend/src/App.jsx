import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Login from "./pages/login/login"
import Signup from "./pages/signup/signup"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
function App() {
  const { auth } = useContext(AuthContext);
  
  return (
    <div className="flex items-center justify-center h-screen p-4">
      <Routes>
        <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={auth ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={auth ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
