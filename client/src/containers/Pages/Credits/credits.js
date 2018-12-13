import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/header';
import Decor from '../../../components/Decor/decor';
import Dots from '../../../components/Dots/dots';

const Credits = () =>{
  var final = document.getElementById("Final");
  final.loop = true;
  final.pause();
  var song1 = document.getElementById("Song1");
  song1.loop = true;
  song1.pause();
  var song2 = document.getElementById("Song2");
  song2.loop = true;
  song2.pause();
  var song3 = document.getElementById("Song3");
  song3.loop = true;
  song3.pause();
  var song4 = document.getElementById("Song4");
  song4.loop = true;
  song4.pause();
  var standby = document.getElementById("Standby");
  standby.loop = true;
  standby.pause();
  var glitch = document.getElementById("glitch");
  glitch.loop = true;
  glitch.pause();
  var noise = document.getElementById("noise");
  noise.loop = true;
  noise.pause();

  var intro = document.getElementById("intro");
  if (intro.paused){
    intro.play();
  }
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
