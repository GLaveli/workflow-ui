import React, { useEffect } from 'react';
import api from '../../services/api';

import './style.css';

import Header from '../../components/header';
import Bars from '../../components/chart/bars'
import Lines from '../../components/chart/lines'
import Pie from '../../components/chart/pie'

export default function Home() {

 let user_id = 1;
 const email = 'teste@certi.com'

 useEffect(() => {
  api.get('/api', {
   headers: {
    user_id,
    email
   }
  }).then(Response => {
   console.log(Response.data);

  });
 }, [])

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
       <Pie />
      </div>
     </div>
    </section>

   </div>
  </>
 )
};