import React from 'react';
import chevDown from '../../assets/img/icons/chevDown.svg'
import shape from '../../assets/img/shapes/form-shape.svg'
import signup from '../../assets/img/Sign up.gif'
import '../Styles/Style.css'
import Navigation from '../Navigation'
import { Link } from 'react-router-dom';



const Register = () => {

    

    return (
        <div>
            <Navigation />

            <section className="form-area">
                <div className="form-left">
                    <div className="form-wrapper">
                        <form action="">
                            <div className="form-title">
                                <h3 className="mb-0">Register </h3>
                            </div>
                            <div className="form-input">
                                <label for="">Email</label>
                                <input type="email" required className="form-control" placeholder="Enter your email*" />
                            </div>
                            <div className="form-input">
                                <label for=""> Full Name</label>
                                <input type="text" className="form-control" required placeholder="Enter your Full Name*" />
                            </div>
                            <div className="form-input">
                                <label for="">Company Name</label>
                                <input type="text" className="form-control" placeholder="Enter your Company Name" />
                            </div>
                            <div className="form-input">
                                <label for="">Phone Number</label>
                                <div className="phone-input-group">
                                    <div className="phone-select">
                                        <select name="" className="form-select" id="">
                                            <option value="" selected>+234</option>
                                            <option value="">+880</option>
                                            <option value="">+782</option>
                                            <option value="">+213</option>
                                            <option value="">+343</option>
                                            <option value="">+783</option>
                                            <option value="">+583</option>
                                        </select>
                                        {/* <span><img src={chevDown} alt=""/></span> */}
                                    </div>
                                    <input type="text" className="form-control" placeholder="Enter  Phone number" />
                                </div>
                            </div>
                            <div className="form-input">
                                <label for="">Password</label>
                                <input type="password" required className="form-control" placeholder="Password*" />
                            </div>
                            <div className="form-input">
                                <label for="">Confrim Password</label>
                                <input type="password" required className="form-control" placeholder="Confrim Password*" />
                            </div>
                            <div className="form-submit-btn pt-3">
                                <button type="submit"> Register</button>
                            </div>
                            <div className="form-text">
                                <p>Already have an acount? <Link to="/login"><b>Login</b></Link></p>
                            </div>
                            
                        </form>
                    </div>
                </div>
                <div className="form-right">
                    <div className="form-shape">
                        <img src={shape} alt="" />
                    </div>
                    <div className="form-thumb-wrapper">
                        <img src={signup} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;