import React from 'react';
import currency from '../../assets/icons/CurrencyNgn.png'
import map from '../../assets/icons/map-pin.png'
import heart from '../../assets/icons/heart-border.png'
import '../Styles/Service.css';



const Service = ({ service, setBookService }) => {
    const { title, tag, img, ammount, ratio, location } = service;

    return (
        // service card
        <div className="card bg-base-100 bordered rounded-md service">
            <figure>
                <label for="booking-modal" onClick={() => setBookService(service)}>
                    <img className='service-img' src={img} alt="" />
                </label>
            </figure>
            <div className='heart shadow-lg'>
                <img src={heart} className='heart-icon' alt="" />
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
                <button className="btn card-btn-outline">Compare</button>
                <button className="btn card-btn-outline">Negotiate</button>
                <button className="btn card-btn">Book</button>
            </div>
        </div>
    );
};

export default Service;