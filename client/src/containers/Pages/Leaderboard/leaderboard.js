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

  componentDidMount(){
    var final = document.getElementById("Final");
    final.loop = true;
    final.pause();
    var song1 = document.getElementById("Song1");
    song1.loop = true;
    song1.pause();
    var song2 = document.getElementById("Song2");
    song2.loop = true;
    song2.pause();
    var song3 = document.getElementById("Song3");
    song3.loop = true;
    song3.pause();
    var song4 = document.getElementById("Song4");
    song4.loop = true;
    song4.pause();
    var standby = document.getElementById("Standby");
    standby.loop = true;
    standby.pause();

    var intro = document.getElementById("intro");
    if (intro.paused){
      intro.play();
    }
  }


  render(){
    let user = this.props.user.users;
    return(

        <div className="menu__container">
          <Header/>
          <Decor/>
          <Dots/>
                  <div className="subheader-container">
                    <h1>LEADERBOARD</h1>
                    <p>FIVE BEST NEURO-HACKERS</p>
                  </div>
                  {user ?
                    <List
                      user={user}
                    />
                  :null}
                  <div  onClick={()=>this.props.history.push("/info")} className="list__item">
                    <p className="link">BACK</p>
                    <div className="btn btn1"></div>
                    <div className="btn btn2"></div>
                  </div>
        </div>
    )
  }

}

export default Menu;
