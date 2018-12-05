import React from 'react';

const Success = () =>{
  return(
    <div class="popup">
      <div class="popup-container">
        <h1 class="success">SUCCESS!</h1>
        <h2 class="success">
          Congratulations! You successfully reached the point of joint.
          New neuron connection was established.
          You are getting closer to unlocking the quantum memory. Keep it up, citizen!
        </h2>
        <div class="score-container">
          <h1>QUANTUM MEMORY</h1>
          <p>Mistakes: 2</p>
          <p>Your score: 15500</p>
          <p>Yout overall score: 550 000</p>
          <p>Yout time: 00:05:12</p>
          <p>Your rating: S+</p>
        </div>
        <div class="choice-contaner">
          <h1>Continue?</h1>
          <div class="yn">
            <a href="#" class="choice">Yes</a>
            <p>|</p>
            <a href="#" class="choice">No</a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Wrong = () =>{
  return(
    <div class="popup">
      <div class="popup-container">
        <h1>! WRONG !</h1>
        <h2>The memory was unchained. Be careful! Frequent missteps will inevitebally lead to erasing your persnality!</h2>
        <div class="score-container">
          <p>Your score: 11256</p>
          <p>Yout time: 00:05:12</p>
        </div>
        <div class="choice-contaner">
          <h1>Continue?</h1>
          <div class="yn">
            <a href="#" class="choice">Yes</a>
            <p>|</p>
            <a href="#" class="choice">No</a>
          </div>
        </div>
      </div>
    </div>

  )
}

const Unlocked = () =>{
  return(
    <div class="popup">
      <div class="popup-container congratulations">
        <h1 class="success">CONGRATULATIONS!</h1>
        <p>YOU UNLOCKED A NEW MEMORY</p>
        <div class="links-container">
          <a href="#">Read the memory</a>
          <a href="#">Start a new game</a>
          <a href="#">Main menu</a>
        </div>
      </div>
    </div>
  )
}

const Exit = () =>{
  return(
    <div class="popup">
      <div class="popup-container exit">
         <p>your neuron connection will be unchained now</p>
         <h1>
           THANK YOU FOR USING MEMO TERMINAL  V 1.0
         </h1>
         <h2>MEMO</h2>
      </div>
    </div>
  )
}

const Restart = () =>{
  return(
    <div class="popup">
      <div class="popup-container restarting">
         <h1>TERMINAL WILL RESTART IN</h1>
         <h2> ...3</h1>
         <div class="loads-container">
           <p>> creating new routes</p>
           <p>> establishin neuron-connections</p>
           <p>> starting quantum server</p>
           <p>> dispatching data</p>
         </div>
      </div>
    </div>
  )
}

const Sure = () =>{
  return(
    <div className="popup">Sure</div>
  )
}

const WillStart = () =>{
  return(
    <div className="popup">Will Start Info</div>
  )
}

const Countdown = () =>{
  return(
    <div className="popup">Start in 3...2...1</div>
  )
}
