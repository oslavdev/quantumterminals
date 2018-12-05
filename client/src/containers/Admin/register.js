import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers, userRegister } from '../../actions';

import Decor from '../../components/Decor/decor';
import Header from '../../components/Header/header';
import Dots from '../../components/Dots/dots';


class Register extends PureComponent {

    state ={

      userData: {
        name:'',
        lastname:'',
        email:'',
        password:'',
        error:'',
        score: '0',
        level: '1',
        wrong: '0',
        time: '0',
        difficulty: 'None',
        best: '0',
        firstStart: true
      }

    }

    componentWillMount(){
        this.props.dispatch(getUsers())
    }

    handleInput = (event, name) => {
      const newUserData = {
        ...this.state.userData
      }

      newUserData[name] = event.target.value

      this.setState({
        userData:newUserData
      })
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.user.register === false){
            this.setState({error:'Error,try again'})
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.setState({error:'Success! In 3 seconds you will be redirected to login screen'})

        this.props.dispatch(userRegister({
          ...this.state.userData,
          ownerId:this.props.user.login.id
        }))


        setTimeout(()=>{
          this.props.history.push('/login')
        }, 3000);

    }




    render() {

        let data = this.state
        return (
          <div class="form__container">
          <Decor/>
          <Header/>
            <form action="post" className="form" onSubmit={this.submitForm}>

              <div class="form__group">
                <label for="username" className="form__label">Username*</label>
                <input
                  id="username"
                  type="text"
                  className="form__input"
                  placeholder="Username"
                  value={data.userData.name}
                  onChange={(event)=>this.handleInput(event,"name")}
                required />
              </div>


              <div class="form__group">
                <label for="email" className="form__label">E-mail*</label>
                <input
                  id="email"
                  type="mail"
                  className="form__input"
                  placeholder="E-mail"
                  value={data.userData.email}
                  onChange={(event)=>this.handleInput(event,"email")}
                required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
              </div>

              <div class="form__group">
                <label for="password" className="form__label">Password*</label>
                <input
                  id="password"
                  type="password"
                  className="form__input"
                  placeholder="Password"
                  value={data.userData.password}
                  onChange={(event)=>this.handleInput(event,"password")}
                  min="7"
                required  />
              </div>

              <div className="form__group">
                <label for="confirmpassword" class="form__label">Confirm Password*</label>
                <input
                  id="confirm_password"
                  type="password"
                  class="form__input"
                  placeholder="Confirm Password"
                  min="7"
                   />
              </div>

              <ul className="list">

                <li id="btn1">
                  <div className="list__item">
                    <button type="submit" className="link">SIGN UP</button>
                      <div className="btn btn1"></div>
                      <div className="btn btn2"></div>
                  </div>
                </li>

              </ul>
              <Link to="/login" className="donthave">Already have an account?</Link>

              <div className="error">
                  {data.error}
              </div>

            </form>
            <Dots/>
          </div>

        );
    }
}
function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(Register)
