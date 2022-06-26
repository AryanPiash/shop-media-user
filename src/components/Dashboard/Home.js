import React from 'react';
import Navbar from '../Shared/Navbar';
import Sidebar from '../Sidebar/Sidebar'; 
import Services from './Services';
// import '../Styles/Responsive.module.css'

const Dashboard = () => {

    
    return (
        <div className='flex pr-3'>
            <Navbar></Navbar>
            {/* <Sidebar></Sidebar>  */}
            <Services></Services>
        </div>
    );
};

export default Dashboard;