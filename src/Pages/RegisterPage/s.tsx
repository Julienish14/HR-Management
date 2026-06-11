// Context/AuthContext.tsx
import React, { createContext, useState, ReactNode } from "react";

interface AuthContextType {
  loginUser: (email: string, password: string) => Promise<void>;
  user: any; // Replace 'any' with your user type
  isAuthenticated: boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginUser = async (email: string, password: string) => {
    try {
      // Your login logic here
      console.log("Logging in with:", email, password);

      //   Example API call
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setIsAuthenticated(true);
      }

      // For testing:
      setUser({ email, name: "Test User" });
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ loginUser, user, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
