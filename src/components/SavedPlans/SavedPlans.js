import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import '../Styles/SavedPlans.css' 
import SavedPlan from './SavedPlan'; 





const SavedPlans = () => {
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
                    <h2 className='plan-title'>Your Saved Media Plans ({services.slice(0,4).length})</h2>
                </div>
                <div className='main-wrapper w-full mt-3 pl-4'>
                    <div className='container'>
                        <div className='grid grid-cols-4 gap-4 p-4 pt-0 w-full'>
                            {
                                services.slice(0,4).map(service => <SavedPlan
                                    key={service.id}
                                    service={service}
                                ></SavedPlan>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SavedPlans;