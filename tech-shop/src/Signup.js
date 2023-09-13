import "./styles/signup.css";
import React, { useState } from 'react';

import {useNavigate } from 'react-router-dom'


function Signup() {
  const navigate = useNavigate ()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(setFormData)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit the form data here
    // For simplicity, let's just log the data for now
    console.log(formData);
  };

  const PostData = async (e) =>{
    e.preventDefault()
    const {name, email, phone, work, password, cpassword} = formData;

    const res =await fetch('/register', {
      method : "POST",
      headers:{
        "content-type"  :"application/json"
      },
      body : JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    })

    const data = await res.json();
    
    if(data.status === 422 || !data){
      window.alert("Invalid registraion");
      console.log("Invalid registraion");
    }else {
      window.alert(" registraion successfull now click on Login" );
      console.log(" registraion successfull");
      navigate('/Login')
    }
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="work">Work:</label>
          <input
            type="text"
            id="work"
            name="work"
            value={formData.work}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password:</label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit"  
        value={"register"}
        onClick={PostData}
        > Register</button>
      </form>
    </div>
  );
}


export default Signup;
