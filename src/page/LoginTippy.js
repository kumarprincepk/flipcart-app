import React from 'react'
import '../style/LoginTippy.css'
import { Link } from 'react-router-dom';

export default function LoginTippy() {
  return (
    <>
     <div className="logint">
        <div className="login1 in">
            <p><b>New customer?</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='sign'><b>Sign Up</b></span></p>
        </div>
        <hr />
        <div className="login2 in">
        <i class="fa-solid fa-circle-user"></i>
        <p>My Profile</p>
        </div>
        <hr />
        <div className="login3 in">
        <span><img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" width="10"/></span>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flipkart Plus Zone</p>
        </div>
        <hr />
        <Link to="order">
        <div className="login4 in">
        <i class="fa-solid fa-box-open"></i>
        <p>Orders</p>
        </div>
        </Link>
        <hr />
        <div className="login5 in">
        <i class="fa-solid fa-heart"></i>
        <p>Wishlist</p>
        </div>
        <hr />
        <div className="login6 in">
        <i class="fa-solid fa-box-archive"></i>
        <p>Reward</p>
        </div>
        <hr />
        <div className="login7 in">
        <i class="fa-solid fa-gifts"></i>
        <p>Gift Card</p>
        </div>
        </div>
    </>
  )
}
