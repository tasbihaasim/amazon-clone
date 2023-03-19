import React from 'react'
import './Checkout.css'
import { useStateValue } from "./Stateprovider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal'

function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='Checkout'>
        <div className='Checkout_left'>
            
            <img className='Checkout_ad' src= "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_8._V515060851_.jpg"></img>
            
            <div>
              <h2 className='Checkout_title'>Your shopping basket</h2>  
              {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}         
            </div>
        </div>
        <div className='Checkout_right'>
            <Subtotal/>
        </div>
    
    </div>
  )
}

export default Checkout