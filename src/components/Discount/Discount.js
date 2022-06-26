import React from 'react';
import Navbar from '../Shared/Navbar';


const Discount = () => {
    return (
        <>
            <Navbar></Navbar>
            
            <div className='content-area'>
                <div className='plan-header'>
                    <h2 className='plan-title'>There are currently no discount</h2>
                </div>
                
            </div>
        </>
    );
};

export default Discount;