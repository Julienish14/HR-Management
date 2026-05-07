import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/useAuth";

type Props = { children: React.ReactNode };

const ProtectedRoute = ({ children }: Props) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn() ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

// const AuthContext = createContext<any>(null);

// export const AuthProvider = ({ children }: any) => {
//   const loginUser = async (email: string, password: string) => {
//     // your API call
//   };

//   return (
//     <AuthContext.Provider value={{ loginUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// export default ProtectedRoute;
