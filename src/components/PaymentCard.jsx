import React from "react";
import "./cart.css";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { useState } from "react";
function PaymentCard() {
  const [card, setCard] = useState(false);
  const [upi, setUpi] = useState(false);
  const [nb, setNb] = useState(false);
  const [wallet, setWallet] = useState(false);
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
          <h6 style={{ color: "#b0b0b0" }}>Choose your payment method.</h6>
          <h5 style={{ color: "#07f246", fontSize: "18px" }}>
            <MdOutlineSecurity size={30} />
            100% Security Guranteed.
          </h5>
        </div>
        <div className="fps-sl">
          <div className="po">
            <h6
              style={{ color: card ? "#ff6700" : "#b0b0b0" }}
              onClick={() => setCard(!card)}
            >
              Credit/Debit Card
            </h6>
            <h6
              style={{ color: upi ? "#ff6700" : "#b0b0b0" }}
              onClick={() => setUpi(!upi)}
            >
              UPI
            </h6>
            <h6
              style={{ color: nb ? "#ff6700" : "#b0b0b0" }}
              onClick={() => setNb(!nb)}
            >
              Net Banking
            </h6>
            <h6
              style={{ color: wallet ? "#ff6700" : "#b0b0b0" }}
              onClick={() => setWallet(!wallet)}
            >
              MI Wallet
            </h6>
          </div>
          {card && (
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
          )}
                   {wallet && (
            <div className="por1">
              <div className="fi1">
             <> <input type="radio"/><img src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png" alt="" /></>
             <> <input type="radio"/><img src="https://securecdn.pymnts.com/wp-content/uploads/2020/01/Score-Card-Company-Image-10.png" alt="" /></>  
               <><input type="radio"  /><img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/fbrg0sxzewucqn6jhlbt" alt="" /></> 
              </div>
              <div className="fi1">
                <><input type="radio"  /><img src="https://cypersystems.com/wp-content/uploads/2020/09/New-PhonePe-Logo.png" alt="" /></>
               <><input type="radio"/><img src="https://www.logo.wine/a/logo/MobiKwik/MobiKwik-Logo.wine.svg" alt="" /></> 
              </div>
              <button className="pbtn1">Make Your Payment</button>
            </div>
          )}
          {nb && (
            <div className="por1">
              <div className="fi1">
             <> <input type="radio"/><img src="https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png" alt="" /></>
             <> <input type="radio"/><img src="http://assets.stickpng.com/thumbs/627ccb0a1b2e263b45696aa5.png" alt="" /></>  
               <><input type="radio"  /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3aXVOyIZs0z_7nMSFUSDauZNwETuu1FJkiapyfXxXILkBQcPGqfZLq0lWhdbyCp5aEI&usqp=CAU" alt="" /></> 
              </div>
              <div className="fi1">
                <><input type="radio"  /><img src="https://png.pngitem.com/pimgs/s/23-238417_axis-bank-logo-png-transparent-png.png" alt="" /></>
               <><input type="radio"/><img src="https://zerocreativity0.files.wordpress.com/2016/05/kotak-logo.jpg" alt="" /></> 
               <><input type="radio"  /><img src="https://assets.stickpng.com/images/627ccea41b2e263b45696abd.png" alt="" /></>
              </div>
              <button className="pbtn1">Make Your Payment</button>
            </div>
          )}
               {upi && (
            <div className="por1">
              <small>1.Select your UPI</small>
              <div className="fi1">
             <> <input type="radio"/><img src="https://www.nicepng.com/png/detail/769-7692873_download-google-pay-logo-png.png" alt="" /></>
             <> <input type="radio"/><img src="https://lh3.googleusercontent.com/YLBB2nnOjPAMc42Bf37ihHWws3e5d92EKhbPeknGcvQ-F67Vg_0wxbpHiNOx8LH24ZY=s180" alt="" /></>  
               <><input type="radio"  /><h5>Other UPI</h5></> 
              </div>
              <small>2.Enter your UPI ID</small>
              <div className="fi1">
                <><input type="text" placeholder="Enter your UPI ID" /></>
               
              
              </div>
              <button className="pbtn1">Make Your Payment</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
