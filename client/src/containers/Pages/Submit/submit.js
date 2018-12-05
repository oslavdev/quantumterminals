import React from 'react';

import Header from '../../../components/Header/header';
import Burger from '../../../components/Burger/burger';
import Decor from '../../../components/Decor/decor';

const Submit = () =>{
  return(
    <div className="Credits">
      <Header/>
      <Decor/>
      <Burger/>

      <div class="submit-container">
        <div class="submit-container__header">
          <h1>DONATE YOUR MEMO</h1>
          <p>Do you have a memory you wat to share? Don’t want to be gone forgotten?
            Upload your memory to our terminal. You will live forever in the minds of millions of people! Sounds exciting? Use the form below to upload your personal memories.
            Donate to the world-wide quantum space.
          </p>
          <p class="warning">Warning! Don’t forget to plug in your neuron-port to avoid loosing your personality!</p>
        </div>

        <form action="post" class="form form-memo">

          <div class="form__group">
            <label for="username" class="form__label">Username*</label>
            <input id="username" type="text" class="form__input" placeholder="Username" required/>
          </div>

          <div class="form__group">
            <label for="email" class="form__label">E-mail*</label>
            <input id="email" type="mail" class="form__input" placeholder="E-mail" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
          </div>

          <div class="form__group">
            <label for="message" class="form__label">Your memo:</label>
            <textarea id="message" type="message" class="form__input story" placeholder="Your memo" required />
          </div>

          <button class="submit">Submit</button>

        </form>
      </div>

    </div>
  )
}

export default Submit;
