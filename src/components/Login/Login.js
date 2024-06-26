import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom/dist';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handelPasswordBlur = event => {
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, {replace: true});
    }

    const handelUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)

    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handelUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelPasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="LogIn" />
                </form>
                <p>
                    New to Ema-john? <Link className='form-link' to='/signup'>Create New Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;