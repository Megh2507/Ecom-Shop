import React from 'react'
import CartNavbar from './CartNavbar'
import "./cart.css"
import cartimg from "./cartimg.svg"
import {useState} from "react"
import {BsCart4} from "react-icons/bs"
import {GiConfirmed} from "react-icons/gi"
import {MdOutlinePayments} from "react-icons/md"
import {AiOutlineDoubleRight} from "react-icons/ai"
import OrderInfo from './OrderInfo'
import PaymentCard from './PaymentCard'
function Cart() {
    const [cartItems,setCartItems] = useState([
      {
        "name": "Mi 11 Ultra 5G",
        "price": "₹ 69,999",
        "image": "https://i02.appmifile.com/867_operator_in/23/04/2021/3849c44ac78d65621750a114811711f9.png?width=140&height=140",
        'url':'https://store.mi.com/in/search_https://store.mi.com/in/search_'
  },
  {
        "name": "Mi 11X Pro 5G",
        "price": "from ₹ 39,999",
        "image": "https://i02.appmifile.com/52_operator_in/04/03/2021/7db1136dfdc2a1e9fc639b56bc19f17f.png?width=140&height=140",
        'url':'https://store.mi.com/in/search_'
  },
  {
    "name": "Mi 11X 5G",
    "price": "from ₹ 29,999",
    "image": "https://i02.appmifile.com/368_operator_in/23/04/2021/93d54b25b3efc3b6e87a9d73004de1c3.png?width=140&height=140",
    'url':'https://store.mi.com/in/search_Mi%2011X%20Pro%205G'
},
{
    "name": "Mi 10T Pro",
    "price": "₹ 36,999",
    "image": "https://i02.appmifile.com/406_operator_in/15/10/2020/4481bf3c3bb2ce53d9f4ac6ce1d7e312.png?width=140&height=140",
    'url':'https://store.mi.com/in/search_Mi%2010T%20Pro'
},
{
    "name": "Mi 10T",
    "price": "from ₹ 32,999",
    "image": "https://i02.appmifile.com/938_operator_in/15/10/2020/4e6b056c8984ad7031873ae9b5f564a5.png?width=140&height=140",
    'url':'https://store.mi.com/in/search_Mi%2010T'
},
{
    "name": "Mi 10i",
    "price": "from ₹ 20,999",
    "image": "https://i02.appmifile.com/606_operator_in/05/01/2021/3de2b587f140a830fc732855a0a76035.png?width=140&height=140",
    'url':'https://store.mi.com/in/search_Mi%2010i'
}
    ])
    const [shwordersec,setShwordersec] = useState(false)
    const [mkpayment,setMkpayment] = useState(false)
  return (
    <div>
        <CartNavbar/>
        {cartItems.length===0?
        <div className='empcart'>
<img src={cartimg} alt=""  />
<h3 style={{"color":"#b0b0b0"}}>There's nothing in your cart yet! <span style={{"color":"#ff6700"}}>:(</span></h3>
 
<button className='snbtn'>Explore Now</button>
        </div>
        :<>
        <div className="cart-items">
          <div className="cnav">
            <h5 style={{"color":shwordersec || mkpayment?"#b0b0b0":"#ff6700"}}>SHOPPING CART</h5>
            <h5 style={{"color":shwordersec?"#ff6700":"#b0b0b0","cursor":"pointer"}} onClick={()=>setShwordersec(!shwordersec)}>ORDER INFORMATION</h5>
            <h5 style={{"color":mkpayment?"#ff6700":"#b0b0b0","cursor":"pointer"}} onClick={()=>setMkpayment(!mkpayment)}>FINISH PAYING</h5>
          </div>
          {shwordersec && <OrderInfo/>}
          {mkpayment && <PaymentCard/>}
        {/* <h3 style={{"color":"#b0b0b0"}}>Your cart items are here! <span style={{"color":"#ff6700"}}>:)</span></h3> */}
        {cartItems.map((el)=>{
          return(
            <div className='e-c-i'>
           <div className="eci-w">
           <h6 style={{"color":"#b0b0b0"}}>{el.name}</h6>
           <h6 style={{"color":"#b0b0b0"}}>Price <span style={{"color":"#ff6700"}}>{el.price}</span></h6>
           </div>
           <img src={el.image} alt="" />
            </div>
          )
        })}
        </div>
        </>}
    </div>
  )
}

export default Cart