import React from 'react';
import log_pic from '../assets/images/undraw_login_re_4vu2.svg';
import Button from '../components/Button'
import {NavLink} from 'react-router-dom';
import './log-reg.css';
const Login = () => {
    return (
        <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title"> Login </h1>
                            <form className="register-form" id="register-form">
                                <div className="form-group">
                                <label htmlFor="email">
                                <i class="zmdi zmdi-account material-icons-name "></i>
                                </label>
                                <input type="text" name="email" id="email" autoComplete="off" placeholder="abc@example.com"/>

                                </div>
                                <div className="form-group">
                                <label htmlFor="password">
                                <i class="zmdi zmdi-key material-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder="password"/>

                                </div>
                                
                                <div className="form-group form-button">
                                    {/* <input type="submit" name="signup" id="signup" className="form-submit" value="register"></input> */}
                                    <Button name="Login"/>
                                </div>
                            </form>
                            
                    
                </div>
                <div className="reg-img">
                                <figure>
                                    <img src={log_pic} alt="log pic" />
                                </figure>
                                <h5 className="text-center msg">Don't have an account?<NavLink to="/register"> Register</NavLink> here.</h5>
                            </div>
            </div>

        </div>
    </section>
    );
}
export default Login;