import React, {Component} from 'react';
import $ from 'jquery';

class Buttons extends Component {

      state = {
        score: '0',
        fail: false,
        win: false,
        midWin: false,
        clicked: false,
        mistakes: "0",
        pattern: '',
        currentStreak:'0',
      }

      componentDidMount(){

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
          var clicked = this.state.clicked;



          ///////////////////////////////////////////

                  // II. GENERATE BUTTONS //

          (function generatebuttons(){

            var patterncontainer  = document.getElementById("buttonground");
            for (var i = 0; i < 30; i++) {

              var button = document.createElement("div");
              var orbit = document.createElement("div");
              orbit.classList.add("orbit");


              var classes =  [
                'button'
              ];
              classes.map(function(item) {
                  return button.classList.add(item);
              });
              let id = parseInt(i) + parseInt(1);
              button.id = "button" + id;



              var startposition = document.getElementById("button" + i);
            }
          }());


          ///////////////////////////////////////////

                  // III. CHECK IF MOUSE IS DOWN:

          (function main(){
            if(!window.navigator.msPointerEnabled) {

              $(".button").on("mousedown", function (event){
                if(!this.state.clicked){
                  this.setState({clicked:true})
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
                }


              }.bind(this));

              ///////////////////////////////////////////

                      //  IV. - MOUSE MOVE

              $(document).bind("mousemove", function(event) {
                  if (this.state.clicked === true){ //to avoid mousemove triggering before click

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
                        endpointnumber = e.target.id.split("button").join("");
                        if (startpointnumber != endpointnumber) {

                          // prevent default
                            if (e && e.preventDefault){
                                     e.preventDefault();
                                  }
                            // change btn on active
                            if (e.target.classList.contains(`path`)) {
                              $("#" + e.target.id).removeClass("button").addClass("activebutton");
                              $("#" + e.target.id).removeClass("path");
                              score = parseInt(score+100);
                              this.setState({
                                score:score
                              })
                            } else {
                              $("#" + e.target.id).removeClass("activebutton").addClass("duplicatebutton");
                              let mistake = this.state.mistakes;
                              let sum = parseInt(mistake + 1);
                              this.setState({
                                fail:true,
                                mistakes: sum,
                                clicked: false
                              })
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


                      }.bind(this));

                    }
                  ///////////////////////////////////////////

                          // V.  MOUSE UP    //

                $("#buttonground").on("mouseup", function (event){
                  if(this.state.clicked === true) {

                    if (event && event.preventDefault){
                             event.preventDefault();
                          }

                          $("#line" + startpointnumber).remove();
                            alert("The game ended: " + "Password: " + password + "Pattern: " + this.props.pattern  )
                            this.setState({clicked:false});

                            if(password === this.props.pattern){

                              let curr = this.props.state.currentStreak;
                              let st = this.props.state.streak;

                              if(curr < st) {

                                let c = this.props.state.currentStreak;
                                this.props.Midwin();
                                let sum = parseInt(c+1);
                                this.setState({
                                  currentStreak: sum
                                })
                              } else {
                                let score = this.state.score;
                                this.props.Win(score);
                              }

                            }
                            else {
                              this.props.Fail();
                              let mistake = this.state.mistakes;
                              let sum = parseInt(mistake + 1);
                              this.setState({
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

            $("#patternfield").append(htmlLine);
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

      componentDidUpdate(){

        let score, mistakes, currentStreak;
        score = this.state.score;
        mistakes = this.state.mistakes;
        currentStreak = this.state.currentStreak;

        this.props.scoreUpdate([score, mistakes, currentStreak]);

      }


      render(){
        let state = this.props.state;
        let pattern = this.props.pattern;

        return(
          <div id="buttonground" className="buttonground"></div>
        )
      }

  }

  export default Buttons;
