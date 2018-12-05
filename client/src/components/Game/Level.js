import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import Gameboard from './board/gameboard';
import Buttons from './buttons/buttons';
import { getUser, updateUser } from '../../actions';
import $ from 'jquery';


class Level extends PureComponent {

  constructor(props) {
          super(props);

          this.generatorPath = this.generatorPath.bind(this);  // 1 step, generate pattern
          this.buttonSelector = this.buttonSelector.bind(this); // 2 step select buttons according to pattern
          this.buttonHighlight = this.buttonHighlight.bind(this); // 3 step highlight buttons

          this.midWin = this.midWin.bind(this);
          this.win = this.win.bind(this);
          this.fail = this.fail.bind(this);
          this.timer = this.timer.bind(this);

          this.state = {
              userdata:{
                _id:this.props.user.login.id,
                level:'',
                wrong:'',
                score:'',
              },

            start:false,
            showMessage: true, // Intro Message
            game: false,
            gameplay:false, //Countdown before start
            restart: false,
            timeout: false,
            win: false,
            fail: false,
            continue: false,
            generator: false, //Generate path

            score:'',
            pattern:'',
            path:'',

            seconds:'',
            minutes:'',
            countdown:'3',
            countnum:'',
            time:'',

            clicked:false,
            pattern:"",
            currentStreak:'0',
            mistakes:""
          }
      }

  componentWillMount(props){
    this.props.dispatch(getUser(this.props.user.login.id))

    this.setState({
      userdata:{
          level:this.props.user.user.level,
          score:this.props.user.user.score
      }
    })
  }




  fail(){
    document.querySelector(".blocker").classList.add('blocker-active');
    this.setState({
        pattern:"",
        path:'',
        fail:true
    })
    this.props.dispatch(updateUser(this.state.userdata));
    alert("fail");
    console.log(this.state.userdata)
  }

  midWin(){
    document.querySelector(".blocker").classList.add('blocker-active');
    console.log("MidWin");
  }

  win(){
    document.querySelector(".blocker").classList.add('blocker-active');
    alert("Win")
  }

  componentDidMount(){
    document.querySelector(".blocker").classList.add('blocker-active');
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

        var patterncontainer  = document.createElement("div");
        patterncontainer.classList.add("buttonground");
        patterncontainer.id = "buttonground";
        var ground = document.querySelector(".playground");
        ground.appendChild(patterncontainer);



        for (var i = 0; i < 30; i++) {

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
            console.log("click")
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
                          clicked = false;
                          this.setState({
                            userdata:{
                              _id:this.props.user.login.id,
                              mistakes: sum,
                            },
                            clicked: false
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
                        alert("The game ended: " + "Password: " + password + "Pattern: " + this.state.pattern  )
                        this.setState({clicked:false});

                        if(password === this.state.pattern){

                          let curr = this.props.state.currentStreak;
                          let st = this.props.state.streak;

                          if(curr < st) {

                            let c = this.props.state.currentStreak;
                            this.midWin();
                            let sum = parseInt(c+1);
                            this.setState({
                              currentStreak: sum
                            })
                            console.log("Current SreaK: " + curr)
                            console.log("StreaK: " + st)

                          } else {
                            let score = this.state.score;
                            this.win();
                          }

                        }
                        else {
                          this.fail();
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

        $("#butonground").append(htmlLine);
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
          }, `${timeout}`)

    });
    console.log("Buttons highlighted")
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
    console.log("Buttons selected")
  }

  /// II - GENERATOR PATH
  generatorPath(){

            let score = "";

            let level = this.props.user.user.level;
            console.log(this.props.user.user.level)
            let incr = 1;

            let sum = parseInt(level)+parseInt(incr);
            console.log("Level is " + level)
            console.log("Sum is" + sum)

            let size = 30;
            let activeTiles = []; // active tiles
            let firstTile = []; // first active tile
            let avoid =[]; // avoid these tiles
            // let numberOfTiles = parseInt(sum)+parseInt(1);
            let numberOfTiles = 3;
            let step1 = [];
            let elemenator=[];
            let Test = [];
            let elemenateArray = [];
            console.log("Number of tiles: " + numberOfTiles)

            const getRandomIntInclusive = (min, max) => {
              min = Math.ceil(1);
              max = Math.floor(size);
              return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
            }

            let random = `${getRandomIntInclusive()}`
            let z = parseInt(random);
            let y = []; // niddle step

            console.log("First: " + z);

            activeTiles.push(z);
            firstTile.push(z);
            y.push(z);
            avoid.push(z);


            var build;
            for (build = 0; build < `${numberOfTiles}`; build++) {


              let step1 = [];
              let beg = parseFloat(y-1);

              console.log("beg: " + beg);

                if (y%5 === 0){
                 step1.push(
                      (Math.round(y)-1),
                      (Math.round(y)+5),
                      (Math.round(y)-5),
                      (Math.round(y)-6),
                      (Math.round(y)+4),
                    );
              console.log("ENd");
          } else if (beg%5 ===0) {
                  step1.push(
                    (Math.round(y)+1),
                    (Math.round(y)+5),
                    (Math.round(y)-5),
                    (Math.round(y)-4),
                    (Math.round(y)+6),
                  );
              console.log("BEgin");
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
          console.log("Any");

              };

          console.log("Step1: " + step1)

              for (let i=0; i < step1.length; i++) {
                if (step1[i] > 0 && step1[i] < size+1) {
               } else {
                 step1.splice(i,1);
               }
              }

              console.log("Step after splice: " + step1)

                  var finalArray = step1.filter(myCallBack);
                  function myCallBack(el){
                    return avoid.indexOf(el) < 0;
                  }

                  console.log("Final array: " + finalArray)

                  let length = finalArray.length;
                  const newRandom = (min, max) => {
                        min = Math.ceil(0);
                        max = Math.floor(parseInt(length)-parseInt(1));
                        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
                  }

                  let x = newRandom();

                  console.log("Next random: " + x);

                  const Test = [];

                  finalArray.forEach((item) => {
                    if(item > 0 && item < 50 ){
                      let p = finalArray[`${x}`];
                      Test.push(p);
                    }
                  });

                  console.log("Test array: " + Test)

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
             let pattern
             console.log("Path generated")
             console.log(activeTiles)
  }



  timer(){
    this.setState({timeout:false})
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
        clearInterval(gametime);
        this.stopTime();
      }

      if (parseFloat(totalseconds) < parseInt(percentage)){
        document.querySelector(".Timer").classList.add("warning");
        console.log("Low")
      }

      this.setState({
        seconds:seconds,
        minutes: minutes
      })
      this.props.timerUI([minutes,seconds])
    }, 1000)
  }

  run = () =>{
    console.log("Run executed")
    let i = this.state.countdown;
    let state = this.state;
    this.setState({
      showMessage:false,
      gameplay:true
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
          // this.timer();
        }
    }, 1000);
}


  checkProps = (user,state) => (
    this.props.user.user ?
    setTimeout(()=>{
        this.setState({
          game:true,
          time: state.time,
          minutes:state.minutes,
          seconds:state.seconds
         })
    }, 2000)
    : null
  )

  componentDidUpdate(){

    let score, mistakes, currentStreak;
    score = this.state.score;
    mistakes = this.state.mistakes;
    currentStreak = this.state.currentStreak;

    this.props.handleForUpdate([score, mistakes, currentStreak]);

  }



  render(){

    let user =this.props.user;
    let state = this.props.state;
    let handleForUpdate = this.props.handleForUpdate;

    let pattern = this.state.pattern;

    return(

      <div className="Level">
            <div className="noDisp">{this.checkProps(user, state)}</div>
            {this.state.gameplay ?
              <div  className="Modal">
                <div className="Modal-revealer"></div>
                <div className="pattern pattern-pop"></div>
                  <div className="modal-wrapper">
                    <h1>Terminal will start in</h1>
                    <h2 >...{this.state.countnum}</h2>
                  </div>
              </div> : null
            }
            <div className="blocker"></div>
            <div className="dialogue">
              <div className="ava"><img src='images/face.png' alt=""></img></div>
              <div className="name">
                <h1>Icey</h1>
                <p>Hello, starnger, my name is Icey, I will guide you</p>
              </div>
            </div>

            {this.state.showMessage ?
                this.state.time ?
                  this.state.game ?
                    <div className="Modal">
                      <div className="Modal-revealer"></div>
                      <div className="BG-TEXT">MEMO</div>
                      <div className="pattern pattern-pop"></div>
                      <div className="modal-wrapper">
                          <h1 className="Modal_h">Quantum Terminal is ready to be started</h1>
                          <p>Your level: {this.props.state.level}</p>
                          <p>Difficulty: {this.props.state.difficulty}</p>
                          <p>For beating game you will have: {this.state.minutes}:{this.state.seconds}</p>
                          <p>Streak: {this.props.state.currentStreak}/{this.props.state.streak}</p>
                          <div className="q">
                            <div className="asker asker-4" onClick={this.run}>Start</div>
                            <div className="asker asker-5">Get back to main menu</div>
                            <div className="asker asker-6">Tutorial</div>
                          </div>

                      </div>
                    </div>
                  :null
                :null
              :null}

              {this.state.fail ?
                <div className="Modal">
                  <div className="Modal-revealer"></div>
                  <div className="BG-TEXT">MEMO</div>
                  <div className="pattern pattern-pop"></div>
                    <div className="modal-wrapper">
                      <h1 className="Modal_h">You failed!</h1>
                      <p>Want to restart the terminal?</p>
                      <div className="q">
                        <div className="asker asker-1">Yes</div>
                        <div className="asker asker-2">No</div>
                      </div>
                    </div>
                </div>
                :null}



            <Gameboard/>


      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        us:state.us
    }

  }


export default connect(mapStateToProps)(Level)
