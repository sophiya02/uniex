import React from 'react';
import reg_pic from '../assets/images/undraw_online_ad_re_ol62.svg';
import {NavLink} from 'react-router-dom';
import './log-reg.css'
import Button from '../components/Button'
const Register = () => {
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title"> Register </h1>
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
                                <div className="form-group">
                                <label htmlFor="confirm-password">
                                <i class="zmdi zmdi-key material-icons-name"></i>
                                </label>
                                <input type="password" name="confirm-password" id="confirm-password" autoComplete="off" placeholder="Retype password"/>

                                </div>
                                <div className="form-group form-button">
                                    {/* <input type="submit" name="signup" id="signup" className="form-submit" value="register"></input> */}
                                    <Button name="Register"/>
                                </div>
                            </form>
                            
                        </div>
                        <div className="reg-img">
                                <figure>
                                    <img src={reg_pic} alt="registration pic" />
                                </figure>
                                <h5 className="text-center msg">Already Registered?<NavLink to="/login"> Login</NavLink> here.</h5>
                            </div>
                    </div>

                </div>
            </section>
        </>
    );
}
export default Register;