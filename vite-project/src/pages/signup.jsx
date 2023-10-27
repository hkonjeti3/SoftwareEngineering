import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import Header from "./Header";


function Signup() {
    const [username, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [fname, setFName] = useState()
    const [lname, setLName] = useState()
    const [role, setRole] = useState()
    const [gender, setGender] = useState()
    const [age, setAge] = useState()

    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(username,email)
        axios.post('https://new-server-cvbw.onrender.com/register',{username,email,password, fname, lname, role, gender, age})
        .then(res=>{
            navigate('/login')
        }).catch(err=>console.log(err))
    }

    return (
        <div><Header />
        <div className="d-flex justify-content-center align-items-center bg-secondary ">
            <div className="bg-white p-3 rounded ">
                <h2>Register</h2>
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
                    <label htmlFor="fname">
                        <strong>First Name</strong>
                    </label>
                    <input 
                        type="text"
                        placeholder="Enter First Name"
                        autoComplete="off"
                        name="fname"
                        id="roundedTB"
                        className="form-control"
                        onChange={(e)=> setFName(e.target.value)}
                    />
                </div>


                <div className="mb-3">
                    <label htmlFor="lname">
                        <strong>Last Name</strong>
                    </label>
                    <input 
                        type="text"
                        placeholder="Enter Last Name"
                        autoComplete="off"
                        name="lname"
                        id="roundedTB"
                        className="form-control"
                        onChange={(e)=> setLName(e.target.value)}
                    />
                </div>


                <div className="mb-3">
                    <label htmlFor="username">
                        <strong>Username</strong>
                    </label>
                    <input 
                        type="text"
                        placeholder="Enter Name"
                        autoComplete="off"
                        name="username"
                        id="roundedTB"
                        className="form-control"
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>


                <div className="mb-3">
                    <label htmlFor="age">
                        <strong>Age</strong>
                    </label>
                    <input 
                        type="number"
                        placeholder="Enter age"
                        autoComplete="off"
                        name="age"
                        id="roundedTB"
                        className="form-control"
                        onChange={(e)=> setAge(e.target.value)}
                    />
                    {/* do we need an age thing? */}

                <div><br></br></div>
                <div onChange={(e)=> setRole(e.target.value)}>
                    <div><strong>Role</strong></div>
                    <input type="radio" value="User" id="accent" name="role"/> 
                    <label htmlFor="User">User</label>
                    &emsp;
                    <input type="radio" value="Venue Owner" id="accent" name="role"/>
                    <label htmlFor="Venue Owner">Venue Owner</label>
                </div>


                <div onChange={(e)=> setGender(e.target.value)}>
                    <div><strong>Gender</strong></div>
                    <input type="radio" value="Male" id="accent" name="Gender"/> < label htmlFor="Male">Male</label>
                    &emsp;
                    <input type="radio" value="Female" id="accent" name="Gender"/> < label htmlFor="Female">Female</label>
                    &emsp;
                    <input type="radio" value="Other" id="accent" name="Gender"/> < label htmlFor="Other">Other</label>
                </div>



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

            
                    <div class="button-center">
                        <button class="button main-btn">Register</button>
                    </div>


                <div className="mb-3">Already have an account?
                <Link to="/login">
                    <p>Login</p>
                </Link></div>
                </form>


            </div>
        </div>
    </div>
    );
}

export default Signup;