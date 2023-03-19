import React from 'react'
import { useStateValue } from "./Stateprovider";
import './Product.css'

function Product({id,title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
  console.log("this is the basket >>>", basket)

  const add_to_basket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='Product'>
        <div className='Product_info'>
            <p>{title}</p>
        </div>
        <div className='Product_price'>
            <small>$</small>
            <strong>{price}</strong>
        </div>
        <div className='Product_rating'>
            {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        
        <img className='Product_image' src={image}></img>
        <button onClick={add_to_basket}>Add to Basket</button>
    </div>
    
  )
}

export default Product