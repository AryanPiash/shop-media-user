import React from 'react';
import Navbar from '../Shared/Navbar';
import thumsbUp from '../../assets/icons/thums-up.png'
import accessBank from '../../assets/icons/access-bank-plc 1.png'
import '../Styles/ConfirmOrder.css'

const ConfirmOrder = () => {
    return (
        <div>
            <>
            <Navbar></Navbar>
            
            <div className='content-area px-5'>
                <div className='main-wrapper text-center mt-12 max-w-[645px] mx-auto py-10 border'>
                    <div className='status'>
                        <div className='thums-up'>
                            <span><img src={thumsbUp} alt="" /></span>
                        </div>
                        <h2>Thank you foryour order!</h2>
                        <p>Payment can be made by direct bank transfer to our bank details stated below</p>
                        <hr className='horizontal' />
                    </div>
                    <div className="access">
                        <img src={accessBank} alt="" />
                        <p>Bank : <span>Access Bank</span></p>
                        <p className='mb-2'>Account number : <span>0045124692</span></p>
                        <p className='mb-2'>Account name : <span>Shop Media</span></p>
                        <p className='mb-8'>Address : <span>12, Normal pedro road Lagos Nigeria.</span></p>
                        <hr className='horizontal' />
                    </div>
                    <div className='instruction'>
                        <p className='mt-4 mb-3'><span>Post payment instruction</span></p>
                        <p className='mb-2'>Please email your payment slip to <span>hi@shopmedia.ng</span></p>
                        <p className='mb-5'>The following details payment should be written on the payment slip</p>
                        <p><span>Company / Organization / Individual</span></p>
                        <p className='mb-5'><span>Invoice Number</span></p>
                        <p><small>All renewals of new orders will be processed once the proof of payment has been recieved</small></p>
                    </div>
                </div>
            </div>
        </>
        </div>
    );
};

export default ConfirmOrder;