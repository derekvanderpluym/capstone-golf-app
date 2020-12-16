import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

export default function Login() {
    return(
        <section className="login">
            <div className="login__cont">
                <label className="login__label" for="email">Email</label>
                <input className="login__input" type="email" id="email" name="email"/>
                <label className="login__label">Password</label>
                <input className="login__input" type="password" id="pwd" name="pwd"/>
                <Link to="/home" className="login__login-btn"><button type="button" >LOGIN</button></Link>
                <button type="button" className="login__signup-btn">SIGN UP</button>
            </div>
        </section>
    )
}