import React from 'react';
import certImage from '../../assets/certi.png';

import './style.css';
export default function Header() {

 return (
  <div className="header_container">
   <input type="checkbox" id="check" />

   <header>
    <label for="check" >\
    <i class="fas fa-bars" id="sidebar_btn"></i>
    </label>
    <div className="left_area">
     <h3> Node-<span>red</span></h3>
    </div>
    <div className="rig_area">
     <a href=" " className="logout_btn">Logout</a>
    </div>
   </header>

   <div className="sidebar">
    <center>
     <img src={certImage} className="menu_image" alt="imgTopo" />
    </center>
    <div className="itemContainer">
     <a href=" " ><i className="fas fa-desktop"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-cogs"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-table"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-th"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-info-circle"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
     <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
    </div>
   </div>
  </div>
 )
};