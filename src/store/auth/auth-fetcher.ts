import axios from "axios";
import { authActions } from "./auth-slice";

export const registerData = (registerData: {
  email: string;
  password: string;
}) => {
  return async () => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/register",
        registerData
      );
      const data = response.status;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginData = (loginData: { email: string; password: string }) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        loginData
      );
      const data = await response.data;
      dispatch(authActions.login(data));
    } catch (error) {
      console.log(error);
    }
  };
};
