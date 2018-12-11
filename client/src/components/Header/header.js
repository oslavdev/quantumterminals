import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  componentDidMount(){

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

  render() {
    return (
      <header>
        <div id="logo"  className="logo__container">
          <img src="images/Logo-1.png" alt="Logo" className="logo logo--1" />
          <img src="images/Logo-2.png" alt="Logo" className="logo logo--2" />
        </div>
      </header>
    )
  }
}

export default Header;
