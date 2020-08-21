import React from 'react';
import './style.css';

import Header from '../../components/header';
import Bars from '../../components/chart/bars'
import Lines from '../../components/chart/lines'

export default function Home() {

 return (
  <>
   <Header />
   <div className="content">
    <section className="graph_area">
     <Lines />
    </section>

    <section className="card_area">

     <div className="card">
      <div className="cardheader">
       <span>Card 01</span>
      </div>
      <div className="cardBody">
       <Bars />
      </div>
     </div>

     <div className="card">
      <div className="cardheader">
       <span>Card 02</span>
      </div>
      <div className="cardBody">
       <Bars />
      </div>
     </div>

     <div className="card">
      <div className="cardheader">
       <span>Card 03</span>
      </div>
      <div className="cardBody">
       <Bars />
      </div>
     </div>
    </section>

   </div>
  </>
 )
};