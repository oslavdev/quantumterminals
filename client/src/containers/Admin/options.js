import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUsers, userRegister } from '../../actions';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/header';
import Decor from '../../components/Decor/decor';


class Options extends PureComponent {
  render() {
    return(
      <div className="options-container">
      <Decor/>
      <Header/>
        <div className="login">
          <div className="login__mail">
            <Link to="/login" className="btn btn--auth">Log In</Link>
            <Link to="/register" className="btn btn--auth">Sign Up</Link>
            <p>or</p>
          </div>
          <div className="border"></div>
          <div className="login__social">
            <a href="#"  className="btn btn--social btn--twitter"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#"  className="btn btn--social btn--facebook"><i className="fab fa-facebook-f"></i> Facebook</a>
            <a href="#"  className="btn btn--social btn--gmail"><i className="far fa-envelope"></i> Gmail</a>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(Options)
