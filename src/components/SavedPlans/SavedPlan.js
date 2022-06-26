import React from 'react';
import { Link } from 'react-router-dom';
import currency from '../../assets/icons/CurrencyNgn.png'
import map from '../../assets/icons/map-pin.png'
import trash from '../../assets/icons/trash.png'
// import '../Styles/Responsive.module.css'

const SavedPlan = ({service}) => {
    const { title, tag, img, ammount, ratio, location } = service;

    return (
        <div className="card bg-base-100 bordered rounded-md service">
            <figure><img src={img} alt="Service" /></figure>
            <div className='heart shadow-lg'>
                <img src={trash} className='heart-icon' alt="" />
            </div>
            <div className='tag'>
                <p className='mt-2'>{tag}</p>
            </div>

            <div className="p-3 bg-[#fff]">
                <div className='flex justify-between'>
                    <p className='flex'><img src={currency} alt="" /> <span className='font-semibold'>{ammount}</span></p>
                    <span className='text-gray-500 font-semibold ratio-text'>{ratio}</span>
                </div>
                <h2 className="text-xl font-semibold my-4">{title}</h2>
                <div className='flex items-center my-4'>
                    <img className='w-5 h-5 mr-1' src={map} alt="" />
                    <span>{location}</span>
                </div>
                {/* <button className="btn card-btn">Book</button> */}
                <Link to='/popup'><button className="btn card-btn">Book</button></Link>

            </div>
        </div>
    )
};

export default SavedPlan;