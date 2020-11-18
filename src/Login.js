import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  let url = "/";

  return (
    //<h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action="" method="post">
                            <h3 className="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" className="text-info">Username:</label>
                                <input type="text" name="username" id="username" className="form-control"/> 
                            </div>
                            <div className="form-group">
                                <label for="password" className="text-info">Password:</label>
                                <input type="text" name="password" id="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br></br>
                                {/* <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" href={url} /> */}
                                <a href="/" className="btn btn-primary">Submit</a>
                            </div>
                            <div id="register-link" className="text-right">
                                <a href="/" className="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );

}