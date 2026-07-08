// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import LoginPage from "./pages/LoginPage";
// // import SignUpPage from "./pages/SignUpPage";

// import { Outlet } from "react-router";
// import "react-toastify/dist/ReactToastify.css";
// import "./App.css";
// import { ToastContainer } from "react-toastify";
// import { UserProvider } from "./Context/useAuth";
// import AppRoutes from "./Routes/Routes";

// function App() {
//   return (
//     <>
//       <UserProvider>
//         {/* <Navbar /> */}
//         <Outlet />
//         <ToastContainer />
//       </UserProvider>
//       <AppRoutes />
//     </>
//     // <Router>
//     //   <Routes>
//     //     <Route path="/login" element={<LoginPage />} />
//     //     {/* <Route path="/signup" element={<SignUpPage />} /> */}
//     //     {/* <Route path="/" element={<LoginPage />} /> */}
//     //   </Routes>
//     // </Router>
//   );
// }

// export default App;

// import React from "react";
// import AppRoutes from "./Routes/Routes";

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-red-50">
//       <AppRoutes />
//     </div>
//   );
// };

// export default App;

// App.tsx
import React, { useState } from "react";
import "./App.css";

// Components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import RecentActivity from "./components/RecentActivity";
import Chart from "./components/Chart";
