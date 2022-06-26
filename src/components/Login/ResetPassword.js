import React from 'react';
import shape from '../../assets/img/shapes/form-shape.svg'
import resetPassword from '../../assets/img/Reset password.gif'
import '../Styles/Style.css'
// import '../Styles/Responsive.module.css'


const ResetPassword = () => {
    return (
        <section className="form-area">
        <div className="form-left flex items-center justify-center">
            <div className="form-wrapper">
                <form action="">
                    <div className="form-title">
                        <h3 className="mb-0">Reset password </h3>
                    </div>
                    <div className="form-input">
                        <label for="">Email</label>
                        <input type="email" className="form-control" placeholder="Enter your email"/>
                    </div>
                    <div className="form-submit-btn pt-3">
                        <button type="submit">Reset Password</button>
                    </div>
                    <div className="form-text">
                        <p>Already have an acount? <a href="login.html"><b>Login</b></a></p>
                    </div>
                </form>
            </div>
        </div>
        <div className="form-right">
            <div className="form-shape">
                <img src={shape} alt=""/>
            </div>
            <div className="form-thumb-wrapper">
                <img src={resetPassword} alt=""/>
            </div>
        </div>
    </section>
    );
};

export default ResetPassword;