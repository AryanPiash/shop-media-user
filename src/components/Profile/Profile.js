import React from 'react';
import Navbar from '../Shared/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import profileImg from '../../assets/images/Ellipse 3.png'
import camera from '../../assets/images/camera.png'
import currency from '../../assets/icons/currency-color.png'
import '../Styles/Profile.css'
// import '../Styles/Responsive.module.css'




const Profile = () => {
    return (
        <>
            <Navbar></Navbar>
            {/* <Sidebar></Sidebar> */}
            <div className='content-area px-4'>
                <div className="profile-container">
                    <div className='profile'>
                        <div className='profile-info'>
                            <img src={profileImg} alt="" />
                            <div className='ml-6'>
                                <h4>Alice Omotosho</h4>
                                <p>Alice304@gmail.com</p>
                            </div>
                            <div className='camera'>
                                <img src={camera} alt="" />
                            </div>
                        </div>
                        <div>
                            <button className='btn profile-info-btn'>Logout</button>
                        </div>
                    </div>

                    <div className='manage-profile'>
                        <div className='change-password'>
                            <h2 className='text-xl mb-8'>Change Password</h2>
                            <form>
                                <div className='change-form'>
                                    <input type="text" placeholder='Current Password' />
                                </div>
                                <div className='change-form'>
                                    <input type="text" placeholder='New Password' />
                                </div>
                                <div className='change-form'>
                                    <input type="text" placeholder='Confirm Password' />
                                </div>
                                <div className='change-form'>
                                    <input className='change-btn p-0' type="submit" value="Change" />
                                </div>
                            </form>
                        </div>

                        <div className='wallet'>
                            <div className='wallet-ammount'>
                                <p>Ad Wallet</p>
                                <p><img src={currency} alt="" /><span>0.00</span></p>
                            </div>
                            <div>
                                <button className='wallet-btn'>Found Wallet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;