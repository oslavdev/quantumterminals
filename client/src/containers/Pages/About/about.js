import React, {Component} from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import $ from 'jquery';
import { Link } from 'react-router-dom';

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
  }


  render(){
    return(
      <div className="G-wrapper">
        <div className="menu__container">
          <Header/>
          <Decor/>
          <Dots/>
          About
        </div>
      </div>
    )
  }
}

export default About;
