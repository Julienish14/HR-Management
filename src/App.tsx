import { Outlet } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";
import AppRoutes from "./Routes/Routes";

const App: React.FC = () => {
  return <AppRoutes />;
};

export default App;

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
