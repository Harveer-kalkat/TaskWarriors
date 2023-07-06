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
import Warriors from "./pages/Warriors";
// import Register from "./components/auth/Register";
import SignUp from "./components/auth/SignUp";
import ServiceDetails from "./pages/ServiceDetails";
import WarriorSelection from "./pages/WarriorSelection";

function App() {
  document.body.style = "background: #5A68B0";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Warriors" element={<Warriors />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/SignUp" element={<SignUp />} /> */}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ServiceDetails" element={<ServiceDetails />} />
        <Route path="/WarriorSelection" element={<WarriorSelection />} />
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
