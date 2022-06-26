import React, { useState } from 'react';
import logo from '../../assets/images/logo.png'
import cart from '../../assets/icons/cart-white.png'
import price from '../../assets/icons/currency.png'
import country from '../../assets/images/nigeria.png'
import arrowDown from '../../assets/icons/arrow-down.png'
import bell from '../../assets/icons/bell.png'
import profile from '../../assets/images/profile.png'
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';



const Navbar = () => {
    const [className, setClassName] = useState('')

    const handleToggle = () => {
        if(className === ''){
            setClassName('active')
        }
        else if(className === 'active'){
            setClassName('')
        }
    }


    return (
        <div>
            <div className="navbar z-10">
                <div className="flex-1">
                    <div onClick={handleToggle} className="dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-open" fill="none" viewBox="0 0 24 24" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <Link to='/' className="logo cursor-pointer">
                        <img src={logo} alt="" />
                    </Link>
                    <div className="searchbox">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <input type="text" placeholder="Search" className="w-full outline-none" />
                    </div>
                </div>
                <div className="flex-none">
                    <div className='flex items-center pr-6'>
                        <div>
                            <Link to='/cart'>
                                <img className='mr-3' src={cart} alt="" />
                            </Link>
                        </div>
                        <div className='flex items-center mr-9 cart-btn'>
                            <img className='' src={price} alt="" />
                            <span className='text-white text-lg ml-1 font-semibold'>0.00</span>
                        </div>
                        <div className='flex items-center mr-4 language-btn'>
                            
                            <ul className="menu menu-horizontal p-0">
                                <li tabIndex="0">
                                    <a className='text-white country-select-text'><img className='mr-1' src={country} alt="" />
                                        NGN
                                        <img tabIndex="0" className='w-3' src={arrowDown} alt="" />
                                    </a>
                                    <ul className="p-2 bg-base-100 z-10 right-2">
                                        <li><a>USA</a></li>
                                        <li><a>UAE</a></li>
                                        <li><a>UK</a></li>
                                        <li><a>ENG</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='mt-1'>
                            <input type="checkbox" className="toggle toggle-sm mr-5" />
                        </div>
                        <div>
                            <div className="dropdown dropdown-end bell">
                                <label tabIndex="0" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <img className='' src={bell} alt="" />
                                    </div>
                                </label>
                                <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-40 bg-base-100 shadow">
                                    <div className="card-body">
                                        <ul className="menu  p-0">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                            <li><a>Submenu 3</a></li>
                                            <li><a>Submenu 4</a></li>
                                            <li><a>Submenu 5</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown dropdown-end">
                        <Link to='/profile'>
                            <label className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={profile} alt='' />
                                </div>
                            </label>
                        </Link>
                    </div>
                </div>
            </div>

            <Sidebar
                className={className}
                handleToggle={handleToggle}
            ></Sidebar>

        </div>
    );
};

export default Navbar;