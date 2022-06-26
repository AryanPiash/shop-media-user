
import React from 'react';
import google from '../../assets/img/icons/google-logo.svg'
import facebook from '../../assets/img/icons/facebook.svg'
import eye from '../../assets/img/icons/eye.svg'
import shape from '../../assets/img/shapes/form-shape.svg'
import secure from '../../assets/img/Secure login.gif'
import '../Styles/Style.css'
import Navigation from '../Navigation'
import { Link } from 'react-router-dom';



const Login = () => {



    return (
        <div>
            <Navigation />

            <section className="form-area">
                <div className="form-left">
                    <div className="form-wrapper">
                        <form action="">
                            <div className="form-title">
                                <h3>Login </h3>
                                <p>Welcome back to Shop Media ! Choose your favourite method to Sign in!</p>
                            </div>
                            <div className="form-option-btns">
                                <button><span><img src={google} alt="" /></span> Sign in with
                                    Google</button>
                                <button><span><img src={facebook} alt="" /></span> Sign in with
                                    Facebook</button>
                            </div>
                            <div className="or"><span>or Sign in with Email</span></div>
                            <div className="form-input">
                                <label for="">Email</label>
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="form-input has-icon">
                                <label for="">Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                                <button className="form-input-icon">
                                    <img src={eye} alt="" />
                                </button>
                            </div>
                            <div className="form-bottom d-flex align-items-center justify-content-between">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Remember me
                                    </label>
                                </div>
                                <Link to='/resetpassword'>Forgot Password?</Link>
                            </div>
                            <div className="form-submit-btn">
                                <button type="submit">Sign In</button>
                            </div>
                            <div className="form-text">
                                <p>Dont have an acount? <Link to='/register'><b>Register</b></Link></p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="form-right">
                    <div className="form-shape">
                        <img src={shape} alt="" />
                    </div>
                    <div className="form-thumb-wrapper">
                        <img src={secure} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;