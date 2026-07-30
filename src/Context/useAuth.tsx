import { createContext, useEffect, useState, useContext } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router-dom";
import { registerAPI, loginAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (
    fullname: string,
    email: string,
    username: string,
    password: string,
  ) => void;
  loginUser: (email: string, password: string) => void;
  logoutUser: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false); //we can use useState(false)

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (
    fullname: string,
    email: string,
    username: string,
    password: string,
  ) => {
    await registerAPI(fullname, email, username, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res?.data.token);
          const userObj = {
            userName: res?.data.username,
            email: res?.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.token!);
          setUser(userObj!);
          toast.success("Registration successful!");
          navigate("/search");
        }
      })
      .catch((e) => toast.warning("Server error occurred"));
  };

  const loginUser = async (
    email: string,
    // username: string,
    password: string,
  ) => {
    await loginAPI(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res?.data.token);
          const userObj = {
            // userName: res?.data.username,
            email: res?.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.token!);
          // setUser(userObj!);
          toast.success("Login successful!");
          navigate("/search");
        }
      })
      .catch((e) => toast.warning("Server error occurred"));
  };

  const isLoggedIn = () => {
    return token !== null;
    // return !!user;
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        registerUser: registerUser,
        loginUser,
        logoutUser,
        isLoggedIn,
      }}
    >
      {isReady && children}
      {/* {isReady ? children : null} */}
    </UserContext.Provider>
  );
};

// export const userAuth = () => useContext(UserContext);
export const useAuth = () => React.useContext(UserContext);
