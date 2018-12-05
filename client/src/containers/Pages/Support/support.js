import React from 'react';

import Header from '../../../components/Header/header';
import Burger from '../../../components/Burger/burger';
import Decor from '../../../components/Decor/decor';
import Dots from '../../../components/Dots/dots';

const Support = () =>{
  return(
    <div className="Credits">
      <Header/>
      <Decor/>
      <Burger/>

      <div class="support-container">
        <div class="support-text">
          <p>IF YOU LIKED THE GAME, PLEASE SUPPORT ME ON KO-FI.
  IT ISE VERY IMPORTANT FOR ME TO BE ABLE CONTINUE CREATING NEW GAMES AND IMPROVING THIS ONE. EVEN CREATING SUCH A SIMPLE PROJECT REQUIRES A LOT OF TIME AND KNOWLEDGE.</p>
          <p>GETTING SUPPORT HELPS ME TO BE STAY MOTIVATED AND LETTING ME KNOW THAT SOMEONE APPRECIATE WHAT I DO.</p>
          <p>IT IS NOT A BIG DEAL, JUST A SMALL KO-FI!</p>
        </div>
        <div class="btn btn--support">SUPPORT</div>
        <div class="upcoming">
          <h1>Projects I am currently working on:</h1>
          <p>API LASTFM GAME</p>
          <p>MEMO 3D FOR ANDROID</p>
          <p>SURREAL VISUAL NOVEL/RPG</p>
          <p>ALCHEMIST SIMULATOR</p>
        </div>
      </div>
      <Dots/>
    </div>
  )
}

export default Support;
