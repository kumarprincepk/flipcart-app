import React from 'react'
import '../style/Navstyle.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import NavbarTwoTippy from './NavbarTwoTippy';
import WomensList from './WomensList';

export default function NavbarAllPage() {
  return (
    <>
        <div class="container d ">
  <div class="card-body">
        <div className="d-flex flex-row bd-highlight">
    <div className="tex">
    <Tippy 
                 content={<NavbarTwoTippy></NavbarTwoTippy>}
                //  content={<MenTopList></MenTopList>}
                 interactive={true}
                 placement='bottom'
                 theme ="light" 
                 offset={[-50,40]}
                >
        <p><b>Eletronics </b> &nbsp; &or;</p>
        </Tippy>
    </div>
    <div className="tex">
    <Tippy 
                 content={<NavbarTwoTippy></NavbarTwoTippy>}
                //  content={<MenTopList></MenTopList>}
                 interactive={true}
                 placement='bottom'
                 theme ="light" 
                 offset={[-50,40]}
                >
        <p><b>TVs & Appliances</b> &nbsp; &or;</p>
        </Tippy>
    </div>
    <div className="tex">
    <Tippy 
                 content={<NavbarTwoTippy></NavbarTwoTippy>}
                //  content={<MenTopList></MenTopList>}
                 interactive={true}
                 placement='bottom'
                 theme ="light" 
                 offset={[-50,40]}
                >
        <p><b>Men </b> &nbsp; &or;</p>
        </Tippy>
    </div>
    <div className="tex">
    <Tippy
              content={<WomensList></WomensList>}
              interactive={true}
              placement='right'
              theme='light'
              offset={[50,10]}
            >
        <p><b>Women</b> &nbsp; &or;</p>
        </Tippy>
    </div>
    <div className="tex">
    <Tippy 
                 content={<NavbarTwoTippy></NavbarTwoTippy>}
                //  content={<MenTopList></MenTopList>}
                 interactive={true}
                 placement='bottom'
                 theme ="light" 
                 offset={[-50,40]}
                >
        <p><b>Baby & Kids </b> &nbsp; &or;</p>
        </Tippy>
    </div>
    <div className="tex">
    <Tippy 
                 content={<NavbarTwoTippy></NavbarTwoTippy>}
                //  content={<MenTopList></MenTopList>}
                 interactive={true}
                 placement='bottom'
                 theme ="light" 
                 offset={[-50,40]}
                >
        <p><b>Home & Furniture</b> &nbsp; &or;</p>
        </Tippy>
    </div>
    <div className="tex">
    <Tippy 
                 content={<NavbarTwoTippy></NavbarTwoTippy>}
                //  content={<MenTopList></MenTopList>}
                 interactive={true}
                 placement='bottom'
                 theme ="light" 
                 offset={[-50,40]}
                >
        <p><b>Sports,Books & More</b> &nbsp; &or;</p>
        </Tippy>
    </div>
    <div className="tex">
        <p><b>Flights</b></p>
    </div>
    <div className="tex">
        <p><b>Offer Zone</b></p>
    </div>
    </div>
  </div>
</div>
    </>
  )
}
