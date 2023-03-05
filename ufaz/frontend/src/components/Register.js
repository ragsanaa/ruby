import '../styles/register.css';
import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, email, password, password2);
  };
  return(
    <div className="App">
      <div className="container-register">
        <section id="register">
          <h3>Qeydiyyatdan keç</h3>
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
          <p>və yaxud</p>

          <form onSubmit={handleSubmit} >

        <div className="forms">
          <input
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="forms">
          <input
            type="text"
            id="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="forms">
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className="forms">
          <input
            type="password"
            id="confirm-password"
            onChange={e => setPassword2(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <p>{password2 !== password ? "Passwords do not match" : ""}</p>
        </div>
        <div className="forms">
              <a type="submit" className="submit" href='login'>Daxil ol</a>
            </div>
                  </form>
          <div className="footer-word">
            Qeydiyyatdan keçməklə <span><a href="/">Qaydalar</a></span> və <span><a href="/">Məxfilik şərtləri</a></span>ni qəbul edirəm.
          </div>
        </section>
      </div>
    </div>
  );
}
export default Register;
