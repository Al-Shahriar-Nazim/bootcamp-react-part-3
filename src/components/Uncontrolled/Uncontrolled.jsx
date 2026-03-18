import React, { useRef } from "react";

const Uncontrolled = () => {
  const inputRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    const name = inputRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(name, email, password);
    // alert(inputRef.current.value); 
     };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" ref={inputRef} />
        <br />
        <input type="email" ref={emailRef} />
        <br />
        <input type="password" ref={passwordRef} />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Uncontrolled;
