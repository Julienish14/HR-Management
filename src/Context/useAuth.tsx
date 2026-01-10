import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router-dom";
import { registerAPI, loginAPI } from "../Services/AuthService";
import { toast } from "react-toastify";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
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
    }
    setIsReady(true);
  }, []);

  const register = async (
    email: string,
    username: string,
    password: string
  ) => {
    await registerAPI(email, username, password)
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
    password: string
  ) => {
    await loginAPI(email, password)
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

  const isLoggedIn = () => {
    // return token !== null;
    return !!user;
  };

  const logoutUser = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
};
