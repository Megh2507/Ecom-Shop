import React from 'react'
import "./cart.css"
function OrderInfo() {
  return (
    <div className='os'>
 <input type="text" placeholder='Enter your full name' />
 <input type="number" placeholder='Enter your phone number' />
 <input type="text" placeholder='Address line 1' />
 <input type="text" placeholder='Address line 2' />
 <button className='bbtn'>Buy Now</button>

    </div>
  )
}

export default OrderInfo