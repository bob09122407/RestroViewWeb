import React from 'react';

import  SubHeading  from './SubHeading.jsx';
import  MenuItem  from './items.jsx';
import { data, images } from '../../constants';
import './menuitem.css';

const SpecialMenu = ({special_daymenu}) => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Hello" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
        {special_daymenu
            .filter((item) => item.category === 'First')
            .map((wine, index) => (
              <MenuItem
                key={wine.itemName + index}
                title={wine.itemName}
                price={wine.price}
                tags={wine.description}
                imageSrc={wine.img.url}
              />
            ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
        {special_daymenu
            .filter((item) => item.category === 'Second')
            .map((cocktail, index) => (
              <MenuItem
                key={cocktail.itemName + index}
                title={cocktail.itemName}
                price={cocktail.price}
                tags={cocktail.description}
                imageSrc={cocktail.img.url}
              />
            ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15, zIndex:2 }}>
      <button type="button" className="custom__button">View More</button>
      {/* <span className='custom__button'>View More</span> */}
    </div>
  </div>
);

export default SpecialMenu;
