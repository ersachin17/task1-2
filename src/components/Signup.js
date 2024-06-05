import React, { useState } from 'react'
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link ,useNavigate} from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import './Signup.css'
const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
     const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const signup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, user.email, user.password).then((res)=>{
                 navigate("/admin")
            });
            setError(""); // Clear any previous error
        } catch (error) {
           setError(error.message)
           navigate("/")
        }
        setUser({
            name: "",
            email: "",
            password: ""
        });
    };
     
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Signup</div>
                <div className='underline'></div>
            </div>
            <form onSubmit={signup} className='inputs'>
                <div className='input'>
                <BsFillPersonFill className='icon'/>
                <input type='text' placeholder=' Name' name='name' value={user.name} onChange={handleChange} />
                </div>
                <div className='input'>
                 <AiTwotoneMail className='icon'/>
            <input type='text' placeholder=' Email' name='email' value={user.email} onChange={handleChange} />
                </div>
                <div className='input'>
                <RiLockPasswordLine className='icon'/>
                <input type='password' placeholder=' Password' name='password' value={user.password} onChange={handleChange} />
                </div>
            {error && <p className="error">{error}</p>}
            <div>
                <button className='btns' type='submit'>Signup</button> 
                <span>you have an account !</span> <Link to="/login">Login</Link>
            </div>
            </form>
        </div>
    )
};
export default Signup;
