import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { getUser, updateUser } from '../../../actions';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Dots from '../../../components/Dots/dots';


class Game extends PureComponent {

  constructor(props) {
          super(props);

          this.redirect = this.redirect.bind(this);
        }

  componentDidMount(){
    this.props.dispatch(getUser(this.props.user.login.id))

    $(".list__item").hover(function(){
      $(this).toggleClass("selected");
      $(this).toggleClass("list__item-active");
      $(".btn2", this).toggleClass("btn2-active");
      $(".btn1", this).toggleClass("btn1-active");
    });

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

  redirect(){
    this.props.history.push('/menu')
  }

  render(){
      let user = this.props.user;
      console.log(user)
    return(
      <div className="Global-story-container">

      {user.user ?
        user.user.firstEver ?
          <div id="firstStart" className="firstStart">
            <div id="firstStart" className="firstStart_wrapper">
                <p>Thirty years ago after Collapse people lost their memories were stuck in the world without knowledge of who they are and where did they come from.  On earth reigned endless winter. Citadel is the last hope for humanity. They send agents all over the world to collect los memory in quantum clouds shattered all over the world and bring back to Terminals to decipher and unlock remembrances and know the truth about their existence.</p>
                <ul id="continue" className="list">
                  <li id="btn1">
                    <div className="list__item">
                      <Link to="/game"  className="link">Continue</Link>
                        <div className="btn btn1"></div>
                        <div className="btn btn2"></div>
                    </div>
                  </li>
                </ul>
            </div>
            <Dots/>
          </div>
          :null
         :null}
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        users: state.users
    }
  }


export default connect(mapStateToProps)(Game)
