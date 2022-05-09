import React from 'react'


export default function ProductApiSwiper({item}) {
    const {image,price,category,title} = item;


  return (
        <>
        <div>
        <div className="card">
        <img src={image} className="card-img-top" />
        <div className="card-body" style={{textDecoration: 'none'}}>
          <p className="card-text" style={{textDecoration: 'none'}}>
            {price*70.3} <br /> <span style={{color:"green"}}>{title.substring(0,23)+'...'}</span><br /><span style={{color:"gray"}}>{category}</span>
          </p>
        </div>
      </div>
            </div>
        </>
    )
}
