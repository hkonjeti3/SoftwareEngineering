import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import React from 'react'
import Header from "./Header";


function Login() {
 
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://se-hkonjeti.onrender.com/login',{email,password})
        .then(res=>{
            if(res.data.Status==="Success"){
                if(res.data.role==="user"){
                    navigate('/')
                }else{
                    navigate('/Dashboard')
                }
            }
        }).catch(err=>console.log(err))
    }
    return (
        <div>
        <Header />

        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" >
                <div className="bg-white p-3 rounded ">
                    <h2>Welcome Back!</h2>
                    <p>Enter your email and password to sign in.</p>
                    <form onSubmit={handleSubmit}> 

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            id="roundedTB"
                            className="form-control"
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            id="roundedTB"
                            className="form-control"
                            onChange={(e)=> setPassword(e.target.value)}
                        /> 
                    </div>


                    <Link to="/forgot" >
                        Forgot Password?
                    </Link>

                    <div><br></br></div>


                    <div class="button-center">
                        <button class="button main-btn">Sign In</button>
                    </div>


                    <div><br></br></div>


                    <p>Don't have an account?
                    <Link to="/register" >
                     <p>Sign Up</p>
                    </Link>
                    </p>
                    
                    
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;