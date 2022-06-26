import React from 'react';
import currency from '../../assets/icons/CurrencyNgn.png'
import map from '../../assets/icons/map-pin.png'
import trash from '../../assets/icons/trash.png'
// import '../Styles/Responsive.module.css'


const Order = ({ service }) => {
    const { title, tag, img, ammount, ratio, location } = service;

    return (
        <div className="card bg-base-100 bordered rounded-md service">
            <figure><img src={img} alt="Service" /></figure>
            <div className='tag'>
                <p className='mt-2'>{tag}</p>
            </div>

            <div className="p-3 mt-5 bg-[#fff]">
                <div className='flex justify-between'>
                    <p className='flex'><img src={currency} alt="" /> <span className='font-semibold'>{ammount}</span></p>
                    <span className='text-gray-500 font-semibold ratio-text'>{ratio}</span>
                </div>
                <h2 className="text-xl font-semibold my-5">{title}</h2>
                <div className='flex items-center my-4'>
                    <img className='w-5 h-5 mr-1' src={map} alt="" />
                    <span>{location}</span>
                </div>
            </div>
        </div>
    )
};

export default Order;