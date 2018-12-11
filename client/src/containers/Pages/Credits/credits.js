import React from 'react';
import { Link } from 'react-router-dom';
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
          <p>Roka Lazado for support</p>
          <h1>Music</h1>
          <p>DJ Counteract - Easter Island </p>
          <p>Eris Wheel - Delta </p>
          <p>Eris Wheel - Islands </p>
          <p>Daniel Gooding - Dark Future Music Collection (Unity Store)</p>
          <h1>Sound FX</h1>
          <p>BIG5AUDIO_UI & UX</p>
          <div  className="list__item">
            <Link to="/menu" className="link">BACK</Link>
            <div className="btn btn1"></div>
            <div className="btn btn2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credits;
