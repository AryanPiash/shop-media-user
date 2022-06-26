import React from 'react';
import calendar from '../../assets/icons/calendar.png'
import heart from '../../assets/icons/heart.png'
import cart from '../../assets/icons/shopping-cart.png'
import discount from '../../assets/icons/discount.png'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import '../Styles/Sidebar.css'




const Sidebar = ({ className }) => {
    // Custom Active Links
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div className={match ? "bg-base-100" : ""}>
                <Link
                    style={{ color: match ? "#000" : "#fff" }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>

            </div>
        );
    }
    return (
        <aside className={`h-screen sidebar ${className}`}>
            <div className="searchbox">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="#000000"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input type="text" placeholder="Search" className="w-full outline-none" />
            </div>
            <ul className="menu p-2 pt-20">
                <li className='mb-3'>
                    <CustomLink to='/dashboard' className='flex items-center w-full'>
                        <img src={calendar} alt="" />
                        <span className='font-bold pl-3 w-full'>Media Planning</span>
                    </CustomLink>
                </li>
                <li className='mb-3'>
                    <CustomLink to='/savedplans' className='flex items-center w-full'>
                        <img className='w-6' src={heart} alt="" />
                        <span className='font-semibold pl-3 w-full'>Saved Media Plan</span>
                    </CustomLink>
                </li>
                <li className='mb-3'>
                    <CustomLink to='/orders' className='flex w-full'>
                        <img src={cart} alt="" />
                        <span className='font-semibold pl-3 w-full'>Orders</span>
                    </CustomLink>
                </li>
                <li className='mb-3'>
                    <CustomLink to='/discount' className='flex w-full'>
                        <img src={discount} alt="" />
                        <span className='font-semibold pl-3 w-full'>Discount</span>
                    </CustomLink>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;

