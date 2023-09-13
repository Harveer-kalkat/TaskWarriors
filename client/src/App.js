import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./components/auth/Login";
import Services from "./pages/Services";
import SignUp from "./components/auth/SignUp";
import ServiceDetails from "./pages/ServiceDetails";
import WarriorSelection from "./pages/WarriorSelection";
import Dashboard from "./pages/Dashboard";
import CreateListings from "./pages/CreateListings";
import Register from "./components/auth/Register";
import Chat from "./pages/Chat";

function App() {
  document.body.style = "background: #5A68B0";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ServiceDetails/:id" element={<ServiceDetails />} />
        <Route path="/WarriorSelection/:id" element={<WarriorSelection />} />
        <Route path="/Dashboard/:id" element={<Dashboard />} />
        <Route path="/CreateListings" element={<CreateListings />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
