import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./components/auth/Login";
import Services from "./pages/Services";
import Warriors from "./pages/Warriors";
import Register from "./components/auth/Register";
import SignUp from "./components/auth/SignUp";

function App() {
  document.body.style = "background: #5A68B0;";
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Warriors" element={<Warriors />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/WarriorRegister" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
