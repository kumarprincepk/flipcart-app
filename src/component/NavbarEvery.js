import React from 'react'
import LoginTippy from '../page/LoginTippy';
import MoreTippy from '../page/MoreTippy';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import '../style/Navstyle.css';
import '../style/LoginTippy.css'

export default function NavbarEvery() {
  return (
    <>
        <div className="header sticky-top">
            <div className="name">
                <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
                <div className="name1"> 
                <div className="un">
                  <span className='explo'>Explore</span>
                  <span className='plus'> Plus</span>
                  <span><img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" width="10"/></span>
                  </div>
                </div>
            </div>
            <div className="inputs">
              <input type="text" placeholder='Search for products, brands and more'/>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="login">
            <Tippy content={<LoginTippy></LoginTippy>}
             theme ="light"
            interactive={true}
            offset={[5,18]}>
            <button>Login</button>
            </Tippy>
            </div>
            <div className="more">
            <Tippy content={<MoreTippy></MoreTippy>}
            interactive={true}
            theme ="light"
            offset={[5,18]}
            >
            <span>More &nbsp;</span> 
            </Tippy>
            <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="cart"><i className="fa-solid fa-cart-shopping"></i><p>&nbsp; Cart</p></div>
        </div>
    </>
  )
}
