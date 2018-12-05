import React from "react";
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Error = () =>{
  return(
    <div className="Error__container">
      <h1>Something went wrong. Try to reload page later.</h1>
      <div className="Error__container-items">
          <div id="errItem1" className="Error__container-items--item Error__container-items--item--1"></div>
          <div id="errItem2" className="Error__container-items--item Error__container-items--item--2"></div>
          <div id="errItem3" className="Error__container-items--item Error__container-items--item--3"></div>
          <div id="errItem4" className="Error__container-items--item Error__container-items--item--4"></div>
          <div id="errItem5" className="Error__container-items--item Error__container-items--item--5"></div>
          <div id="errItem6" className="Error__container-items--item Error__container-items--item--6"></div>
          <div id="errItem7" className="Error__container-items--item Error__container-items--item--7"></div>
          <div id="errItem8" className="Error__container-items--item Error__container-items--item--8"></div>
          <div id="errItem9" className="Error__container-items--item Error__container-items--item--9"></div>
          <div id="errItem10" className="Error__container-items--item Error__container-items--item--10"></div>
      </div>
      <Link className="err_back" to="/menu">Get back to main menu</Link>
    </div>
  )
}

export default Error;
