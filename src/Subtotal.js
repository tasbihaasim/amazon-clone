import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./Stateprovider";
import './Subtotal.css'

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='Subtotal'>
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items): <strong>{basket.reduce((a,v) =>  a = a + v.price , 0 )}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={55} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className='subtotal_button'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal