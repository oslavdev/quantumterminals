import React, {Component} from 'react';
import {TweenMax, Power1, TimelineLite} from "gsap/TweenMax";
import { Link } from 'react-router-dom';
import $ from 'jquery';

import Header from '../../../components/Header/header';
import Dots from '../../../components/Dots/dots';


class White extends Component{


  componentDidMount(){

    $(".list__item").hover(function(){
      $(this).toggleClass("selected");
      $(this).toggleClass("list__item-active");
      $(".btn2", this).toggleClass("btn2-active");
      $(".btn1", this).toggleClass("btn1-active");
    })

    var wrapper = document.querySelector('#root'),
      layerOne = document.querySelector('.logo--1'),
      layerTwo = document.querySelector('.logo--2');

      wrapper.addEventListener('mousemove',function(e){
        var pageX = e.clientX,
            pageY = e.clientY;
        layerOne.style.webkitTransform = 'translateX(' + pageX/100 + '%) translateY(' + pageY/100 + '%)';
        layerOne.style.transform = 'translateX(' + pageX/100 + '%) translateY(' + pageY/100 + '%)';
        layerTwo.style.webkitTransform = 'translateX(' + pageX/150 + '%) translateY(' + pageY/250 + '%)';
        layerTwo.style.transform = 'translateX(' + pageX/150 + '%) translateY(' + pageY/250 + '%)';
        wrapper.style = 'background-position:'+ pageX/200 +'px center';
      });


  }

  onHover =()=> {
      document.getElementById("btn-e").classList.toggle("skew");
      document.getElementById("path1").classList.toggle("path1-t");
      document.getElementById("path2").classList.toggle("path2-t");
     }


  render(){
    return(
      <div id="white" className="white">
        <div className="menu-cont">
            <div id="logo" className="logo-cont">
              <Link id="logo" to="/" className="logo__container">
                <img src="images/logo-1.png" alt="Logo" className="logo logo--1" />
                <img src="images/logo-2.png" alt="Logo" className="logo logo--2" />
              </Link>
            </div>
            <div id="btnCon" className="btn-container">
              <ul className="list">

                <li id="btn1">
                  <div className="list__item">
                    <Link className="link" to="/login">LOGIN</Link>
                      <div className="btn btn1"></div>
                      <div className="btn btn2"></div>
                  </div>
                </li>

                <li id="btn2">
                  <div className="list__item">
                    <Link className="link" to="/register">SIGN UP</Link>
                    <div className="btn btn1"></div>
                    <div className="btn btn2"></div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        <Dots/>
      </div>
    )
  }

}

export default White;
