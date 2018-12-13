import React, {Component} from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import $ from 'jquery';
import { Link } from 'react-router-dom';
import 'simplebar';
import 'simplebar/dist/simplebar.css';

import Decor from '../../../components/Decor/decor';
import Header from '../../../components/Header/header';
import Dots from '../../../components/Dots/dots';


class About extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    $(".list__item").hover(function(){
      $(this).toggleClass("selected");
      $(this).toggleClass("list__item-active");
      $(".btn2", this).toggleClass("btn2-active");
      $(".btn1", this).toggleClass("btn1-active");
    })
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
  }


  render(){
    return(
      <div className="G-wrapper">
        <div className="menu__container">
          <Header/>
          <Decor/>
          <Dots/>
          <div data-simplebar className="about__container">
            <p>The game is still under construction. In beta version of Memo The Quantum Terminals you'll find the first puzzle that requires a good short term memory abilities to finish and first sneak peeks at the story. Full version will include: </p>
            <ul>
              <li>At least five more puzzles</li>
              <li>Multiplayer</li>
              <li>Extended story</li>
              <li>New mechanics: train and send agents around the world to collect more quantum memories shattered across the globe</li>
              <li>Illustrations</li>
              <li>And more</li>
            </ul>
            <p>If you want to help this happen you can support me on Patreon, but me a cup of Coffee or simply share this game with your friends. And remember; keep your mind clean citizen!</p>
          </div>
          <ul className="list">
            <li>
              <div className="list__item">
                <Link to="/info" className="link">BACK</Link>
                <div className="btn btn1"></div>
                <div className="btn btn2"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default About;
