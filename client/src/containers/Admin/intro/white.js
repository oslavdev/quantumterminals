import React, {Component} from 'react';
import {TweenMax, Power1, TimelineLite} from "gsap/TweenMax";
import { Link } from 'react-router-dom';
import $ from 'jquery';

import Header from '../../../components/Header/header';
import Dots from '../../../components/Dots/dots';


class White extends Component{


  componentDidMount(){

    var hover = $("#btn2Hover")[0];
    var click = $("#btn2Click")[0];

      $(".list__item").mouseenter(function() {
        hover.play();
      });

      $(".list__item").click(function() {
        click.play();
      });

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
        <audio id="btn2Hover">
          <source src="soundFX/btn2Hover.mp3"></source>
          <source src="soundFX/btn2Hover.ogg"></source>
          Your browser isn't invited for super fun audio time.
        </audio>

        <audio id="btn2Click">
          <source src="soundFX/button2Click.mp3"></source>
          <source src="soundFX/button2Click.ogg"></source>
          Your browser isn't invited for super fun audio time.
        </audio>
        <div className="menu-cont">
            <div id="logo" className="logo-cont">
              <Header/>
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
