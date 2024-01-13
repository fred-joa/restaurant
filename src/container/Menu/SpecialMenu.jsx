import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits your palatte"></SubHeading>
      <p className='headtext__cormorant'>Today's Specials</p>

    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
        <div className='app_specialMenu_menu_items'>
          {data.wines.map((wine, index)=>(
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}  ></MenuItem>
           
          ))
          }
        </div>
      </div>
      <div className='app___specialMenu-menu_img'>
          <img src={images.menu}></img>
      </div>
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
        <div className='app_specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index)=>(
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}  ></MenuItem>
          ))
          }
        </div>
      </div>
    </div>
    <div style={{MarginTop:'15px'}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
