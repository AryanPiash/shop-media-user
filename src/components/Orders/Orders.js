import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Order from './Order';
// import '../Styles/Responsive.module.css'

const Orders = () => {
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
                    <h2 className='plan-title'>Your Orders ({services.slice(0,2).length})</h2>
                </div>
                <div className='main-wrapper w-full mt-3 pl-4'>
                    <div className='container'>
                        <div className='grid grid-cols-4 gap-4 p-4 pt-0 w-full'>
                            {
                                services.slice(0,2).map(service => <Order
                                    key={service.id}
                                    service={service}
                                ></Order>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Orders;