import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, updateUser } from '../../actions';
import $ from 'jquery';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

import Dots from '../../components/Dots/dots';
import Header from '../../components/Header/header';
import Decor from '../../components/Decor/decor';
import Burger from '../../components/Burger/burger';

const ShowMessage = () => {
  var transitionTimeline = new TimelineLite();

  transitionTimeline.add(TweenMax.fromTo('#MODFI', .1, {display:"none"}, {display:"flex"}),.1)
  transitionTimeline.add(TweenMax.fromTo('#Modal', .1, {display:"none"}, {display:"block"}),.1);
  transitionTimeline.add(TweenMax.fromTo('#Modal', .5, {opacity:"0",  y:"20"}, {opacity:"1",  y:"0"}),.3);

  transitionTimeline.add(TweenMax.fromTo('#Message', .5, {opacity:"0",  y:"20"}, {opacity:"1",  y:"0"}),.8);
  transitionTimeline.add(TweenMax.fromTo('#q', .5, {opacity:"0",  y:"20"}, {opacity:"1",  y:"0"}),1);

}



class Difficulty extends PureComponent {

constructor(props){
  super(props);

    this.state = {
      formdata:{
        _id:this.props.user.login.id,
        difficulty:"",
        firstStart: false
      },
      description:'Choose difficulty',
      received: false,
      asian: false
    }


    this.onHover = this.onHover.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onHover(){
      var hover = $("#hoverFX")[0];
        hover.play();
  }

  onClick(){
    var click = $("#clickFX")[0];
      click.play();
  }

  componentDidMount(props){
    this.props.dispatch(getUser(this.props.user.login.id))
    $(".list__item").hover(function(){
      $(this).toggleClass("selected");
      $(this).toggleClass("list__item-active");
      $(".btn2", this).toggleClass("btn2-active");
      $(".btn1", this).toggleClass("btn1-active");
    })
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

  easyIn(){
    $("#im").remove();
    this.setState({description:"Good point to start. Not very challenging, it is quite possible to beat this without getting signs of nervous breakdown. You will improve your memory and pass to another difficulty.", asian:false})
  }
  hardIn(){
    $("#im").remove();
    this.setState({description:"You remember all phone numbers by heart and you was good at learning poems at school? Then this difficulty is probably for you. Challenging, but not impossible to beat.", asian:false})
  }
  extremeIn(){
    $("#im").remove();
    this.setState({description:"Here is where the real challenge starts. When you beat the game on this difficulty you will obtain new neuro-networks in your brain and reduce risk of Alzheimer's desease for at least 30%.", asian:false})
  }
  impossibleIn(){
    $("#im").remove();
    this.setState({description:"You bet. If you beat this, you are probably a genious. You are working in NASA or something, why do you even want to play this game?", asian:false})
  }
  AsianIn(){
    if (this.state.asian === false){
      this.setState({description:"", asian: true})
      var img = document.createElement("img");
      img.id = "im";
      img.src = "images/no.gif";
      var src = document.getElementById("description");
      src.appendChild(img);
    }

  }

  close = () => {
    var transitionTimeline = new TimelineLite();

      transitionTimeline.add(TweenMax.fromTo('#q', .5, {opacity:"1",  y:"0"}, {opacity:"0",  y:"20"}),.3);
      transitionTimeline.add(TweenMax.fromTo('#Message', .5, {opacity:"1",  y:"0"}, {opacity:"0",  y:"20"}),.7);

      transitionTimeline.add(TweenMax.fromTo('#Modal', .5, {opacity:"1",  y:"0"}, {opacity:"0",  y:"20"}),1);
      transitionTimeline.add(TweenMax.fromTo('#Modal', .1, {display:"block"}, {display:"none"}),1.5);
      transitionTimeline.add(TweenMax.fromTo('#MODFI', .1, {display:"flex"}, {display:"none"}),1.5)
  }

  sendData = (e) =>{
        e.preventDefault();


    this.props.dispatch(updateUser(this.state.formdata));
    this.props.history.push('/beggining')
  }

  setStateToEasy = () =>{
    this.setState({
        formdata:{
          _id:this.props.user.login.id,
          difficulty:"Easy",
          firstStart: false,
          final: false
        }
    })

    ShowMessage();
  }

  setStateToHard = () =>{
    this.setState({
        formdata:{
          _id:this.props.user.login.id,
          difficulty:"Hard",
          firstStart: false,
            final: false
        }
    })
  ShowMessage();

  }

  setStateToExtreme = () =>{
    this.setState({
        formdata:{
          _id:this.props.user.login.id,
          difficulty:"Extreme",
          firstStart: false,
            final: false
        }
    })
      ShowMessage();
  }

  setStateToImpossible = () =>{
    this.setState({
        formdata:{
          _id:this.props.user.login.id,
          difficulty:"Impossible",
          firstStart: false,
            final: false
        }
    })
    ShowMessage();
  }

  setStateToAsian = () =>{
    this.setState({
        formdata:{
          _id:this.props.user.login.id,
          difficulty:"Asian",
          firstStart: false,
            final: false
        }
    })
    ShowMessage();
  }

  checkProps = (user) => (
    user.user ?
      user.user.firstStart ?
        <div className="dif-cont">
            <div className="dif-wrap dif-wrap--1">
                <div className="dif-btn-wrap">
                  <ul className="list">
                    <li id="btn1">
                      <div className="list__item list__item--diff">
                        <a
                        onMouseEnter={this.easyIn.bind(this)}
                        onClick={this.setStateToEasy} className="link">EASY</a>
                          <div className="btn btn1"></div>
                          <div className="btn btn2"></div>
                      </div>
                    </li>
                    <li id="btn1">
                      <div className="list__item list__item--diff">
                        <a
                        onMouseEnter={this.hardIn.bind(this)}
                        onClick={this.setStateToHard} className="link">HARD</a>
                          <div className="btn btn1"></div>
                          <div className="btn btn2"></div>
                      </div>
                    </li>
                    <li id="btn1">
                      <div className="list__item list__item--diff">
                        <a
                        onMouseEnter={this.extremeIn.bind(this)}
                        onClick={this.setStateToExtreme} className="link" >EXTREME</a>
                          <div className="btn btn1"></div>
                          <div className="btn btn2"></div>
                      </div>
                    </li>
                    <li id="btn1">
                      <div className="list__item list__item--diff">
                        <a
                        onMouseEnter={this.impossibleIn.bind(this)}
                        onClick={this.setStateToImpossible} className="link" >IMPOSSIBLE</a>
                          <div className="btn btn1"></div>
                          <div className="btn btn2"></div>
                      </div>
                    </li>
                    <li id="btn1">
                      <div className="list__item list__item--diff">
                        <a
                        onMouseEnter={this.AsianIn.bind(this)}
                        onClick={this.setStateToAsian} className="link">ASIAN</a>
                          <div className="btn btn1"></div>
                          <div className="btn btn2"></div>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>
            <div  className="dif-wrap dif-wrap--2">
              <div id="description" className="img_cont"></div>
              <p >{this.state.description}</p>
            </div>
        </div>
      :<div className="dif-cont">
              <div className="dif-wrap dif-wrap--1">
                  <div className="dif-btn-wrap">
              <Link id="startnewgame" to="/menu"
               className="link">Please start a new game</Link>
          </div>
          </div>
          </div>:null
  )



  render(){
    let user = this.props.user;
    let state = this.state.formdata;


    return(
      <div className="Difficulty-container">
        <Header/>
        <Decor/>
        {this.checkProps(user)}
        <div id="MODFI" className="Modal__container-diff">
          <div id="Modal" className="Modal">
              <div className="Modal__text-wrapper">
              <h1 id="Message" className="Modal_h" >You chose: {this.state.formdata.difficulty}. ARE YOU SURE?</h1>
              <div id="q" className="q">
                <Link to="/game"  onMouseEnter={()=>this.onHover()}  onClick={this.sendData}
                      className="buttonGot-2"
                      id="button" >
                  <svg>
                    <rect width='100' height='30'></rect>
                  </svg>
                  Yes
                </Link>

                  <div  onMouseEnter={()=>this.onHover()}  onClick={()=>{this.close(); this.onClick();}}
                        className="buttonGot-2"
                        id="button" >
                    <svg>
                      <rect width='100' height='30'></rect>
                    </svg>
                    No
                </div>

              </div>
              <div className="BG-TEXT">MEMO</div>
              <div className="pattern pattern-pop"></div>
              </div>
          </div>
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


export default connect(mapStateToProps)(Difficulty)
