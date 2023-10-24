import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import React from 'react'

function Login() {
 
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://new-server-cvbw.onrender.com/login',{email,password})
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
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" >
            <div className="bg-white p-3 rounded ">
                <h2>Login</h2>
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
                        className="form-control rounded-0"
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input 
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Login
                </button>
                <p>Forgot Password</p>
                <Link to="/forgot" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Forgot Password
                </Link>
                <p>Don't have an account</p>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Sign up
                </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;