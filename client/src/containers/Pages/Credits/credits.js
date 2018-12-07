import React from 'react';

import Header from '../../../components/Header/header';
import Decor from '../../../components/Decor/decor';
import Dots from '../../../components/Dots/dots';

const Credits = () =>{
  return(
    <div className="Credits">
      <Decor/>
      <Dots/>
      <div className="Credits__wrapper">
        <div className="Credits__container">
          <h1>Created by</h1>
          <p>Rijel Ek</p>
          <h1>Special thanks to</h1>
          <p>Roka Lazado</p>
          <h1>Music by</h1>
          <p>Triangular</p>
          <div  onClick={()=>this.props.history.push("/info")} className="list__item">
            <p className="link">BACK</p>
            <div className="btn btn1"></div>
            <div className="btn btn2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credits;
