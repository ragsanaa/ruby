import React from 'react';
import '../styles/login.css';
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Login() {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };
  return (
    <div className="App">


{/* <!-- LOGIN --> */}

      <div className="login " style={{marginBottom: 250,marginTop:250}}>
        <form onSubmit={handleSubmit} className="inputContainer">
          <h1>Daxil Ol</h1>
          <p>Sosial media ilə qeydiyyatdan keç</p>
          <div className="btns">
            <button>
              <img src="../../static/main/icons/icons8-facebook 1.svg" alt=""/>
              Facebook
            </button>
            <button>
              <img src="../../static/main/icons/icons8-google 1.svg" alt=""/>
              Google
            </button>
          </div>
          <p>Və yaxud e-mail ilə daxil ol</p>

        <input type="text" id="username" placeholder="Enter Username" />
        <input type="password" id="password" placeholder="Enter Password" />
        <a href="pricingPlan" type="submit" className="btnLogin" >Daxil ol</a>
      </form>

      </div>
    </div>
  );
}

export default Login;
