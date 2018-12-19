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
    var glitch = document.getElementById("glitch");
    glitch.loop = true;
    glitch.pause();
    var noise = document.getElementById("noise");
    noise.loop = true;
    noise.pause();

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
                <p>Back in old days people used to speak using their minds. They connected their neuron-networks to global frameworks to have access to q-mind spaces. The knowledge gained by mankind for thousands of years of existence was stored in quantum streams. Anyone had access to this knowledge. People did not work back then; instead, part of the computational power of their brains was allocated to the needs of humankind. This system was called q-mining, and the points they earned - Involvement, served them with money and provided all the basic needs. In that world, the most important thing was to keep your mind clean in order to avoid chaos. Each individual was especially responsible for the condition of another person, since everyone is the one. The world existed in this form until Pyrrhon had come. Then it all happened. The Collapse.
                <br/><br/>Citadel does its best to restore lost memories and bring the knowledge back, sending agents all over the world to collect quantum streams converged in little clouds. Your job is deciphering these memories. It is a big responsibility. All the humankind is watching up on us and waits with hope for better future. Welcome to Quantum Terminals citizen. And remember: keep your mind clean!
                </p>
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
