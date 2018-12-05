import React from 'react';
import Link from 'react-router';

const Menu = () =>{
  return(
    <div class="modal-container">


      <div class="decor">
        <div class="decor__line"></div>
        <div class="decor__line"></div>
        <div class="decor__line"></div>
        <div class="decor__line"></div>
      </div>


      <div class="global-container">

        <div class="ModalLogo-container">
          <div class="logo-flex">
            <h1>MEMO TERMINALS V1.0</h1>
            <p>unlock your quantum memory</p>
            <h2>Q</h2>
          </div>
        </div>

        <div class="bg-text-container">
          <h1>MEMO</h1>
        </div>

        <div class="adress-container">
          <p>
            CS, Neuronopolis
            Ark str. 321, ap. 33<br>
            created by Rijel Ek
            <a class="social-sup" href="#"> Twitter </a>
            <a class="social-sup" href="#"> Ko-fi</a>
          </p>
        </div>

        <div class="menuelements-container">
          <ul>
            <li><a href="#"><span>01</span> Resume</a></li>
            <li><a href="#"><span>02</span> Main menu</a></li>
            <li><a href="#"><span>03</span> Start the new game</a></li>
            <li><a href="#"><span>04</span> My score</a></li>
            <li><a href="#"><span>05</span> Leaderboards</a></li>
            <li><a href="#"><span>06</span> Tutorial</a></li>
            <li><a href="#"><span>07</span> Support</a></li>
            <li><a href="#"><span>08</span> Credits</a></li>
            <li><a href="#"><span>09</span> Submit your memo</a></li>
            <li><a href="#"><span style="opacity:0">10</span> Log out</a></li>
          </ul>
        </div>

        <div class="close-grid">
          <div class="close-container">
            <a href="#">close</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Menu;
