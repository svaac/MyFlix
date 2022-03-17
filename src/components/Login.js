import axios from "axios";
import React, { useState } from "react";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post("localhost://5000/users/register", {
      email,
      password,
    });
    console.log(response);
  };

  return (
    <div className="login">
      <form onSubmit={submitHandler} className={"loginForm"}>
        <input
          type={email}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder={email}
          className={("input-login", "input-email")}
        />
        <input
          type={password}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder={password}
          className={("input-login", "input-password")}
        />
        <button onSubmit={submitHandler}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
