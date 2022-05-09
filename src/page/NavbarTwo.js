import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import '../style/NavbarTwo.css';
import NavbarTwoTippy from './NavbarTwoTippy';
import MenTopList from './MenTopList';

export default function NavbarTwo() {
  return (
    <>
        <div className="container d-flex my-3">
            <div className="store1 mx-5">
                <button className='img1 int'>
                    <img src="	https://flipkartclonereactquery.herokuapp.com/static/media/topoffers.3242620f.png" alt="store image" width="60" />
                    <p>Top Offer</p>
                </button>
            </div>
            <div className="store2 mx-3 int">
            <button className='img2'>
                    <img src="https://flipkartclonereactquery.herokuapp.com/static/media/grocery.b5d9020e.png"  alt="store image" width="60" />
                    <p>Grocery</p>
                </button>
            </div>
            <div className="store3 mx-5 int">
            <button className='img3'>
                    <img src="	https://flipkartclonereactquery.herokuapp.com/static/media/mobiles.dcddf236.png" alt="store image" width="60" />
                    <p>Mobile</p>
                </button>
            </div>
            <div className="store4 mx-3 int">
            <button className='img4'>
                <Tippy 
                 content={<NavbarTwoTippy></NavbarTwoTippy>}
                //  content={<MenTopList></MenTopList>}
                 interactive={true}
                 placement='bottom'
                 theme ="light" 
                 offset={[-50,40]}
                >
                    <img src="	https://flipkartclonereactquery.herokuapp.com/static/media/fashion.4c6a7a39.png" alt="store image" width="60" /></Tippy>
                    <p>Fashion <b>&or;</b></p>
                </button>
            </div>
            <div className="store5 mx-5 int">
            <button className='img5'>
                  <Tippy content={<NavbarTwoTippy></NavbarTwoTippy>}
                  interactive={true}
                  placement='bottom'
                  theme='light'
                  offset={[-50,40]}
                  >
                    <img src="	https://flipkartclonereactquery.herokuapp.com/static/media/electronics.10704dd6.png" width="60" /></Tippy>
                    <p>Electornics <b>&or;</b></p>
                </button>
            </div>
            <div className="store6 mx-3 int">
            <button className='img5'>
            <Tippy content={<NavbarTwoTippy></NavbarTwoTippy>}
                  interactive={true}
                  placement='bottom'
                  theme='light'
                  offset={[-50,40]}
                  >
                    <img src="https://flipkartclonereactquery.herokuapp.com/static/media/home.45af141c.png" width="60" /></Tippy>
                    <p>Home <b>&or;</b></p>
                </button>
            </div>
            <div className="store7 mx-5 int">
            <button className='img7'>
            <Tippy content={<NavbarTwoTippy></NavbarTwoTippy>}
                  interactive={true}
                  placement='bottom'
                  theme='light'
                  offset={[-50,40]}
                  >
                    <img src="https://flipkartclonereactquery.herokuapp.com/static/media/appliances.edbc6228.png" alt="store image" width="60" /></Tippy>
                    <p>Appliances <b>&or;</b></p>
                </button>
            </div>
            <div className="store8 mx-3 int">
            <button className='img8'>
                    <img src="data:image/png;base64,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" alt="store image" width="60" />
                    <p>Travel</p>
                </button>
            </div>
            <div className="store9 mx-4 int">
            <button className='img9'>
                    <img src="	https://flipkartclonereactquery.herokuapp.com/static/media/beauty.840c8fc5.png" alt="store image" width="60" />
                    <p>Beauty,Tous & More <b>&or;</b></p>
                </button>
                </div>
        </div>
    </>
  )
}
