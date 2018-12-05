import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUser, updateUser } from '../../actions';

import Header from './header/header';
import Sidebar from './sidebar/sidebar';

import $ from 'jquery';

const generate = (user) =>{

  let level = user.user.level; //player level
  let difcount = user.user.difcount; // player difficulty inc
  let increment = parseInt(level)+parseInt(difcount);

  let size = 50;
  let activeTiles = []; // active tiles
  let firstTile = []; // first active tile
  let avoid =[]; // avoid these tiles
  let numberOfTiles = parseInt(increment)+4; // number of overall active tiles
  let score = "";

  console.log(numberOfTiles)

  /////////////   ---- additional

  let step1 = [];
  let elemenator=[];
  let Test = [];
  let elemenateArray = [];

      ///////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////

                  ///  GENERATING THE EMPTY FIELD ///

        for (let i = 0; i < size; i++) {

          let cell, cellActive;

          cellActive = document.createElement("div");
          cell = document.createElement("div");

          let decoration = document.createElement("div");
          let decorationItem1 = document.createElement("div");
          let decorationItem2 = document.createElement("div");
          let decorationItem3 = document.createElement("div");
          let decorationItem4 = document.createElement("div");
          let decorationItemPlus1 = document.createTextNode("+");
          let decorationItemPlus2 = document.createTextNode("+");
          let decorationItemPlus3 = document.createTextNode("+");
          let decorationItemPlus4 = document.createTextNode("+");

          decoration.classList.add("decoration");
          decorationItem1.classList.add("decoration__item-1", "decoration__item");
          decorationItem2.classList.add("decoration__item-2", "decoration__item");
          decorationItem3.classList.add("decoration__item-3", "decoration__item");
          decorationItem4.classList.add("decoration__item-4", "decoration__item");

          decorationItem1.appendChild(decorationItemPlus1);
          decorationItem2.appendChild(decorationItemPlus2);
          decorationItem3.appendChild(decorationItemPlus3);
          decorationItem4.appendChild(decorationItemPlus4);

          decoration.appendChild(decorationItem1);
          decoration.appendChild(decorationItem2);
          decoration.appendChild(decorationItem3);
          decoration.appendChild(decorationItem4);


          const classes =  [
            'playground__item',
            `playground__item--${i+1}`
          ];


          classes.map(function(item) {
              return cell.classList.add(item);
          });

          cellActive.classList.add("cellActive");

          let element = document.getElementById("playground");
            element.appendChild(cell);

            cellActive.appendChild(decoration);
            cell.appendChild(cellActive);

        }

  ///////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

                //  GENERATING THE PATH  //


     //
     // II - 1 Random NUMBER (from 1 to 'Size of the map')
     //

     const getRandomIntInclusive = (min, max) => {
       min = Math.ceil(1);
       max = Math.floor(size);
       return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
     }

     let z = `${getRandomIntInclusive()}`;
     let y = []; // middle step


     activeTiles.push(z);
     firstTile.push(z);
     y.push(z);
     avoid.push(z);

     console.log("Z is " + z)

     //
     // III - Selecting surronding tiles (Start of the loop)
     //

     var build;
     for (build = 0; build < `${numberOfTiles}`; build++) {


       let step1 = [];
       let step2 = [];
       let int = y/10;
       let beg = (int)-0.1;

       console.log("Int is" + int)
       console.log("beg is" + beg)

         if (int === parseInt(int, 10)){
          step1.push(
               (Math.round(y)-1),
               (Math.round(y)+10),
               (Math.round(y)+9),
               (Math.round(y)-10),
               console.log("End of the field")
             );
         } else if (beg === parseInt(int, 10)) {
           step1.push(
             (Math.round(y)+1),
             (Math.round(y)+10),
             (Math.round(y)+11),
             (Math.round(y)-10),
             (Math.round(y)-11),
             console.log("Start of the field")
           );


         }else {
           step1.push(
             (Math.round(y)+1),
             (Math.round(y)-1),
             (Math.round(y)+10),
             (Math.round(y)+9),
             (Math.round(y)+11),
             (Math.round(y)-10),
             (Math.round(y)-11),
             (Math.round(y)-9),
             console.log("Any tile")
           );


       };

       console.log("Step 1 :" + step1)
       console.log("Avoid these:" + avoid)

       //
       // IV. Removing everything less than 0 and more than map size
       //
       //

       for (var i=0; i < step1.length; i++) {
         if(step1[i] < 0 || step1[i] > 50) {
           console.log("Less 0: " + step1[i] )
         } else if (step1[i] > 0 && step1[i] < 50) {
           step2.push(step1[i]);
           console.log("More 0: " + step1[i] )
         }
       }

       console.log("Step2 : " + step2)


       //
       // V. Check if array contain items from Avoid array
       //
       //

       let elemenator = [];

       for (var i = 0; i < avoid.length; i++) {
         for (var j = 0; j < step2.length; j++){
             if (step2[j] == avoid[i]) {
              elemenator.push(step2[j]);
              step2.splice(j,1);
            }
         }
       }


      let length = step2.length;

      console.log("Repeatable elements: " + elemenator);
      console.log("The rest: " + step2);
      console.log("The length of the last array is: " + step2.length);
      console.log("Maximum: " + parseInt(`${length}`-1));

      const newRandom = (min, max) => {
            min = Math.ceil(0);
            max = Math.floor(parseInt(`${length}`-1));
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
      }

      y = [];
      let x = newRandom();
      let nextNumber = [];
      activeTiles.push(step2[`${x}`]);
      avoid.push(step2[`${x}`]);
      y.push(step2[`${x}`]);

      console.log("Next Stage. New Random Number is: " + x);
      console.log("Next number is: " + y);

      elemenator = [];
      step1 = [];
      step2 = [];

      console.log("Elemenator 0: " + elemenator);
      console.log("Step1: " + step1);
      console.log("Step2: " + step2);



      } // END OF THE LOOP


  /////////////////// TEST /////////////////////


  console.log("Active Tiles: " + activeTiles)
  console.log("Avoid these: " + avoid)


  ///////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

              ///  PART II. GAMEPLAY ///


  ////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////////////

          // II. GENERATE BUTTONS & other elements for tiles //

  ///////////////////////////////////////////////////////////////////////


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
      var getClickStarted = false;
      var htmlLine;
      var startpointnumber=0;
      var endpointnumber=0;

        ///////////////////////////////////////////

            // I. Check if Password is Set  //

        ////////////////////////////////////////////

      (function checkIfPasswordIsSet() {
        if (localStorage.getItem("password")) {
          passwordset = true;
        } else {
          console.log("Passwi")
        }
      }());


      ///////////////////////////////////////////

              // II. GENERATE BUTTONS //

      ////////////////////////////////////////////


      (function generatebuttons(){

        var patterncontainer  = document.getElementById("patternfield");
        for (var i = 1; i <=50; i++) {

          var button = document.createElement("div");
          var plusCon = document.createElement("div");
          var plus = document.createTextNode("+");


          var classes =  [
            'button'
          ];
          classes.map(function(item) {
              return button.classList.add(item);
          });


          button.id = "button" + i;
          button.appendChild(plus);
          button.appendChild(plus);
          patterncontainer.appendChild(button);


          var startposition = document.getElementById("button" + i);
        }

      }());

      for (var i=0; i<6; i++) {
        var path = [
          "5",
          "6",
          "7",
          "21",
          "22",
          "23"
        ]
        var Test = document.getElementById('button'+ path[i]);
        $(Test).addClass("path");
      }




      ///////////////////////////////////////////

              // III. CHECK IF MOUSE IS DOWN:

                // - MOUSE clicked
                // - HIT patternStored
                // - Call function line add

               //

      ////////////////////////////////////////////

      (function main(){
        if(!window.navigator.msPointerEnabled) {

          $(".button").on("mousedown", function (event){

            console.log("ID " + event.target.id );


            if(!getClickStarted){

              getClickStarted = true;

              var offset1 = $("#" + event.target.id).position();


              centerX1 = offset1.left + $("#" + event.target.id).innerWidth()/2; //22.5 is the margin of the button class
              centerY1 = offset1.top + $("#" + event.target.id).innerHeight()/2;



              if (event && event.preventDefault){
                         event.preventDefault();
                    }


            $("#" + event.target.id).removeClass("button").addClass("activebutton");  //HIT TEST, CHANGE CLASS ON ACTIVE
            score = parseInt(score+100);
            var 	password = event.target.id.split("button").join("");
             startpointnumber = event.target.id.split("button").join("");

            console.log("Score is: " + score)
              addline(startpointnumber, centerX1, centerY1); //initiating a moving line
            }


          });


          ///////////////////////////////////////////

                  //  IV. - MOUSE MOVE


                  // - check if there is dublicate
                  // - mouse move

                  //

          ////////////////////////////////////////////



          $(document).bind("mousemove", function(event) {
              if (getClickStarted){ //to avoid mousemove triggering before click

                  if (event && event.preventDefault){
                     event.preventDefault();
                  }

                  curX = event.clientX - $("#patternfield").offset().left;
                  curY = event.clientY - $("#patternfield").offset().top;

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
                        } else {
                          $("#" + e.target.id).removeClass("activebutton").addClass("duplicatebutton");
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

                  });
              }

              ///////////////////////////////////////////

                      // V.  MOUSE UP    //

              ////////////////////////////////////////////


            $("#patternfield").on("mouseup", function (event){

                getClickStarted = false;

              if(getClickStarted) {
                if (event && event.preventDefault){
                         event.preventDefault();
                      }
                      $("#line" + startpointnumber).remove();
              }

            });
          });

        } else {
          alert ("INTERNET EXPLORER NOT SUPPORTED!!");
        }
      }());


      ///////////////////////////////////////////

              //  VI. - ADD LINE   //

      ////////////////////////////////////////////

      function addline(startpointnumber, centerX1, centerY1){
        var htmlLine =
        "<div id='line" + startpointnumber + "' class='line' style='position: absolute; top: " + centerY1 + "px; \
                    left: " + centerX1 + "px; -webkit-transform-origin: 2px 2px; -moz-transform-origin: 2.5% 50%;'></div>"

        $("#patternfield").append(htmlLine);
      }



      ///////////////////////////////////////////

              // VII. GET LENGTH //

      ////////////////////////////////////////////

      function getlength(number) {
          return number.toString().length;
      };



            ///////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////

                        ///  Selecting Elments ///


            ////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////


            setTimeout(()=>{
              for (let i=0; i < activeTiles.length; i++) {

                let num = parseFloat((i+5));
                let sec = parseFloat((num/10));

                let appearstyle = `
                  transition: all ${sec}s ease-in
                `
                document.getElementById(`button${activeTiles[i]}`).classList.toggle(`activebutton`);
                document.getElementById(`button${activeTiles[i]}`).style = appearstyle;

                console.log(sec);
              }
            }, 1000)


      ////////////////////////////////////////////
      ///////////////////////////////////

      // timer
      ////////////////////////


          var myTimer;
          function clock() {
            myTimer = setInterval(myClock, 1000);
            var c = 120; //Initially set to 1 hour


            function myClock() {
              --c
              var seconds = c % 60; // Seconds that cannot be written in minutes
              var minutes = (c - seconds) / 60; // Gives the seconds that COULD be given in minutes
              var minutesLeft = minutes % 60; // Minutes that cannot be written in hours
              var hours = (minutes - minutesLeft) % 60;
              // Now in hours, minutes and seconds, you have the time you need.

              var element = document.querySelector('.UI__timer');
              element.innerHTML = `${hours}:${minutes}:${seconds}`;

              if (c == 0) {
                clearInterval(myTimer);
              }
            }
          }
          clock();
    });

}

// PLAYGROUND
class Game extends PureComponent {

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


      // Check level
      this.props.dispatch(getUser(this.props.user.login.id))


        /// LOADER
    }

    componentDidMount() {

    }

    renderUser = (user) => (
        user.user ?
          <div>
          <p>Level: {user.user.level} </p>
          <p>Difficulty: {user.user.difficulty} </p>
          </div>
        :null
    )

    renderfield = (user) =>(
        user.user ?
          generate(user)
        :null
    )




// RENDER FIELD
render() {

    let user = this.props.user;

    return(

      <div className="container2">
          
              <Header/>
              <Sidebar/>

              {this.renderUser(user)}
              {this.renderfield(user)}


              <div id="patternfield" className="patternfield">
                <div id="playground" className="playground"></div>
              </div>

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
