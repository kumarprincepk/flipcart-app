import React from 'react'
import '../style/Order.css';

export default function OrderFirst() {
  return (
      <div >
      {/* className="bg-light" */}
      <p>Home &#8827; My Account &#8827; My Order</p>
    <div className="card ca" >
  
  <div className="card-body">
    <h2><b>Filters</b></h2>
    <h4><b>ORDER STATUS</b></h4>
    <div className="inpu">
      <div className="gi">
        <input type="checkbox" /><p>On the way</p>
        </div>
        <div className="gi">
        <input type="checkbox" /><p>Delivered</p>
        </div>
        <div className="gi">
        <input type="checkbox" /><p>Cancelled</p>
        </div>
        <div className="gi">
        <input type="checkbox" /><p>Returned</p>
        </div>
    </div>
    <h4><b>ORDER TIME</b></h4>
    <div className="inpu">
      <div className="gi">
        <input type="checkbox" /><p>Last 30 days</p>
        </div>
        <div className="gi">
        <input type="checkbox" /><p>2022</p>
        </div>
        <div className="gi">
        <input type="checkbox" /><p>2021</p>
        </div>
        <div className="gi">
        <input type="checkbox" /><p>2020</p>
        </div>
        <div className="gi">
        <input type="checkbox" /><p>2019</p>
        </div>
        <div className="gi">
        <input type="checkbox" /><p>Other</p>
        </div>
    </div>
  </div>
</div>
</div>
  )
}
