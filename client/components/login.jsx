import React, { useState } from "react";

const Login = ({ setPageState }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handlePageSwitch = () => {
    setPageState("signup");
  };

  const handleSubmit = () => {
    const { username, password } = formData;

    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }).then();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id="loginBody">
      <h1 id="login" className="h1">
        LOGIN
      </h1>
      <form id="loginForm" className="form" onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        ></input>
        <input className="button" type="submit" value="Login"></input>
      </form>
      <button onClick={handlePageSwitch}>Don't have an account? Sign up!</button>
    </div>
  );
};

export default Login;