import React from "react";
import useInputFelid from "./userInputFelid";

const HookFrom = () => {
  const [email, emailOnChange] = useInputFelid("");
  const[password,passwordOnChange]= useInputFelid("")

  const handleHookFrom = (e) => {
    e.preventDefault();
    console.log(email,password)
  };

  return (
    <div>
      <form onSubmit={handleHookFrom}>
        <input
          type="email"
          autoComplete="email"
          placeholder="email"
          defaultValue={email}
          onChange={emailOnChange}
        />
        <br />
        <input type="password"
        autoComplete="current-password"
        onChange={passwordOnChange} /><br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookFrom;
