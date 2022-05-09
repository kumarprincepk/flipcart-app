import React from 'react'
import f1 from '../asset/f1.svg';
import f2 from '../asset/f2.svg';
import f3 from '../asset/f3.svg';
import f4 from '../asset/f4.svg';
import f10  from '../asset/f10.svg';
import '../style/Footer.css';

export default function Footer() {
  return (
    <>
        <div>
            <footer className="footer">
                <div className="flex space-btw d-flex">
                
                <ul className='my-5'>
                    <h4>ABOUT</h4>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Flipkart Stories</li>
                    <li>Press</li>
                    <li>Flipkart Wholesale</li>
                </ul>

                <ul className='my-5'>
                    <h4>HELP</h4>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQ</li>
                    <li>Report Infringement</li>
                </ul>

                <ul className='my-5'>
                    <h4>POLICY</h4>
                    <li>Return Policy</li>
                    <li>Terms Of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                    <li>EPR Compliance</li>
                </ul>

                <ul className='my-5'>
                    <h4>SOCIAL</h4>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>YouTube</li>
                </ul>
                <div className='vertical'></div>
                <div className='d-flex justify-content-around px-5 line'>
                <ul className='my-5 px-5'>
                    <h4>Mail Us</h4>
                    <li>Flipkart Internet Private Limited</li>
                    <li>Building Alyssa, Begonia &</li>
                    <li>Clove Embassy Tech Village,</li>
                    <li>Outer Ring Road, Devarabeesanahalli Village,</li>
                    <li>Bengaluru, 560103,</li>
                    <li>Karnataka, India</li>
                </ul>

                <ul className='my-5'>
                    <h4>Registered Office Address:</h4>
                    <li>Flipkart Internet Private Limited</li>
                    <li>Building Alyssa, Begonia &</li>
                    <li>Clove Embassy Tech Village,</li>
                    <li>Outer Ring Road, Devarabeesanahalli Village,</li>
                    <li>Bengaluru, 560103,</li>
                    <li>Karnataka, India</li>
                    <li>CIN : U51109KA2012PTC066107</li>
                    <li>Telephone: 1800 208 9898</li>
                </ul>
                </div>
            </div>
            <hr />
            <div className='d-flex justify-content-around'>
            <ul className="d-flex justify-content-between alin">
                <li><img src={f1}/> <span>Sell on Flipkart</span></li>
                <li><img src={f2}/> <span>Advertise</span></li>
                <li><img src={f3}/> <span>Gifts Cards</span></li>
                <li><img src={f4}/> <span>Help Center</span></li>
                <li>© 2007-2022 Flipkart.com</li>
                <li><img src={f10}/></li>
            </ul>
            </div>
            </footer>
        </div>
    </>
  )
}


