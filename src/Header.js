import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from "./Stateprovider";
import Login from './Login';
import './Header.css'

function Header() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='header'>
    <Link to = '/'>
    <img className='header_logo' src='https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578'></img>

    </Link>
    
    
    <div className='header_search'>
        <input className='header_search_input' type = "text"></input>
        <img src = 'https://cdn-icons-png.flaticon.com/512/3917/3917754.png' className='header_search_icon'/>
    </div>
    <div className='header_nav'>
        <Link to='/login'>
        
        <div className='header_nav_option'>
            <span className='header_option_line1'>hello guest</span>
            <span className='header_option_line2'>sign in</span>
        </div>
        </Link>
        <div className='header_nav_option'>
            <span className='header_option_line1'>returns</span>
            <span className='header_option_line2'>orders</span>
            </div>
        <div className='header_nav_option'>
            <span className='header_option_line1'>your</span>
            <span className='header_option_line2'>prime</span>
        </div>
        <Link to = '/checkout'>
        <div className='header_basket_option'>
        <i class="fa-regular fa-cart-shopping"></i>
            <span className='header_option_line2'>{basket.length}</span>
        </div>
        </Link>
        
    </div>
    </div>
  )
}

export default Header