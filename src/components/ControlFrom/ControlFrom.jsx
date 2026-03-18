import React, { useState } from "react";

const ControlFrom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log(name,email, password);
    // console.log(e.target.email.value)
    // console.log(e.target.password.value)
    if (password.length < 10) {
      setError("10 charater or longer password needed");
    } else {
      setError("");
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("Password must be 6 character or longer.");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          defaultValue={name}
          placeholder="Name"
          onChange={handleNameChange}
        />
        <br />
        <input
          type="email"
          defaultValue={email}
          onChange={handleEmailChange}
          placeholder="email"
          required
          name="email"
        />
        <br />
        <input
          type="password"
          required
          defaultValue={password}
          onChange={handlePasswordChange}
          placeholder="password"
          name="password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlFrom;
