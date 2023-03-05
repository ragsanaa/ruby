import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

  // To check if the user is logged in, we check if there are authTokens in localStorage.
  //If there are, we set them as the initial state of authTokens. If not, we set the initial state to null.
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("auth_token")
      ? JSON.parse(localStorage.getItem("auth_token"))
      : null
  );

  //to set the user, we should decode the token and set the user state to the decoded token.
  const [user, setUser] = useState(() =>
    localStorage.getItem("auth_token")
      ? jwt_decode(localStorage.getItem("auth_token"))
      : null
  );



  const [loading, setLoading] = useState(true);

  //that allows you to access the router state when navigating within your components.
  const history = useHistory();


// login functions
  const loginUser = async (username, password) => {
    const response = await fetch("http://localhost:8000/api/v1/authenticate/token/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    const data = await response.json();

    if (response.status === 200) {
      console.log(data);
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("auth_token", JSON.stringify(data));
      history.push("/pricingPlan");
    } else {
      alert("Something went wrong!");
    }
  };


  //register function
  const registerUser = async (username, password, password2) => {
    const response = await fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
        password2
      })
    });
    if (response.status === 201) {
      alert("Succefssfully registered!");
      history.push("/login");
    } else {
      alert("Something went wrong!");
    }
  };


  //logout function
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("auth_token");
    history.push("/");
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
