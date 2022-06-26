import React from 'react';
import img from '../../assets/images/popup-img.png'
import map from '../../assets/icons/map-pin.png'
import currency from '../../assets/icons/CurrencyNgn.png'
import close from '../../assets/icons/x.png'
import '../Styles/BookingModal.css'
import { Link } from 'react-router-dom';


const BookingModal = ({service}) => {
    // const {img} = service
    console.log(service);
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className='popup-area p-3'>
                    <div className="card popup-card lg:card-side bg-base-100 shadow-xl mx-auto mt-20">
                        <label for="booking-modal" className="btn close-btn bg-base-100 hover:bg-white border-0 absolute right-2 top-2">
                            <img src={close} alt="" />
                        </label>

                        <figure className='img'>
                            <img src={img} alt="" />
                        </figure>
                        <div className="card-body body">
                            <div className='pt-10'>
                                <h2>Right beside wema bank lagos island</h2>
                                <p className='location'><img src={map} alt="" /> <span>Lagos island, Lagos</span></p>
                                <hr />
                            </div>
                            <div>
                                <div className='currency'><img src={currency} alt="" /><h2>50,000/Month</h2></div>
                                <div className='flex items-center justify-between'>
                                    <div className='detail'>
                                        <span>Type</span>
                                        <h2>Billboard</h2>
                                    </div>
                                    <div className='detail'>
                                        <span>Size</span>
                                        <h2>3X6 Meters</h2>
                                    </div>
                                    <div className='detail'>
                                        <span>Available Qty</span>
                                        <h2>1</h2>
                                    </div>
                                    <div className='detail'>
                                        <span>Sub Type</span>
                                        <h2>Small</h2>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div>
                                <h2 className='mb-8'>Average Target Audience</h2>
                                <div className='audience'>
                                    <span className='mr-12'>Interest: </span>
                                    <h2>Business & politics, mixedinterests</h2>
                                </div>
                                <div className='audience'>
                                    <span className='mr-5'>Age Group: </span>
                                    <h2>32-45, 45-99</h2>
                                </div>
                            </div>
                            <div className='flex justify-between mt-12 mb-12 pr-6'>
                                <button className="btn popup-btn-outline">Compare</button>
                                <button className="btn popup-btn-outline">Negotiate</button>
                                <Link to='/confirmorder'>
                                    <button className="btn popup-btn">Book</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>





            </div>

        </div>
    );
};

export default BookingModal;