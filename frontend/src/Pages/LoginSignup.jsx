import React, { useState } from "react";
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const [state, setState] = useState('Login');
    const [formData,setformData] = useState({
      username : "",
      password : "",
      email : ""
    })

    const changeHandler = (e) => {
             setformData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () => {
        console.log('login function executed' , formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json'
          },
          body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data)
        
        if(responseData.success){
          localStorage.setItem('auth-token',responseData.token);
          window.location.replace("/");
        }
        else{
          alert(responseData.errors)
        }
    }

    const signup = async () => {
        console.log('signup function executed' , formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json'
          },
          body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data)
        
        if(responseData.success){
          localStorage.setItem('auth-token',responseData.token);
          window.location.replace("/");
        }
        else{
          alert(responseData.errors)
        }
    }

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-feilds">
                    {state === 'Sign up' && <input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder="Your Name" />}
                    <input type="email" name="email" value={formData.email} onChange={changeHandler} placeholder="Email Address" />
                    <input type="password" name="password" value={formData.password} onChange={changeHandler} placeholder="Password" />
                </div>
                <button onClick={() => { state === "Login" ? login() : signup(); }}>Continue</button>
                {state === "Sign up" ? (
                    <p className="loginsignup-login">
                        Already have an account?<span onClick={() => { setState("Login"); }}>login here</span>
                    </p>
                ) : (
                    <p className="loginsignup-login">
                        Create an account?<span onClick={() => { setState("Sign up"); }}>Click here</span>
                    </p>
                )}
                <div className="loginsignup-agree">
                    <input type="checkbox" name="agree" id="agree" />
                    <label htmlFor="agree">By continuing, I agree to the terms of use and privacy</label>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
