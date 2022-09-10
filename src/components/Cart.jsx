import React from 'react'
import CartNavbar from './CartNavbar'
import "./cart.css"
import cartimg from "./cartimg.svg"
import {useState} from "react"
import {AiOutlineDoubleRight} from "react-icons/ai"
function Cart() {
    const [cartItems,setCartItems] = useState([])
  return (
    <div>
        <CartNavbar/>
        {cartItems.length===0?
        <div className='empcart'>
<img src={cartimg} alt=""  />
<h3 style={{"color":"#b0b0b0"}}>There's nothing in your cart yet! <span style={{"color":"#ff6700"}}>:(</span></h3>
 
<button className='snbtn'>Explore Now</button>
        </div>
        :<>no hello</>}
    </div>
  )
}

export default Cart