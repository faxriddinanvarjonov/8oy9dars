import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";

// https://auth-rg69.onrender.com/api/auth/signup
// https://auth-rg69.onrender.com/api/auth/signin

function App() {
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("token") && location.pathname != "/login") {
      navigate("/register");
    }

    console.log(location.pathname);
  }, []);

  return (
    <Routes>
      <Route element={<Home />} path="/"></Route>
      <Route element={<Login />} path="/login"></Route>
      <Route element={<Register />} path="/register"></Route>
      <Route
        element={
          <div className="flex text-black text-center justify-center text-6xl font-bold">
            Not Found 404
          </div>
        }
        path="*"
      ></Route>
    </Routes>
  );
}

export default App;
