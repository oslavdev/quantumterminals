import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { startGame, getUser, updateUser } from '../../actions';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import $ from 'jquery';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Sound from 'react-sound';
import 'simplebar';
import 'simplebar/dist/simplebar.css';

import Header from './header/header';
import Dots from '../Dots/dots';
import Sidebar from './sidebar/sidebar';
import Rules from './rules.json'
import Burger from '../Burger/burger';
import Buttons from './buttons/buttons';
import Gameboard from './board/gameboard';
import Music from './music/Music';


import Messages from '../Messages/DB/Messages';
import Adv from '../Messages/DB/adv';
import Story from '../Messages/DB/story';


class Game extends PureComponent {

  constructor(props) {
          super(props);

          this.generatorPath = this.generatorPath.bind(this);  // 1 step, generate pattern
          this.buttonSelector = this.buttonSelector.bind(this); // 2 step select buttons according to pattern
          this.buttonHighlight = this.buttonHighlight.bind(this); // 3 step highlight buttons

          this.midWin = this.midWin.bind(this);
          this.win = this.win.bind(this);
          this.fail = this.fail.bind(this);
          this.timer = this.timer.bind(this);

          this.restart = this.restart.bind(this);
          this.semirestart = this.semirestart.bind(this);

          this.scoreanimation = this.scoreanimation.bind(this);
          this.correct = this.correct.bind(this);

          this.checkProps = this.checkProps.bind(this);
          this.receiveMessages = this.receiveMessages.bind(this);

          this.checkMessage = this.checkMessage.bind(this);
          this.renderMessage = this.renderMessage.bind(this);

          this.slider = this.slider.bind(this);
          this.tutorialSlider = this.tutorialSlider.bind(this);

          this.TerminalCountDown = this.TerminalCountDown.bind(this);
          this.firstMessage = this.firstMessage.bind(this);
          this.messageShow = this.messageShow.bind(this);
          this.soundManager =this.soundManager.bind(this);

          this.onHover = this.onHover.bind(this);
          this.onClick = this.onClick.bind(this);


          this.state = {
            userdata:{
              _id:this.props.user.login.id,
              mistakes:'0',
              score:'',
              level:'',
            },
            game:false,
            name: "",
            level: "",
            score: '',
            totalscore:'',
            overall: "",
            time: "",
            mistakes: "",
            difficulty: "",
            showResults: false,
            pattern:'',
            path:'',
            tutorial: '',
            startTutorial: '1',
            streak: "",
            time: "",
            currentStreak:"0",
            minutes:"0",
            seconds:"0",
            start:false,
            showMessage: true, // Intro Message
            gameplay:false, //Countdown before start
            restart: false,
            timeout: false,
            win: false,
            fail: false,
            midWin:false,
            generator: false, //Generate path
            seconds:'',
            minutes:'',
            countdown:'3',
            countnum:'',
            time:'',
            clicked:false,
            first: "",
            tiles: '',
            firstEnter: false,
            openMessage: false,
            receivedMessage: false,
            timer: false,
            firstEver: true,
            messa: true,
            standby: true,
            numberofmessage:'',
            messages: [],
            allmessages:[],
            checkmessage: false,
            slideIndex: "1",
            firstMessageCheck: true,
            messageCondition: false,
            start: '1',
            length: '3',
            break: false,
            openBigMessages: false,
            indexOfTheMessage: '',
            modal:false,
            final: false,
            props:true,
            song:"none",
            condition:Sound.status.PLAYING,
            soundScript: 'none',
            trackName:'',
            playing: false,
            firstTime: true,
            src:'',
            messagesData:{
              _id:this.props.user.login.id,
              messages:[],
            },
          }
        }

        messageShow(){

        }

        onHover(){
            var hover = $("#hoverFX")[0];
              hover.play();
        }

        onClick(){
          var click = $("#clickFX")[0];
            click.play();
        }


        firstMessage(){

              var notification = document.getElementById("notification");
              notification.loop = false;
              notification.play();

              return(
                <div id="firstMessage" className="box">
                  <div className="text">
                      <div className="text-wrapper text-wrapper-active">
                        <div className="super-wrapper">
                        <h2 id="from"><i className="far fa-envelope"></i><span>from:</span></h2>
                        <h1 id="sender">Lumituisku</h1>
                        <p id="message" >Hello {this.props.user.user.name}, my name is Lumitiusku. I will guide your through the processes of unlocking quantum memory. Do you want me to explain the rules? </p>
                        <div id="message-btns" className="m-btn-wrapper">
                          <div onMouseEnter={()=>this.onHover()}  onClick={()=>{this.setState({messa:false, tutorial:true}); this.onClick(); }} className="buttonGot-2" id="button"  >
                            <svg>
                              <rect width='100' height='30'></rect>
                            </svg>
                            Yes
                          </div>
                          <div onMouseEnter={()=>this.onHover()}  className="buttonGot-2" id="button" onClick={()=>{this.setState({messa:false}); this.onClick();}} >
                            <svg>
                              <rect width='100' height='30'></rect>
                            </svg>
                            No
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
              )

        }



        TerminalCountDown(){

        }



        renderMessage(user){

          this.setState({checkmessage:false})
          let level = parseInt(this.state.numberofmessage);
          document.querySelector(".timer").classList.remove("warning");

          let lumiMessage = Messages.Lumi.find((item1) => item1.id === `${level}`);
          let rotoMessage = Messages.Roto.find((item1) => item1.id === `${level}`);
          let advMessage = Adv.Adv.find((item1) => item1.id === `${level}`);
          let storyMessage = Story.Fragments.find((item1) => item1.id === `${level}`);
          let messagesData = this.state.messagesData.messages;


          let allMessages = this.props.user.user.messages;
          let length = allMessages.length;

          if(length>0){
            this.setState({allmessages:allMessages})
            this.setState({messageCondition:true})
          } else {
            this.setState({messageCondition:false})
          }



          switch(level) {
           case 2: {
             this.setState({
               messages:[lumiMessage],
               messagesData:{
                 _id:this.props.user.login.id,
                 messages:[lumiMessage],
               }
             })
              break;
           }
           case 3: {
             this.setState({
               messages:[lumiMessage, rotoMessage, storyMessage],
               messagesData:{
                 _id:this.props.user.login.id,
               messages:[lumiMessage, rotoMessage, storyMessage],
               }
             })
              break;
           }
           case 4: {
             this.setState({
               messages:[lumiMessage, rotoMessage, advMessage],
               messagesData:{
                 _id:this.props.user.login.id,
               messages:[lumiMessage, rotoMessage, advMessage],
               }
             })
              break;
           }
           case 5: {
             this.setState({
               messages:[lumiMessage, advMessage],
               messagesData:{
                 _id:this.props.user.login.id,
               messages:[lumiMessage, advMessage],
               }
             })
              break;
           }
           case 6: {
             this.setState({
               messages:[lumiMessage, rotoMessage, storyMessage],
               messagesData:{
                 _id:this.props.user.login.id,
               messages:[lumiMessage, rotoMessage, storyMessage],
               }
             })
              break;
           }
           case 7: {
             this.setState({
               messages:[lumiMessage, advMessage],
               messagesData:{
                 _id:this.props.user.login.id,
               messages:[lumiMessage, advMessage],
               }
             })
              break;
           }
           case 8: {
             this.setState({
               messages:[lumiMessage, rotoMessage],
               messagesData:{
                 _id:this.props.user.login.id,
               messages:[lumiMessage, rotoMessage],
               }
             })
              break;
           }
           case 9: {
             this.setState({
               messages:[lumiMessage, rotoMessage, storyMessage],
               messagesData:{
                 _id:this.props.user.login.id,
               messages:[lumiMessage, rotoMessage, storyMessage],
               }
             })
              break;
           }
           case 10: {
             this.setState({
               messages:[lumiMessage, rotoMessage, advMessage],
               messagesData:{
                 _id:this.props.user.login.id,
               messages:[lumiMessage, rotoMessage, advMessage],
               }
             })
              break;
           }
           case 11: {
             this.setState({
               messages:[lumiMessage, rotoMessage, storyMessage],
               messagesData:{
                 _id:this.props.user.login.id,
               messages:[lumiMessage, rotoMessage, storyMessage],
               }
             })
              break;
           }
           case 12: {
             this.setState({
               messages:[lumiMessage, storyMessage, advMessage],
               messagesData:{
                 _id:this.props.user.login.id,
               messages:[lumiMessage, storyMessage, advMessage],
               }
             })
              break;
           }
           default: {
              break;
           }
        }



        if(this.state.allmessages.length > 0){
          let x = this.state.allmessages;
          let y = this.state.messages;
          let final = x.concat(y);
          this.setState({
            messagesData:{
              _id:this.props.user.login.id,
            messages:final,
            }
          })

        } else {
          this.setState({
            messagesData:{
              _id:this.props.user.login.id,
            messages:this.state.messages,
            }
          })

        }


        setTimeout(()=>{
          this.props.dispatch(updateUser(this.state.messagesData));
        },1000)



        this.setState({
          fail: false,
          win: false,
          countdown: "3",
          countnum:'',
          clicked: false,
          level: this.props.user.level,
          standby: true,

        });

        for (let i=1; i<31; i++){
          let playground = document.querySelector(`.playground__item--${i}`);
          let button = document.querySelector(`#button${i}`);
          $(button).removeClass();
          $(button).addClass("button");

        }
        $(`.line`).remove();
        const rules = Rules.Levels;
        level = this.state.level;
        let difficulty = this.state.difficulty;


          for (var i=0; i<rules.length; i++){
            let rule = rules[i];
            if(rules[i].Level == level && rules[i].Difficulty == difficulty) {
              let total = rule.Time;
              let minutes = parseInt(total/60);
              let seconds = total-(minutes*60);
              this.setState({
                streak:rule.Streak,
                time: total,
                minutes:minutes,
                seconds:seconds,
              })
            }
          }

        var notification = document.getElementById("notification");
        notification.loop = false;
        notification.play();

        setTimeout(()=>{
          this.setState({
            receivedMessage:true,
          })
        }, 2000)

        this.props.dispatch(getUser(this.props.user.login.id));

      }

        checkMessage = (user) =>(
          user ?
            this.state.checkmessage ?
              this.renderMessage(user)
            :<div>Loading</div>
          :null
        )

        receiveMessages(){
          this.props.dispatch(getUser(this.props.user.login.id));

          setTimeout(()=>{
            let user = this.props.user.user;
            this.setState({checkmessage:true, win:false})
            this.checkMessage(user);
          },1000)

        }


        restart(){

          this.props.dispatch(getUser(this.props.user.login.id));
          document.querySelector(".timer").classList.remove("warning");

          this.setState({
            fail: false,
            win: false,
            countdown: "3",
            countnum:'',
            clicked: false,
            level: this.props.user.level,
            standby: true,
            score:"0",
            gameplay: true
          });

          for (let i=1; i<31; i++){
            let playground = document.querySelector(`.playground__item--${i}`);
            let button = document.querySelector(`#button${i}`);
            $(button).removeClass();
            $(button).addClass("button");

          }
          $(`.line`).remove();
          const rules = Rules.Levels;
          let level = this.state.level;
          let difficulty = this.state.difficulty;


            for (var i=0; i<rules.length; i++){
              let rule = rules[i];
              if(rules[i].Level == level && rules[i].Difficulty == difficulty) {
                let total = rule.Time;
                let minutes = parseInt(total/60);
                let seconds = total-(minutes*60);
                this.setState({
                  streak:rule.Streak,
                  time: total,
                  minutes:minutes,
                  seconds:seconds,
                })
              }
            }
            this.generatorPath();
        }



        semirestart(){

          for (let i=1; i<31; i++){
            let playground = document.querySelector(`.playground__item--${i}`);
            let button = document.querySelector(`#button${i}`);
            $(button).removeClass();
            $(button).addClass("button");

          }
          $(`.line`).remove();
          this.generatorPath();
        }


        fail(){
          document.querySelector(".blocker").classList.add('blocker-active');
          let level = this.state.level;

          let track = this.state.src;
          let song = document.getElementById(`${track}`);
          let standby = document.getElementById(`Standby`);
          song.pause();
          standby.play();

          for (let i=1; i<31; i++){
            let playground = document.querySelector(`.playground__item--${i}`);
            let button = document.querySelector(`#button${i}`);
            $(button).removeClass();
            $(button).addClass("button");

          }
          $(`.line`).remove();
          const rules = Rules.Levels;
          level = this.state.level;
          let difficulty = this.state.difficulty;


            for (var i=0; i<rules.length; i++){
              let rule = rules[i];
              if(rules[i].Level == level && rules[i].Difficulty == difficulty) {
                let total = rule.Time;
                let minutes = parseInt(total/60);
                let seconds = total-(minutes*60);
                this.setState({
                  streak:rule.Streak,
                  time: total,
                  minutes:minutes,
                  seconds:seconds,
                })
              }
            }


          this.setState({
            userdata:{
              _id:this.props.user.login.id,
              score: this.state.totalscore,
              level:this.state.level,
              mistakes: this.state.mistakes
            },
              countdown: "3",
              countnum:'',
              pattern:"",
              path:'',
              fail:true,
              currentStreak:"0",
              score:"0",
              midWin:false,
              clicked: false,
              win: false,
              break: false,
              gameplay: false,
              soundScript: 'standby'
          })
          this.props.dispatch(updateUser(this.state.userdata));

        }

        midWin(){

          setTimeout(()=>{
            document.querySelector(".blocker").classList.add('blocker-active');
          },500)

          this.setState({
            midWin:true,
            clicked: false,
            break: false
          })

          this.correct();
          this.semirestart();

        }

        win(){
          document.querySelector(".blocker").classList.add('blocker-active');
          let track = this.state.src;
          let song = document.getElementById(`${track}`);
          let standby = document.getElementById(`Standby`);
          let winSound = document.getElementById(`Win`);
          song.pause();
          standby.play();
          winSound.play();

          let level = this.state.level;
          let curLevel = parseInt(parseInt(level)+parseInt(1));
          let score = parseInt(parseInt(this.state.score) + parseInt(this.state.totalscore));

          if (curLevel <= 12){
            this.setState({
                userdata:{
                  _id:this.props.user.login.id,
                  mistakes:this.state.mistakes,
                  score:score,
                  level:curLevel,
                  firstEnter: false,
                  firstEver: false,
                },
                pattern:"",
                path:'',
                win:true,
                midWin:false,
                currentStreak:"0",
                streak:'',
                clicked: false,
                numberofmessage:curLevel,
                score: '0',
                gameplay: false,
                soundScript: 'standby'
            })
            this.props.dispatch(updateUser(this.state.userdata));
          } else if (curLevel > 12){

                var final = document.getElementById("Final");
                final.loop = true;
                final.play();
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
                standby.loop = true;
                standby.pause();


            setTimeout(()=>{
              this.props.history.push("/menu");
            }, 240000)

            this.setState({final: true})
            this.setState({
                userdata:{
                  _id:this.props.user.login.id,
                  mistakes:this.state.mistakes,
                  score:score,
                  level:"1",
                  firstEnter: true,
                  firstEver: true,
                  final: true,
                  firstStart: true,
                },
                pattern:"",
                path:'',
                win:false,
                midWin:false,
                currentStreak:"0",
                streak:'',
                clicked: false,
                numberofmessage:curLevel,
                score: '0',
                final: true,
            })
            this.props.dispatch(updateUser(this.state.userdata));
          }



        }

      scoreanimation(z, score){

        let s = document.createTextNode(`${score}`);
        let container = document.querySelector(`#scorecontainer${z}`);
        container.appendChild(s);

        var scoreanimation = new TimelineLite();
        scoreanimation.add(TweenMax.fromTo(container, .1, {display:"none"}, {display:"flex"}),);
        scoreanimation.add(TweenMax.fromTo(container, .5, {opacity:"0", y:"0"}, {opacity:"1", y:"5"}));
        scoreanimation.add(TweenMax.to(container, .5, {opacity:"0", y:"10"}));
        scoreanimation.add(TweenMax.fromTo(container, .1, {display:"flex"}, {display:"none"}),);

        setTimeout(()=>{
          container.removeChild(s);
        }, 2000)

      }

      correct(){
        var success = document.getElementById("Success");
        success.loop = false;
        success.play();
        var correct = new TimelineLite();
        correct.add(TweenMax.fromTo(".win", .1, {display:"none"}, {display:"flex"}),);
        correct.add(TweenMax.fromTo(".win", .5, {opacity:"0", y:"0"}, {opacity:"1", y:"5"}));
        correct.add(TweenMax.to(".win", .5, {opacity:"0", y:"10"}));
        correct.add(TweenMax.fromTo(".win", .1, {display:"flex"}, {display:"none"}),);
      }



      componentDidMount(){

        this.props.dispatch(getUser(this.props.user.login.id))

          var standby = document.getElementById("Standby");
          var intro = document.getElementById("intro");

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


          if (standby.paused){
            standby.play();
          }
          if (!intro.paused){
            intro.pause();
          }

          var hover = $("#hoverFX")[0];
          var click = $("#clickFX")[0];
          var transitionIntro = $("#transitionIntro")[0];

          $(".buttonGot-2").mouseenter(function() {
            hover.play();
          });

          $('.buttonGot-2').click(function(){
            click.play();
          });

        $(".list__item").hover(function(){
          $(this).toggleClass("selected");
          $(this).toggleClass("list__item-active");
          $(".btn2", this).toggleClass("btn2-active");
          $(".btn1", this).toggleClass("btn1-active");
        });


        var wrapper = document.querySelector('#root'),
          layerOne = document.querySelector('.logo--1'),
          layerTwo = document.querySelector('.logo--2');

          wrapper.addEventListener('mousemove',function(e){
            var pageX = e.clientX,
                pageY = e.clientY;
            layerOne.style.webkitTransform = 'translateX(' + pageX/100 + '%) translateY(' + pageY/100 + '%)';
            layerOne.style.transform = 'translateX(' + pageX/100 + '%) translateY(' + pageY/100 + '%)';
            layerTwo.style.webkitTransform = 'translateX(' + pageX/150 + '%) translateY(' + pageY/250 + '%)';
            layerTwo.style.transform = 'translateX(' + pageX/150 + '%) translateY(' + pageY/250 + '%)';
            wrapper.style = 'background-position:'+ pageX/200 +'px center';
          });


              function toggleFullscreen(elem) {
            elem = elem || document.documentElement;
            if (!document.fullscreenElement && !document.mozFullScreenElement &&
              !document.webkitFullscreenElement && !document.msFullscreenElement) {
              if (elem.requestFullscreen) {
                elem.requestFullscreen();
              } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
              } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
              } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
              }
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              }
            }
          }

          document.getElementById('btnFullscreen').addEventListener('click', function() {
            toggleFullscreen();
          });

              document.querySelector(".blocker").classList.add('blocker-active');




          ///Create buttons

          let score = 0;
          let win, midWin, miss, mistakes;

          $(document).ready(function(){
            var errorraised = false;
            var passwordset = false;
            var getClickStarted = false;
            var autosubmit = true;
            var password;
            var centerX1;
            var centerY1;
            var curX = 0;
            var curY = 0;
            var htmlLine;
            var startpointnumber=0;
            var endpointnumber=0;
            var clicked = false;
            var z;
            var sNum = 100;

            ///////////////////////////////////////////

                    // II. GENERATE BUTTONS //

            (function generatebuttons(){

              var patterncontainer  = document.createElement("div");
              patterncontainer.classList.add("buttonground");
              patterncontainer.id = "buttonground";
              var ground = document.querySelector(".playground");
              ground.appendChild(patterncontainer);

              for (var i = 0; i < 50; i++) {

                var button = document.createElement("div");


                var classes =  [
                  'button'
                ];
                classes.map(function(item) {
                    return button.classList.add(item);
                });
                let id = parseInt(i) + parseInt(1);
                button.id = "button" + id;


                patterncontainer.appendChild(button);

                var startposition = document.getElementById("button" + i);
              }
            }());


            ///////////////////////////////////////////

                    // III. CHECK IF MOUSE IS DOWN:

            (function main(){
              if(!window.navigator.msPointerEnabled) {

                $(".button").on("mousedown", function (event){

                    clicked = true;
                    var offset1 = $("#" + event.target.id).position();
                    centerX1 = offset1.left + $("#" + event.target.id).innerWidth()/2; //22.5 is the margin of the button class
                    centerY1 = offset1.top + $("#" + event.target.id).innerHeight()/2;
                    if (event && event.preventDefault){
                               event.preventDefault();
                          }


                  $("#" + event.target.id).removeClass("button").addClass("activebutton");  //HIT TEST, CHANGE CLASS ON ACTIVE
                    score = parseInt(score+100);
                    this.setState({
                      score:score
                    })

                   password = event.target.id.split("button").join("");
                   startpointnumber = event.target.id.split("button").join("");


                    addline(startpointnumber, centerX1, centerY1); //initiating a moving line



                }.bind(this));

                ///////////////////////////////////////////

                        //  IV. - MOUSE MOVE

                $(document).bind("mousemove", function(event) {

                    if (clicked === true){
                        if (event && event.preventDefault){
                           event.preventDefault();
                        }

                        curX = event.clientX - $("#buttonground").offset().left;
                        curY = event.clientY - $("#buttonground").offset().top;

                        var width = Math.sqrt(Math.pow(curX - centerX1, 2) + Math.pow(curY - centerY1, 2)); //varying width and slope
                        var slope = Math.atan2(curY - centerY1, curX - centerX1)*180/3.14;

                        //setting varying width and slope to line
                        $("#line" + startpointnumber).css({
                            "width": + width +"px",
                            "height": "2px",
                            "transform": "rotate(" + slope + "deg)",
                            "-webkit-transform": "rotate(" + slope + "deg)",
                            "-moz-transform": "rotate(" + slope + "deg)"
                        });

                        //if button is found on the path
                        $(".button").bind("mouseover", function(e) {

                            if (clicked === true){
                              endpointnumber = e.target.id.split("button").join("");
                              z = e.target.id.split("button").join("");
                              if (startpointnumber != endpointnumber) {

                                // prevent default
                                  if (e && e.preventDefault){
                                           e.preventDefault();
                                        }
                                  // change btn on active
                                  if (e.target.classList.contains(`path`)) {
                                    $("#" + e.target.id).removeClass("button").addClass("activebutton");
                                    $("#" + e.target.id).removeClass("path");
                                    $("#" + "front" + z).addClass("playground__item--front-active");
                                    $("#" + "back" + z).addClass("playground__item--back-active");
                                    score = parseInt(parseInt(score)+parseInt(sNum));
                                    this.setState({
                                      score:score
                                    })
                                    var win = document.getElementById("Button");
                                    win.loop = false;
                                    win.play();
                                    this.scoreanimation(z, sNum);
                                  } else {
                                    $("#" + e.target.id).removeClass("activebutton").addClass("duplicatebutton");
                                    let mistake = this.state.mistakes;
                                    let sum = parseInt(parseInt(mistake) + parseInt(1));
                                    var fail = document.getElementById("ButtonFail");
                                    fail.loop = false;
                                    fail.play();
                                    clicked = false;
                                    this.setState({
                                      userdata:{
                                        _id:this.props.user.login.id,
                                        mistakes: sum,
                                      },
                                      mistakes: sum
                                    })
                                    this.fail();
                                  }

                                  password += e.target.id.split("button").join("");
                                  // endpointnumber = e.target.id.split("button").join("");

                                  $("#line" + startpointnumber).attr("id", "line" + startpointnumber + endpointnumber);

                                  var offset2 = $("#" + e.target.id).position();

                                  var centerX2 = offset2.left + $("#" + e.target.id).innerWidth()/2;  //20.5 is the margin of activebutton class
                                  var centerY2 = offset2.top + $("#" + e.target.id).innerHeight()/2;

                                  var linewidth = Math.sqrt(Math.pow(centerX2 - centerX1, 2) + Math.pow(centerY2 - centerY1, 2));
                                  var lineslope = Math.atan2(centerY2 - centerY1, centerX2 - centerX1)*180/3.14;

                                  $("#line" + startpointnumber + endpointnumber).css({
                                      "width": + linewidth +"px",
                                      "transform": "rotate(" + lineslope + "deg)",
                                      "-webkit-transform": "rotate(" + lineslope + "deg)",
                                      "-moz-transform": "rotate(" + lineslope + "deg)"
                                  });

                                  startpointnumber = endpointnumber;
                                  centerX1 = centerX2;
                                  centerY1 = centerY2;

                                  addline(startpointnumber, centerX1, centerY1);
                                }


                            }


                        }.bind(this));

                      }
                    ///////////////////////////////////////////

                            // V.  MOUSE UP    //

                  $("#buttonground").on("mouseup", function (event){

                    if(clicked === true) {
                      clicked = false;
                      if (event && event.preventDefault){
                               event.preventDefault();
                            }

                            $("#line" + startpointnumber).remove();

                              this.setState({clicked:false});

                              if(password === this.state.pattern){

                                let curr = this.state.currentStreak;
                                let st = this.state.streak;

                                if(curr < st) {

                                  let c = this.state.currentStreak;
                                  this.midWin();
                                  let sum = parseInt(c+1);
                                  this.setState({
                                    currentStreak: sum
                                  })


                                } else {
                                  let score = this.state.score;
                                  this.win();
                                }

                              }
                              else {
                                this.fail();
                                let mistake = this.state.mistakes;
                                let sum = parseInt(parseInt(mistake) + parseInt(1));
                                this.setState({
                                  userdata:{
                                    _id:this.props.user.login.id,
                                    mistakes: sum,
                                    score: '',
                                  },
                                  mistakes: sum
                                })
                              }
                    }
                  }.bind(this));
                }.bind(this));
              } else {
                alert ("INTERNET EXPLORER NOT SUPPORTED!!");
              }
            }.bind(this)());

            ///////////////////////////////////////////

                    //  VI. - ADD LINE   //

            function addline(startpointnumber, centerX1, centerY1){
              var htmlLine =
              "<div id='line" + startpointnumber + "' class='line selectLine' style='position: absolute; top: " + centerY1 + "px; \
                          left: " + centerX1 + "px; -webkit-transform-origin: 2px 2px; -moz-transform-origin: 2.5% 50%;'></div>"

              $("#buttonground").append(htmlLine);
            }

              ///////////////////////////////////////////

                      // VII. GET LENGTH //

              function getlength(number) {
                  return number.toString().length;
              };
            }.bind(this));

            this.setState({
              score:score
            })
      }

        buttonHighlight(path){
          let select = path;
          let pass = "";

          var alarm = document.getElementById("Alarm");
          alarm.pause();

          var loaded = document.getElementById("Loaded");
          loaded.loop = false;
          loaded.play();

          for (let i=0; i<path.length; i++){
            pass = pass+path[i];
          }

          this.setState({pattern:pass})
          this.setState({path:select})

          $(document).ready(function(){

            let delay = [];

            for (var i=0; i<select.length; i++) {
              var Test = document.getElementById('button'+ select[i]);
              let n = i;
              let num = parseInt(i+1);
              let y = num/10;
              let x = parseFloat(y*3);
              delay.push(x);
              $(Test).addClass("appearButton");
              $(Test).css( "animation-delay", x + 's' );
            }

            let lastNumber = delay.pop();
            let sm = parseFloat(lastNumber+3);
            let timeout = sm*1000;

            setTimeout(()=>{

                  $(document).ready(function(){

                    for (var i=1; i<select.length; i++) {
                      var Test = document.getElementById('button'+ select[i]);
                      $(Test).addClass("disappearButton");
                      $(Test).removeClass("appearButton");
                      $(Test).removeClass("disappearButton");
                      document.querySelector(".blocker").classList.remove('blocker-active');
                    }
                  });
                  document.querySelector(".blocker").classList.remove('blocker-active');
                  loaded.pause();
                }, `${timeout}`)

          });

          if (this.state.midWin === false){
              this.timer();
          }



        }


        /// III - BUTTON SELECTOR
        buttonSelector(activeTiles){
          var path = activeTiles;

          $(document).ready(function(){
            for (var i=0; i<activeTiles.length; i++) {

              var Test = document.getElementById('button'+ path[i]);
              $(Test).addClass("path");
            }
          });

          setTimeout(()=>{
              this.buttonHighlight(path);
          }, 3000)

        }

        /// II - GENERATOR PATH
        generatorPath(){


                  setTimeout(()=>{
                    let loadingelement = document.querySelector("#standby");
                    loadingelement.textContent = "Loading";
                    $("#standcircle").remove();
                  }, 1000)



                  let score = "";
                  let size = 30;
                  let activeTiles = []; // active tiles
                  let firstTile = []; // first active tile
                  let avoid =[]; // avoid these tiles
                  let numberOfTiles = this.state.tiles;
                  let step1 = [];
                  let elemenator=[];
                  let Test = [];
                  let middle = [];
                  let elemenateArray = [];

                  const getRandomIntInclusive = (min, max) => {
                    min = Math.ceil(1);
                    max = Math.floor(size);
                    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
                  }

                  let random = `${getRandomIntInclusive()}`
                  let z = parseInt(random);
                  let y = []; // niddle step

                  activeTiles.push(z);
                  firstTile.push(z);
                  y.push(z);
                  avoid.push(z);


                  var build;
                  for (build = 0; build < `${numberOfTiles}`; build++) {


                    let step1 = [];
                    let beg = parseFloat(y-1);



                      if (y%5 === 0){
                       step1.push(
                            (Math.round(y)-1),
                            (Math.round(y)+5),
                            (Math.round(y)-5),
                            (Math.round(y)-6),
                            (Math.round(y)+4),
                          );

                } else if (beg%5 ===0) {
                        step1.push(
                          (Math.round(y)+1),
                          (Math.round(y)+5),
                          (Math.round(y)-5),
                          (Math.round(y)-4),
                          (Math.round(y)+6),
                        );

                      }else {
                        step1.push(
                          (Math.round(y)+1),
                          (Math.round(y)-1),
                          (Math.round(y)+5),
                          (Math.round(y)-5),
                          (Math.round(y)+6),
                          (Math.round(y)-6),
                          (Math.round(y)+4),
                          (Math.round(y)-4),
                        );

                    };

                    for (let i=0; i < step1.length; i++) {
                      if (step1[i] <= 0 ) {
                          middle.push(step1[i]);

                     } if( step1[i] > 30){
                       middle.push(step1[i]);

                     }
                    }


                        var middleArray = step1.filter(firstCall);
                        function firstCall(e){
                          return middle.indexOf(e) < 0;
                        }

                        var finalArray = middleArray.filter(myCallBack);
                        function myCallBack(el){
                          return avoid.indexOf(el) < 0;
                        }


                        let length = finalArray.length;
                        const newRandom = (min, max) => {
                              min = Math.ceil(0);
                              max = Math.floor(parseInt(length)-parseInt(1));
                              return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
                        }

                        let x = newRandom();

                        const Test = [];

                        finalArray.forEach((item) => {
                          if(item > 0 && item < 50 ){
                            let p = finalArray[`${x}`];
                            Test.push(p);
                          }
                        });



                        const elemenate = (number) => {
                          if (number!=Test[0]){
                            return number
                          }
                        }

                        if (Test[0] === undefined){
                          let activeTiles = []; // active tiles
                          let firstTile = []; // first active tile
                          let avoid =[]; // avoid these tiles
                          let step1 = [];
                          let elemenator=[];
                          let Test = [];
                          let elemenateArray = [];
                          build=-1; continue;
                        } else {
                          let elemenateArray = finalArray.filter(elemenate);
                          avoid.push(Test[0]);
                          activeTiles.push(Test[0]);
                          y = `${Test[0]}`;
                          step1=[];
                          for (let i=0; i < elemenateArray.length; i++) {
                            avoid.push(`${elemenateArray[i]}`);
                          }
                        }
                   } // END OF THE LOOP
                   this.buttonSelector(activeTiles);

        }



        timer(){
          this.setState({timeout:false, timer:true})
          clearInterval(gametime);
          let totalseconds = this.state.time;
          let percentage = parseFloat(totalseconds/100)*35; //35%
          let timeover = false;

          let gametime = setInterval(()=>{

            totalseconds--;

            let minutes = parseInt(totalseconds/60);
            let seconds = totalseconds-(minutes*60);

            if(minutes === 1) {
              minutes = minutes;
            } else if (minutes < 1){
              minutes = 0;
            }

            if(totalseconds === 0){
              this.setState({timer: false})
              clearInterval(gametime);
              this.fail();
            }

            if(this.state.final === true){
              this.setState({timer: false})
              clearInterval(gametime);
            }


            if(this.state.win===true){
              this.setState({timer: false})
              clearInterval(gametime);
            }

            if(this.state.fail===true){
              this.setState({timer: false})
              clearInterval(gametime);
            }

            if (parseFloat(totalseconds) < parseInt(percentage)){
              document.querySelector(".timer").classList.add("warning");
            }

            this.setState({minutes:minutes, seconds: seconds})

          }, 1000)
        }

        run = () =>{
          let i = this.state.countdown;
          let gameplay = "gameplay";
          let state = this.state;
          this.setState({
            fail:false,
            showMessage:false,
            soundScript: 'gameplay',
            gameplay:true,
            messages:[],
            executed: false,
            messagesData:{
              _id:this.props.user.login.id,
              messages:[],
            },
          })

          var alarm = document.getElementById("Alarm");
          alarm.loop = false;
          alarm.play();

          var song1 = document.getElementById("Song1");
          song1.loop = true;
          var song2 = document.getElementById("Song2");
          song2.loop = true;
          var song3 = document.getElementById("Song3");
          song3.loop = true;
          var song4 = document.getElementById("Song4");
          song4.loop = true;


          function getRandomInt(min, max) {
              min = Math.ceil(1);
              max = Math.floor(4);
              return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          let x = getRandomInt();
          let name, playing, src;
          switch (x){
            case 1 :
              src= "Song1";
              song1.play();
              name = 'Press On';
              playing = true;
              break;
            case 2:
              src= "Song2";
              song2.play();
              name = 'FutureWorld Dark';
              playing = true;
              break;
            case 3:
              src= "Song3";
              song3.play();
              name = 'Press On 2';
              playing = true;
              break;
            case 4:
              src= "Song4";
              song4.play();
              name = 'DogFight';
              playing = true;
              break;
            default:
              break;
          }

          var standby = document.getElementById("Standby");
          standby.loop = true;
          standby.pause();


          this.setState({
            src: src,
            trackName:name,
            playing: true
          })

          let interval = setInterval(() => {
              this.setState({
                countnum: i,
              })
              i--;
              this.setState({
                countdown: i,
              })
              if (i < 0){
                this.setState({gameplay: false, generator:true})
                clearInterval(interval);
                this.generatorPath();
              }
          }, 1000);
      }



      checkProps = (user) => (
          user.user ?
            user.user.messages ?
            setTimeout(()=>{
              if (user.user.final === false){
                this.setState({
                  showResults: true,
                  difficulty: user.user.difficulty,
                  level: user.user.level,
                  name: user.user.name,
                  overall: user.user.score,
                  mistakes: user.user.mistakes,
                  totalscore: user.user.score,
                  firstEnter: user.user.firstEnter,
                  game:true,
                 })

               if (this.state.firstMessageCheck === true){
                 setTimeout(()=>{
                   let messages = this.props.user.user.messages;
                   let length = messages.length;
                   if(length>0){
                     this.setState({allmessages:messages})
                     this.setState({messageCondition:true})
                   } else {
                     this.setState({messageCondition:false})
                   }
                 },5000)
                 this.setState({firstMessageCheck:false})
               }
               this.setState({firstMessageCheck:false})
               const rules = Rules.Levels;
               let level = this.state.level;
               let difficulty = this.state.difficulty;
               for (var i=0; i<rules.length; i++){
                 let rule = rules[i];
                 if(rules[i].Level == level && rules[i].Difficulty == difficulty) {
                   let total = rule.Time;
                   this.setState({
                     streak:rule.Streak,
                     time: total,
                     tiles: rule.Tiles,
                   })
                 }
               }
             } else if (this.props.user.user.final === true){
                this.props.history.push('/menu');
              }
          }, 1000)
        :null
        :null
      )

      showSlider(){
        this.setState({start:"1"})
        let welcome = document.getElementById("welcome");
        welcome.classList.remove("text-wrapper-active");
        let slider = document.getElementById("slider");
        slider.style.display = 'block';
        let slideOne = document.getElementById(`${this.state.start}`);
        slideOne.classList.add("text-wrapper-active")
      }



      slides = () => {
        const messages = this.state.messages;
        const length = messages.length;
        const listItems = messages.map((item) =>

          <div id={parseInt(parseInt(messages.indexOf(item))+parseInt(1))} className="text-wrapper">
            <h2><i className="far fa-envelope"></i><span>from:</span></h2>
            <h1>{`${item.name}`.toString()}</h1>
            <p>{`${item.message}`.toString()}</p>
          </div>
        );
        return (
           <div className="text">
             <div
               onClick={()=>this.setState({
                 receivedMessage:false,
                 showMessage:true,
                 firstMessageCheck: true,
               })}
               className="messages__close">
               <i class="fas fa-times"></i>
             </div>
             <div id="welcome" className="text-wrapper text-wrapper-active ">
               <h1 id="welcometitle">You received: {length} {length>1 ? 'messages' :'message'}</h1>
               <p id="welcomepa">Do you want to read?</p>
               <div id="btnwelcome" className="m-btn-wrapper">
                 <div  onMouseEnter={()=>this.onHover()} onClick={()=>{this.showSlider(); this.onClick() }}
                       className="buttonGot-2"
                       id="button" >
                   <svg>
                     <rect width='100' height='30'></rect>
                   </svg>
                   Yes
                 </div>
                 <div
                    onMouseEnter={()=>this.onHover()}
                   onClick={()=>{this.setState({receivedMessage:false,
                   showMessage:true});
                   this.onClick();
                  }}
                   className="buttonGot-2"
                   id="button"  >
                   <svg>
                     <rect width='100' height='30'></rect>
                   </svg>
                   no
                 </div>
               </div>
             </div>
             <div id="slider" className="slider">
              {listItems}
              <div id="sliderControl" className="slider-control">
                <button className="btnslider" onClick={()=>this.slider(-1)}><i class="fas fa-chevron-left"></i> Previous</button>
                <button className="btnslider" onClick={()=>this.slider(1)}>Next <i class="fas fa-chevron-right"></i></button>
              </div>
            </div>
           </div>
         );
      }


      tutorialSlider(n){
          let start = this.state.startTutorial;
          let length = 3;
          let nextSlideShow, prevSlideShow;
          let nextSlide = parseInt(parseInt(start)+parseInt(n));

          if (nextSlide <= length && nextSlide > 0){
              nextSlideShow = document.getElementById(nextSlide+ "slide");
              nextSlideShow.classList.add("Tutorial__slide-active")
              prevSlideShow = document.getElementById(start + "slide");
              prevSlideShow.classList.remove("Tutorial__slide-active")
              this.setState({startTutorial:nextSlide})
          }
      }


      slider(n){


        let start = this.state.start;
        let message = this.state.messages;
        let length = message.length;
        let nextSlideShow, prevSlideShow;

        let nextSlide = parseInt(parseInt(start)+parseInt(n));

        if (nextSlide <= length && nextSlide > 0){
            nextSlideShow = document.getElementById(nextSlide);
            nextSlideShow.classList.add("text-wrapper-active")
            prevSlideShow = document.getElementById(start);
            prevSlideShow.classList.remove("text-wrapper-active")
            this.setState({start:nextSlide})
        }
      }

      bigMessage = () =>{
        let messages = this.state.allmessages;
        let index = this.state.indexOfTheMessage;
        let theMessage = messages[`${index}`];



        return(
          <div className="text">
            <div
              onClick={()=>this.setState({
                openBigMessages: false,
              })}
              className="messages__close">
              <i class="fas fa-times"></i>
            </div>
            <div id={index} className="text-wrapper text-wrapper-active text-wrapper-envelope">
              <h2><i className="far fa-envelope"></i><span>from:</span></h2>
              <h1>{theMessage.name}</h1>
              <p>{theMessage.message}</p>
            </div>
          </div>
        )
      }

      openMessage = (index) =>{

        this.setState({
          openBigMessages: true,
          indexOfTheMessage: index
        })
      }

      soundManager(n){

        if (this.state.executed === false){
          this.setState({executed:true})
          let sound = n;
          let song1 = 'music/gameplay/FutureWorld_Dark_Loop_03.ogg'
          let song2 = 'music/gameplay/FutureWorld_PressOn_Loop.ogg'
          let song3 = 'music/gameplay/FutureWorld_PressOn_Loop_02.ogg'
          let song4 = 'music/gameplay/Military_DogFight_Loop.ogg'
          let tracks = ['Future World Dark', 'Press On', 'Press On 2', 'Dog Fight'];
          let standby = 'music/standby.mp3';
          let final = 'music/islands.mp3;'

          const random = (min, max) => {
              min = Math.ceil(1);
              max = Math.floor(4);
              return  Math.floor(Math.random() * (max - min + 1)) + min;
          }

          let x = random();
          let song, track;

          switch(x) {
            case 1:{
              song = song1;
              track = tracks[0];
              break;
            }
            case 2:{
              song = song2;
              track = tracks[1];
              break;
            }
            case 3:{
              song = song3;
              track = tracks[2];
              break;
            }
            case 4:{
              song = song4;
              track = tracks[3];
              break;
            }
          }

          switch(sound) {
             case "none": {
                this.setState({song:'', music:false})
                break;
              }
              case "intro": {
                 this.setState({song:standby, music: false})
                 break;
               }
               case "gameplay": {
                  this.setState({song:song, trackName:track, music:true})
                  break;
                }
              default: {
                this.setState({song:'', music: false})
                 break;
              }
            }
        }

      }





  render(){

    let user = this.props.user;
    let id = this.state.id;
    let state = this.state;


    return(

      <div className="game__container">

        <div className="noDisp">

          {this.checkProps(user)}
        </div>

        {
          this.state.final ?
          <div className="FINAL">
            <h1 id="endtitle">FINAL</h1>
            <div className="titlesContainer">
              <h1>Created by</h1>
              <p>Rijel Ek</p>
              <h1>Special thanks to</h1>
              <p>Roka Lazado for support</p>
              <h1>Music</h1>
              <p>DJ Counteract - Easter Island </p>
              <p>Eris Wheel - Delta </p>
              <p>Eris Wheel - Islands </p>
              <p>Daniel Gooding - Dark Future Music Collection (Unity Store)</p>
              <h1>Sound FX</h1>
              <p>BIG5AUDIO_UI & UX</p>
              <div className="NEWGAME">
                <Link id="linknewgame" to="/menu">START NEW GAME+</Link>
              </div>
            </div>
            <div className="Dots-2">
              <i class="dot-2"></i>
              <i class="dot-2"></i>
              <i class="dot-2"></i>
              <i class="dot-2"></i>
              <i class="dot-2"></i>
              <i class="dot-2"></i>
              <i class="dot-2"></i>
              <i class="dot-2"></i>
              <i class="dot-2"></i>
            </div>
          </div>
            :null
        }


        <Burger state={this.state} openMessage={this.openMessage} user={user}/>


        {this.state.gameplay ?
          <div  className="Modal Modal-ShowUp">
            <div className="Modal-revealer"></div>
            <div className="pattern pattern-pop"></div>
              <div className="modal-wrapper">
                <h1>Terminal will start in</h1>
                <h2 >...{this.state.countnum}</h2>
              </div>
          </div> : null
        }



        {
          this.state.receivedMessage ?
          <div className="box">
              {this.slides()}
          </div>
          :null
        }

        {
          this.state.openBigMessages ?
          <div className="box">
              {this.bigMessage()}
          </div>
          :null
        }


        {this.state.modal ?
          this.state.showMessage ?
          <div id="startTerminalBox" className="Modal Modal-ANIM">
          <div className="BG-TEXT">MEMO</div>
          <div className="pattern pattern-pop"></div>
          <div className="modal-wrapper">
              <h1 id="startTitle" className="Modal_h">Quantum Terminal is ready to be started</h1>
              <div id="startParagraph" className="modal-wrapper-text">
                <p>Your level: {this.state.level}</p>
                <p>Difficulty: {this.state.difficulty}</p>
                <p>You have: {this.state.time} seconds</p>
                <p>Streak: {this.state.currentStreak} / {this.state.streak}</p>
              </div>
              <div id="startButtons" className="buttonGot__wrapper-2">
                <div
                onMouseEnter={()=>this.onHover()}
                onClick={()=>
                  {this.run(); this.onClick();}
                  } className="buttonGot-2" id="button" >
                  <svg>
                    <rect width='100' height='30'></rect>
                  </svg>
                  Start
                </div>
                <div  onMouseEnter={()=>this.onHover()}  onClick={()=>{this.props.history.push("/menu"); this.onClick();}} className="buttonGot-2" id="button" >
                  <svg>
                    <rect width='100' height='30'></rect>
                  </svg>
                  Exit
                </div>
              </div>
          </div>
        </div>
      :null:null}

      {this.state.tutorial ?
        <div className="box">
          <div className="text">
              <div className="text-wrapper text-wrapper-active">
                <div className="tutorial-wrapper">
                  <div className="Tutorial__wrapper">

                  <img className="tutorialIMG" src="images/tutorial.gif" alt="tutorial"></img>
                  <div id="1slide" className="Tutorial__slide Tutorial__slide-active">
                    <p>Your job is simple. We render the pattern which unlocks the memory blocks. Memorize exact sequence of each appeared anchor point. When the display turns off, you need to repeat the path.</p>
                  </div>
                  <div id="2slide" className="Tutorial__slide ">
                    <p>To do that you need to grab the first point and without releasing it drag to the next block. When you finish the pattren, release point to start verification.</p>
                  </div>
                  <div id="3slide" className="Tutorial__slide ">
                    <p>Each level consist of several streaks. You need to unlock a few chains without interaption to proceed to the next level.</p>
                  </div>
                  <div className="slider-control">
                    <button className="btnslider" onClick={()=>this.tutorialSlider(-1)}><i class="fas fa-chevron-left"></i> Previous</button>
                    <button className="btnslider" onClick={()=>this.tutorialSlider(1)}>Next <i class="fas fa-chevron-right"></i></button>
                  </div>
                  <div onMouseEnter={()=>this.onHover()}  onClick={()=>{this.setState({tutorial:false}); this.onClick();}} className="buttonGot-2" id="button" >
                    <svg>
                      <rect width='100' height='30'></rect>
                    </svg>
                    GOT IT!
                  </div>
                </div>
                </div>
                </div>
                </div>
            </div>
          :null}

        {this.state.showMessage ?
          this.state.game ?
            this.state.firstEnter ?
                  this.state.messa ?
                    this.firstMessage()
                    : <div className="Modal Modal-ShowUp">
                    <div className="BG-TEXT">MEMO</div>
                    <div className="pattern pattern-pop"></div>
                    <div className="modal-wrapper">
                        <h1 className="Modal_h Modal_h-ShowUp">Quantum Terminal is ready to be started</h1>
                        <div className="modal-wrapper-text">
                          <p>Your level: {this.state.level}</p>
                          <p>Difficulty: {this.state.difficulty}</p>
                          <p>You have: {this.state.time} seconds</p>
                          <p>Streak: {this.state.currentStreak} / {this.state.streak}</p>
                        </div>
                        <div className="buttonGot__wrapper-2">
                          <div onMouseEnter={()=>this.onHover()}  onClick={()=>{this.run(); this.onClick();}} className="buttonGot-2" id="button" >
                            <svg>
                              <rect width='100' height='30'></rect>
                            </svg>
                            Start
                          </div>
                          <div onMouseEnter={()=>this.onHover()}  onClick={()=>{this.props.history.push("/menu"); this.onClick();}} className="buttonGot-2" id="button" >
                            <svg>
                              <rect width='100' height='30'></rect>
                            </svg>
                            Exit
                          </div>
                        </div>
                    </div>
</div>
                      :  <div className="Modal Modal-ShowUp">
                    <div className="BG-TEXT">MEMO</div>
                    <div className="pattern pattern-pop"></div>
                    <div className="modal-wrapper">
                        <h1 className="Modal_h Modal_h-ShowUp">Quantum Terminal is ready to be started</h1>
                        <div className="modal-wrapper-text">
                          <p>Your level: {this.state.level}</p>
                          <p>Difficulty: {this.state.difficulty}</p>
                          <p>You have: {this.state.time} seconds</p>
                          <p>Streak: {this.state.currentStreak} / {this.state.streak}</p>
                        </div>
                        <div className="buttonGot__wrapper-2">
                          <div  onMouseEnter={()=>this.onHover()}  onClick={()=>{this.run(); this.onClick();}} className="buttonGot-2" id="button" >
                            <svg>
                              <rect width='100' height='30'></rect>
                            </svg>
                            Start
                          </div>
                          <div onMouseEnter={()=>this.onHover()}  onClick={()=>{this.props.history.push("/menu"); this.onClick();}} className="buttonGot-2" id="button" >
                            <svg>
                              <rect width='100' height='30'></rect>
                            </svg>
                            Exit
                          </div>
                        </div>
                    </div>
                </div>
          :null:null}

          {this.state.fail ?
            <div className="Modal Modal-ShowUp">
              <div className="Modal-revealer"></div>
              <div className="BG-TEXT">MEMO</div>
              <div className="pattern pattern-pop"></div>
                <div className="modal-wrapper">
                  <h1 className="Modal_h Modal_h-ShowUp">You failed!</h1>
                  <p>Do you want to restart the terminal?</p>
                  <div className="buttonGot__wrapper-2">
                    <div onMouseEnter={()=>this.onHover()}  onClick={()=>{this.run(); this.onClick();}} className="buttonGot-2" id="button" >
                      <svg>
                        <rect width='100' height='30'></rect>
                      </svg>
                      Restart
                    </div>
                    <div  onMouseEnter={()=>this.onHover()} onClick={()=>{this.props.history.push("/menu"); this.onClick();}} className="buttonGot-2" id="button" >
                      <svg>
                        <rect width='100' height='30'></rect>
                      </svg>
                      Exit
                    </div>
                  </div>
                </div>
            </div>
            :null}

            {this.state.win ?
              <div className="Modal Modal-ShowUp">
                <div className="Modal-revealer"></div>
                <div className="BG-TEXT">MEMO</div>
                <div className="pattern pattern-pop"></div>
                  <div className="modal-wrapper">
                    <h1 className="Modal_h Modal_h-ShowUp">You won!</h1>
                    <div className="buttonGot__wrapper-2">
                      <div onMouseEnter={()=>this.onHover()}  onClick={()=>{this.receiveMessages(); this.onClick();}} className="buttonGot-2" id="button" >
                        <svg>
                          <rect width='100' height='30'></rect>
                        </svg>
                        Continue
                      </div>
                    </div>
                  </div>
              </div>
              :null}


        <div className="header__container">
          <Header/>
        </div>

        <div className="content__container">

        <div className="Level">
              <div className="noDisp">{this.checkProps(user)}</div>



                <div className="win">
                  <p>Correct!</p>
                </div>



              <Gameboard/>

                              <div className="blocker">
                                <div className="blocker-wrapper">
                                  <div id="standcircle" className="blocker-wrapper-circle"></div>
                                  <i class="fas fa-exclamation-triangle"></i>
                                  <p id="standby">STAND BY</p>
                                </div>
                              </div>
        </div>


        </div>

        <div className="sidebar__container">
        <div className="stats__wrapper">
          <div className="stats">
            <div className="stats__item timer">
              <p id='TimerDisplay'>Time left: {this.state.seconds>0 ? <span>{this.state.minutes}:{this.state.seconds}</span> :null} </p>
            </div>
          </div>
          <div className="stats">
            <div className="stats__item">
              <p>Level: {this.state.level ? <span>{this.state.level}</span> :null}</p>
            </div>
          </div>
          <div className="stats">
            <div className="stats__item">
              <p>Score: {this.state.score ? <span>{this.state.score}</span> :null}</p>
            </div>
          </div>
          <div className="stats">
            <div className="stats__item">
              <p>Total score: {this.state.totalscore ? <span>{this.state.totalscore}</span> :null}</p>
            </div>
          </div>
          <div className="stats">
            <div className="stats__item">
              <p>Mistakes: {this.state.mistakes} </p>
            </div>
          </div>
          <div className="stats">
            <div className="stats__item">
              <p>Streak: {this.state.streak ? <span>{this.state.currentStreak}/{this.state.streak}</span> :null} </p>
            </div>
          </div>
        </div>
        </div>


        <div className="footer__container">


          <div className="footer__wrapper">

            <div className="footer__left">
              <a href="https://twitter.com/memo_quantum" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/memothegame/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="https://ko-fi.com/ekrijel" rel="noopener noreferrer" target="_blank"><i class="fas fa-coffee"></i></a>
              <a href="https://www.patreon.com/stampedeproduction" rel="noopener noreferrer" target="_blank"><i class="fab fa-patreon"></i></a>
              <a href="https://www.twitch.tv/alittepanic" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitch"></i></a>
              <a href="https://discord.gg/y5ajg7" rel="noopener noreferrer" target="_blank"><i className="fab fa-discord"></i></a>
              <a href="https://www.youtube.com/channel/UCZaOcxON92n-NLBqjeI6C5Q" rel="noopener noreferrer" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>

            <div className="fullscreen-container">
              <p id="btnFullscreen" className="fullscreen fullscreen-black">FULLSCREEN</p>
            </div>



              <div id="playerUI" className="footer__right">
                {this.state.playing ?
                <div id="player" className="player">
                  <div class="playlist">
                    <p>{this.state.trackName}</p>
                  </div>
                    <div className="equaliser-container">
                      <ol className="equaliser-column">
                        <li className="colour-bar colour-bar-2"></li>
                      </ol>
                      <ol className="equaliser-column">
                        <li className="colour-bar colour-bar-2"></li>
                      </ol>
                      <ol className="equaliser-column">
                        <li className="colour-bar colour-bar-2"></li>
                      </ol>
                      <ol className="equaliser-column">
                        <li className="colour-bar colour-bar-2"></li>
                      </ol>
                      <ol className="equaliser-column">
                        <li className="colour-bar colour-bar-2"></li>
                      </ol>
                    </div>
                  </div>
                   :null}
                </div>



        </div>
  </div>
          <div className="illustration">
            <img src="images/ill.png" alt="img"></img>
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


export default connect(mapStateToProps)(Game)
