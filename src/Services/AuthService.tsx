import axios from "axios";
import { UserProfileToken } from "../Models/User";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:8080/api/v1/auth/";

export const loginAPI = async (
  email: string,
  // username: string,
  password: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "login", {
      // username: username,
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  fullname: string,
  email: string,
  username: string,
  password: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "register", {
      fullname: fullname,
      email: email,
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
