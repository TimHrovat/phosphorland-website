import { render } from "@testing-library/react";
import React from "react";

function Login() {
  return (
    <div className="title-slide">
      <div className="title login-box">
        <h1 className="login-title">Login</h1>
        <form>
          <input
            type="text"
            id="usrnm"
            name="usrnm"
            placeholder="Username"
            className="login-input usrnm"
          ></input>
          <input
            type="text"
            id="pswd"
            name="pswd"
            placeholder="Password"
            className="login-input pswd"
          ></input>
          <input type="submit" className="login-submit" value="Login"></input>
        </form>
      </div>
    </div>
  );
}

export default Login;
