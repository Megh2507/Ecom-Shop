import React from 'react'
import '../styles/navbar.css'
import {Link} from 'react-router-dom'
import data from '../data/data'

const CartNavbar = () => {
    return (
        <>
            <div className="nav">
                <div className="logo" id='LogoBx'>
                    <Link to="/" id='logo'> <img src={data.logo} alt="Not" id='logoImg' /></Link>
                </div>
                    <a className='navlinks' href={`/miphones`}>Xiaomi Phones</a>
                    <a className='navlinks' href={`/redmiphones`}>Redmi Phones</a>
                    <a className='navlinks' href={`/tv`}>TV</a>
                    <a className='navlinks' href={`/laptops`}>Laptops & Tablets</a>
                    <a className='navlinks' href={`/lifestyle`}>Fitness</a>
                    <a className='navlinks' href={`/home`}>Home</a>
                    <a className='navlinks' href={`/audio`}>Audio</a>
               
                <a className='navlinks' href={`/audio`}>
                    <button className='signup-btn'>Sign out</button>
                </a>
            </div>
        </>
    )
}

export default CartNavbar
