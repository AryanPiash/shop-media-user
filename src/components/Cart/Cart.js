import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import Sidebar from '../Sidebar/Sidebar';

import '../Styles/Cart.css'
// import '../Styles/Responsive.module.css'
import CartRow from './CartRow';


const Cart = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <Navbar></Navbar>
            {/* <Sidebar></Sidebar> */}

            <div className='content-area'>
                <div className='plan-header'>
                    <h2 className='plan-title'>Cart</h2>
                </div>
                <div className='main-wrapper w-full mt-3 pl-4'>
                    <div className='container cart-area'>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className='table-head'>Media Plan</th>
                                        <th className='table-head text-center'>Price</th>
                                        <th className='table-head'>Qty</th>
                                        <th className='table-head'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                services.slice(0,3).map(service => <CartRow
                                    key={service.id}
                                    service={service}
                                ></CartRow>)
                            }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;