import React from 'react';
import map from '../../assets/icons/map-pin.png'
import currency from '../../assets/icons/CurrencyNgn.png'
import trash from '../../assets/icons/trash-black.png'

const CartRow = ({service}) => {
    const { title, img, location } = service;
    return (
        <tr className='table-row'>
            <td className='w-[500px]'>
                <div className='media-plan-cart'>
                    <div className='cart-img'>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold mb-0'>{title}</h4>
                        <p className='flex'><img className='mr-2' src={map} alt="" /> {location}</p>
                        <p>Added about 16 hours ago</p>
                    </div>
                </div>
            </td>
            <td>
                <div className='price'>
                    <img src={currency} alt="" />
                    <span>68,818</span>
                </div>
            </td>
            <td>
                <div className='quantity'>
                    <span><button>-</button></span>
                    <h3>1</h3>
                    <span><button>+</button></span>
                </div>
            </td>
            <td>
                <button><img src={trash} alt="" /></button>
            </td>
        </tr>
    );
};

export default CartRow;