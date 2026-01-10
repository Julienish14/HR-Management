// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/SignUpPage";

import { Outlet } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";

function App() {
  return (
    <>
      <UserProvider>
        {/* <Navbar /> */}
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<LoginPage />} />
    //     {/* <Route path="/signup" element={<SignUpPage />} /> */}
    //     {/* <Route path="/" element={<LoginPage />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
