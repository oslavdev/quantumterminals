import React from 'react';
import axios from 'axios';

import Dots from '../../components/Dots/dots';

const Logout = (props) => {

  let request = axios.get(`/api/logout`)
      .then(request =>{
        setTimeout(()=>{
          props.history.push('/')
        }, 2000)
      })

  return (
    <div className="logout_container">
      <h1>QUANTUM TERMINAL IS CLOSING DOWN. SEE YOU NEXT TIME.</h1>
      <h1>AND REMEMBER: KEEP YOUR MIND CLEAN!</h1>
      <Dots/>
    </div>
  );
};

export default Logout;
