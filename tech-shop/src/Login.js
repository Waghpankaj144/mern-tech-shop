
import "./styles/login.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  
  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginuser = async (e) =>{

    e.preventDefault();
    const res = await fetch('/signin', {
      method : "POST",
      headers:{
        "content-type"  : "application/json"
      },
      body : JSON.stringify({
       email,password
      })
    });
     
    const data =res.json();

    if(data.status===400 || !data){

      window.alert("Invalid registraion");
      console.log("Invalid registraion");
    }
    else 
    {
      window.alert(" Login successfull " );
      console.log(" login successfull");
      navigate("/")
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form  method="POST">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit"
         value={"Login"} 
         onClick={loginuser}
        >Login</button>
      </form>
    </div>
  );
}

export default Login;


