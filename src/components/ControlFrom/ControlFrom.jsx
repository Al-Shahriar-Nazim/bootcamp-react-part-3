import React, { useState } from "react";

const ControlFrom = () => {
    const[password,setPassword]=useState("")
    const handleFrom =(e)=>{
        e.preventDefault()
        console.log(e)

    }
    const handlePasswordChange=(e)=>{
        console.log(e.target.value)
    }
  return (
    <div>
      <form onSubmit={handleFrom}>
        <input type="email" placeholder="email" required name="email" />
        <br />
        <input type="password" 
        defaultValue={password} onChange={handlePasswordChange}
        placeholder="password" required name="Password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ControlFrom;
