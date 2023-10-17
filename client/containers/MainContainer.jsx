/**
 * ************************************
 *
 * @module  MainContainer
 * @author  LT & MK
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React from 'react';
// import { useSelector } from 'react-redux';
// import from child components...
import birdSearch from '../components/birdSearch';



const MainContainer = () => {
  // add pertinent state here

  return(
    <div className="container">
      <div className="outerBox">
        <h1 id="header">Bird Watch</h1>
        { /* Start adding components here... */ }
        <birdSearch/>
      </div>
    </div>
  );
}

export default MainContainer;
