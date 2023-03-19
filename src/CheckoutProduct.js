import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./Stateprovider";

function CheckoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const RemoveItem = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_ITEM',
            id: id,
        })

    }
  return (
    <div className='CheckoutProduct'>
    <img className='checkout_image' src={image}></img>
    <div className='checkoutproduct_info'>
        <p className='cp_title'>{title}</p>
        <p className='cp_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='cp_rating'>
            {Array(rating).fill().map((_, i) => (<p>*</p>))}
        </div>
        <button className='Remove' onClick={RemoveItem}>Remove from basket</button>

    </div>
    
    </div>
    )
}

export default CheckoutProduct