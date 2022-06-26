import React, { useEffect, useState } from 'react';
import Service from './Service';
import '../Styles/Services.css';
import BookingModal from '../BookingModal/BookingModal';


const Services = () => {
    const [services, setServices] = useState([])
    const [bookService, setBookService] = useState(null)
    const [className, setClassName] = useState('')


    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    
    const handleToggle = () => {
        if(className === ''){
            setClassName('active')
        }
        else if(className === 'active'){
            setClassName('')
        }
    }



    return (
        <main className='main main-area w-full'>

            <aside className={`mx-4  mb-4 border p-3 home-aside ${className}`}>
                <div className='sidebar-wrapper'>
                    <h1 className='text-2xl font-regular mb-8'>Refine Search</h1>
                    <div>
                        {/* filter search*/}
                        <div className="refine-search form-input relative has-icon">
                            <button className='input-icon'><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-6 search-btn" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
                            <input type="text" placeholder="Filter by search" className="" />
                        </div>
                        {/* start date */}
                        <div className="form-control form-input w-full max-w-xs mb-4">
                            <label className="label p-0 pb-2">
                                <span className="label-text text-lg ">Start date</span>
                            </label>
                            <input type="text" placeholder="16/06/22" className="refine-search outline-none" />
                            <label className="label p-0">
                                <span className="label-text text-xs font-semibold">End data will be selected at checkout</span>
                            </label>
                        </div>
                        {/* type of service */}
                        <div className='my-4 pt-2 pb-1'>
                            <select className="w-full bg-transparent select-small text-lg  outline-none">
                                <option disabled selected>Select Ad Type</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>
                        {/* select state */}
                        <div className='mb-4'>
                            <label className="label p-0 pb-3">
                                <span className="label-text text-lg  ">Select State</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Choose</option>
                                <option>California</option>
                                <option>Florida</option>
                                <option>Texas</option>
                                <option>Arizona</option>
                                <option>Verginia</option>
                            </select>
                        </div>
                        {/* select city */}
                        <div className='mb-4'>
                            <label className="label">
                                <span className="label-text text-lg  ">Select City</span>
                                <span className="label-text text-md">Optional</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Choose</option>
                                <option>New York</option>
                                <option>Los Angeles</option>
                                <option>Chicago</option>
                                <option>Houston</option>
                                <option>Boston</option>
                            </select>
                        </div>
                        {/* select landmark */}
                        <div className='my-6 relative'>
                            <select className="w-full bg-transparent select-small text-lg  outline-none">
                                <option disabled selected>Landmark</option>
                                <option>Options</option>
                                <option>Options</option>
                                <option>Options</option>
                                <option>Options</option>
                                <option>Options</option>
                            </select>
                            <span className="text-xs text-small absolute top-6 left-1">Only applies to billboards</span>
                        </div>
                        {/* age group */}
                        <div className='my-4 relative pt-1'>
                            <label className="label">
                                <span className="label-text text-lg">Select Age Group</span>
                            </label>
                            <span className="text-xs absolute text-small top-10 left-1">Does not applies to billboards</span>
                            <select className="select select-bordered w-full max-w-xs mt-4">
                                <option disabled selected>Select age</option>
                                <option>Options</option>
                                <option>Options</option>
                                <option>Options</option>
                                <option>Options</option>
                                <option>Options</option>
                                <option>Options</option>
                            </select>

                        </div>

                    </div>
                </div>
            </aside>
            <div className='main-wrapper w-full home-cards'>
                <div className='container'>
                    <div className='filter-search'>
                        <h5>Filters</h5> <div onClick={handleToggle} className="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000000"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                    </div>
                    <div className='grid  grid-cols-3 gap-4 p-4 pt-0 w-full'>
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                                setBookService={setBookService}
                            ></Service>)
                        }
                    </div>
                    {bookService && <BookingModal></BookingModal>}
                </div>
            </div>
        </main>
    );
};

export default Services;