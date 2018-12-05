import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, updateUser } from '../../../actions';

import Header from '../../../components/Header/header';
import Burger from '../../../components/Burger/burger';
import Decor from '../../../components/Decor/decor';
import Dots from '../../../components/Dots/dots';

class Player extends Component{

  state = {
    name: "",
    level: "",
    streak: "",
    score: "",
    overall: "",
    time: "",
    mistakes: "",
    difficulty: "",
    timeoverall: ""
  }

  componentWillMount(props){
        this.props.dispatch(getUser(this.props.user.login.id))
  }

  renderUser = (user) => (
      user.user ?
      <ul>
        <li><span>01 Name: </span>{user.user.name}</li>
        <li><span>02 E-mail: </span>{user.user.mail}</li>
        <li><span>03 Rating: </span>S+</li>
        <li><span>04 Overall score: </span>{user.user.score}</li>
        <li><span>05 Overall time: </span>{user.user.time}</li>
        <li><span>06 Overall mistakes: </span>{user.user.wrong}</li>
        <li><span>07 Best time: </span>{user.user.best}</li>
        <li><span>08 Best score: </span>11000</li>
        <li><span>09 Memos unlocked: </span>10/12</li>
        <li><span>10 Memos donated: </span>0</li>
      </ul>
      :null
  )

  render(){
    let user = this.props.user;
    return(
      <div className="user-container">
        <Header/>
        <Decor/>
        <Burger/>

        <div class="user-info">
            {this.renderUser(user)}
        </div>
        <Dots/>
      </div>


    )
  }
}

function mapStateToProps(state){
    return {
        users: state.users
    }
  }


export default connect(mapStateToProps)(Player)
