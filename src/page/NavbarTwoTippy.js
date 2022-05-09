import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import '../style/NavbarTwoTippy.css';
import MenTopList from './MenTopList';
import MenBottomsList from './MenBottomsList';
import WomensList from './WomensList';

export default function NavbarTwoTippy() {
  return (
   <>
       <div className="fash">
           <div className="fash1 word">
           <Tippy 
           content={<MenTopList></MenTopList>}
           interactive={true}
           placement='right'
           theme ="light" 
           offset={[50,10]}
            >
              <p>Men's Top Wear</p>
              </Tippy>
           </div>
           <div className="fash2 word">
           <Tippy 
             content={<MenBottomsList></MenBottomsList>}
             interactive={true}
             placement='right'
             theme='light'
             offset={[50,10]}
           >
             <p>Men's Bottom Wear</p>
             </Tippy>
             </div>
            <div className="fash3 word">
            <Tippy
              content={<WomensList></WomensList>}
              interactive={true}
              placement='right'
              theme='light'
              offset={[50,10]}
            >
             <p>Women Ethnic</p>
             </Tippy>
             </div>
           
           <div className="fash4 word">
           <Tippy 
             content={<MenBottomsList></MenBottomsList>}
             interactive={true}
             placement='right'
             theme='light'
             offset={[50,10]}
           >
             <p>Women Western</p>
             </Tippy>
           </div>
           <div className="fash5 word">
           <Tippy 
             content={<MenBottomsList></MenBottomsList>}
             interactive={true}
             placement='right'
             theme='light'
             offset={[50,10]}
           >
             <p>Men Footwear</p>
             </Tippy>
           </div>
           <div className="fash6 word">
           <Tippy 
             content={<MenBottomsList></MenBottomsList>}
             interactive={true}
             placement='right'
             theme='light'
             offset={[50,10]}
           >
             <p>Watches and Accessories</p>
             </Tippy>
           </div>
           <div className="fash7 word">
           <Tippy 
             content={<MenBottomsList></MenBottomsList>}
             interactive={true}
             placement='right'
             theme='light'
             offset={[5,10]}
           >
             <p>Bags,&nbsp;Suitcases&nbsp;&&nbsp;Luggage</p>
             </Tippy>
           </div>
           <div className="fash8 word">
             <p>Kids</p>
           </div>
           <div className="fash9 word">
             <p>Essentials</p>
           </div>
           <div className="fash10 word">
             <p>Winter</p>
           </div>
           <div className="fash11 word">
             <p>Women Footwear</p>
           </div>
       </div>
      
   </>
  )
}
