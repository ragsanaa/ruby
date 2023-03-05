import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const baseURL = "http://localhost:8000/api/v1";
const loginURL = "http://localhost:8000/api/v1/autenticate/token/login/";

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

  const axiosInstance = axios.create({
    loginURL,
    headers: { Authorization: `TOKEN ${authTokens?.access}` }
  });

  axiosInstance.interceptors.request.use(async req => {
    const user = jwt_decode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const response = await axios.post(`${baseURL}authenticate/token/login/`, {
      refresh: authTokens.refresh
    });

    localStorage.setItem("auth_token", JSON.stringify(response.data));

    setAuthTokens(response.data);
    setUser(jwt_decode(response.data.access));

    req.headers.Authorization = `TOKEN ${response.data.access}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;
