import React from 'react'
import OrderSecondlist from '../page/OrderSecondlist';
import OrderFirst from '../page/OrderFirst';
import '../style/Order.css';
import NavbarEvery from '../component/NavbarEvery';
import Footer from '../page/Footer'
import NavbarAllPage from '../page/NavbarAllPage';

export default function Order() {
  return (
    <>
    <NavbarEvery/>
    <NavbarAllPage/>
    <div className='gh'>
    <OrderFirst/>
     <OrderSecondlist/>
     </div>
     <Footer/>
    </>
  )
}
