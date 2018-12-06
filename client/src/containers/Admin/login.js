import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import $ from 'jquery';

import Header from '../../components/Header/header';
import Decor from '../../components/Decor/decor';
import Dots from '../../components/Dots/dots';


class Login extends Component {
  state = {
      email:'',
      password:'',
      error:'',
      success:false
  }

  handleInputEmail = (event) => {
      this.setState({email:event.target.value})
  }
  handleInputPassword = (event) => {
      this.setState({password:event.target.value})
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.user.login.isAuth){
          this.props.history.push('/menu')
      }
  }

  componentDidMount(){
    $(".list__item").hover(function(){
      $(this).toggleClass("selected");
      $(this).toggleClass("list__item-active");
      $(".btn2", this).toggleClass("btn2-active");
      $(".btn1", this).toggleClass("btn1-active");
    })
  }


  submitForm = (e) =>{
      e.preventDefault();
      this.props.dispatch(loginUser(this.state))
  }

  render() {
    let user = this.props.user;

    return (
      <div className="login-container">
          <Decor/>
          <div class="form__container">
          <Header/>
            <form onSubmit={this.submitForm} class="form">
              <div className="form__group">
                <label for="email" class="form__label">E-mail</label>
                <input
                  id="email"
                  type="email"
                  className="form__input"
                  placeholder="E-mail"
                  value={this.state.email}
                  onChange={this.handleInputEmail}
                   required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                  />
              </div>

              <div class="form__group">
                <label for="password" className="form__label">Password</label>
                <input
                id="password"
                type="password"
                className="form__input"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputPassword}
                min="7" required />
              </div>

              <ul className="list">

                <li id="btn1">
                  <div className="list__item">
                    <button type="submit" className="link">LOGIN</button>
                      <div className="btn btn1"></div>
                      <div className="btn btn2"></div>
                  </div>
                </li>

              </ul>

              <div className="error">
              {
                  user.login ?
                      <div>{user.login.message}</div>
                  :null
              }
              </div>

              <Link to="/register" className="have">Don't have an account?</Link>

            </form>
          </div>
          <Dots/>

        </div>
    )

  }
}

function mapStateToProps(state){
    return {
        user:state.user
    }
}


export default connect(mapStateToProps)(Login)
