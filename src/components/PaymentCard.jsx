import React from "react";
import "./cart.css";
import { GiConfirmed } from "react-icons/gi";
import {MdOutlineSecurity} from "react-icons/md"
import { useState } from "react";
function PaymentCard() {
  const [card,setCard] =useState(false)
  return (
    <div className="pc">
      <div className="pfp">
        <div className="fp-l">
          <GiConfirmed color="green" size={30} />
          <h6 style={{ color: "#b0b0b0" }}>
            Your order has been successfully submitted!
          </h6>
        </div>
        <div className="fp-r">
          <p style={{ color: "#b0b0b0" }}>
            Amont <span style={{ color: "#ff6700" }}>₹1,476</span>
          </p>
        </div>
      </div>
      <div className="fps">
        <div className="fps-fl">
        <h6 style={{ color: "#b0b0b0" }}>
           Choose your payment method.
          </h6>
          <h5 style={{"color":"#07f246","fontSize":"18px"}}><MdOutlineSecurity size={30}/>100% Security Guranteed.</h5>
        </div>
        <div className="fps-sl">
          <div className="po">
            <h6 style={{"color":card?"#ff6700":"#b0b0b0"}} onClick={()=>setCard(!card)}>Credit/Debit Card</h6>
            <h6>UPI</h6>
            <h6>Net Banking</h6>
            <h6>MI Wallet</h6>
          </div>
          {card &&
  <div className="por">
  <div className="fi">
    <input type="number" placeholder="Card Number" />
    <input type="number" placeholder="Name on card" />

    </div>
    <div className="fi">
    <input type="text" placeholder="Expiry" />
    <input type="number" placeholder="CVV" />

    </div>
    <button className="pbtn">Make Your Payment</button>
  
</div> 
}
        </div>
        

      </div>
    </div>
  );
}

export default PaymentCard;
