import React, { useState } from 'react';
import { auth } from '../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link,useNavigate } from 'react-router-dom';
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import './Login.css'
const Login = () => {
    const [user, setuser] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handlechhange = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value });
    };

    const signup = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, user.email, user.password).then((res)=>{
                navigate("/admin")
            });
            setError(""); // Clear any previous errors on successful login
        } catch (error) {
            setError(error.message);
            navigate("/login")
        }
        setuser({
            email: "",
            password: ""
        });
    };

    return (
        <div className='container'>
        <div className='header'>
            <div className='text'>Login</div>
            <div className='underline'></div>
        </div>
        <form onSubmit={signup} className='inputs'>
            
            <div className='input'>
             <AiTwotoneMail className='icon'/>
        <input type='text' placeholder=' Email' name='email' value={user.email} onChange={handlechhange} />
            </div>
            <div className='input'>
            <RiLockPasswordLine className='icon'/>
            <input type='password' placeholder=' Password' name='password' value={user.password} onChange={handlechhange} />
            </div>
        {error && <p className="error">{error}</p>}
        <div>
            <button className='btn' type='submit'>Login</button> 
            <span> you don't have an account ! </span> <Link to="/">Signup</Link>
        </div>
        </form>
    </div>
    );
};

export default Login;
