import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../../actions'

import Header from '../../../components/Header/header';
import Decor from '../../../components/Decor/decor';
import Dots from '../../../components/Dots/dots';
import List from './list';


class Menu extends Component {


  componentWillMount(props){
    this.props.dispatch(getUsers())
  }



  render(){
    let user = this.props.user.users;
    return(

        <div className="menu__container">
          <Header/>
          <Decor/>
          <Dots/>
                  <div className="subheader-container">
                    <h1>Leaderboard</h1>
                    <p>THE BEST NEURO-HACKERS</p>
                  </div>
                  {user ?
                    <List
                      user={user}
                    />
                  :null}

        </div>
    )
  }

}

export default Menu;
