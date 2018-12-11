import React, {Component} from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import $ from 'jquery';

import White from './white';



class Intro extends Component {

transition(){
  var audioplay = document.createElement('audio');
  audioplay.setAttribute('src', './music/intro.mp3');

  var transitionTimeline = new TimelineLite();

  transitionTimeline.add(TweenMax.to('#intro-logo', .1, {display:"none"}),.1);
  transitionTimeline.add(TweenMax.to('#introfooter', .1, {display:"none"}),.1);
  transitionTimeline.add(TweenMax.to('#transition-g', .5, {display:"flex"}),.1);
  transitionTimeline.add(TweenMax.fromTo('#circle1', .5, {y:"0", height:"20"}, {y:"-10", height:"25"}),.2);
  transitionTimeline.add(TweenMax.fromTo('#circle2', .5, {y:"0", height:"20"}, {y:"10", height:"25"}),.2);
  transitionTimeline.add(TweenMax.to('#circle1', .5, {y:"-100", height:"20"}),.25);
  transitionTimeline.add(TweenMax.to('#circle2', .5, {y:"100", height:"20"}),.25);
  transitionTimeline.add(TweenMax.to('#circlewrap', .5, {rotation:"180_cw"}), .35);

  transitionTimeline.add(TweenMax.to('#circle1', .3, {y:"100", height:"20"}),1);
  transitionTimeline.add(TweenMax.to('#circle2', .3, {y:"-100", height:"20"}),1);


  //Bounce
  transitionTimeline.add(TweenMax.to('#circle1', .3, {y:"70"}),1.3); /// 1
  transitionTimeline.add(TweenMax.to('#circle2', .3, {y:"-70"}),1.3);

  transitionTimeline.add(TweenMax.to('#circle1', .3, {y:"100"}),1.6);
  transitionTimeline.add(TweenMax.to('#circle2', .3, {y:"-100"}),1.6);

  transitionTimeline.add(TweenMax.to('#circle1', .3, {y:"80"}),1.9);  // 2
  transitionTimeline.add(TweenMax.to('#circle2', .3, {y:"-80"}),1.9);

  transitionTimeline.add(TweenMax.to('#circle1', .3, {y:"100"}),2.2);
  transitionTimeline.add(TweenMax.to('#circle2', .3, {y:"-100"}),2.2);

  //Line-bridge
  transitionTimeline.add(TweenMax.fromTo('#lineBridge', .3, {display:'none', scaleY:(1)}, {display:'block', scaleY:(35)}),1.03);
  transitionTimeline.add(TweenMax.to('#lineBridge', .3, {scaleY:(28)}),1.3); /// 1
  transitionTimeline.add(TweenMax.to('#lineBridge', .3, {scaleY:(38)}),1.6);
  transitionTimeline.add(TweenMax.to('#lineBridge', .3, {scaleY:(30)}),1.9);  // 2
  transitionTimeline.add(TweenMax.to('#lineBridge', .3, {scaleY:(38)}),2.2);

  // Big Circle
  transitionTimeline.add(TweenMax.fromTo('#bigcircle', .5, {display:"none", height:"1", width:'1'}, {display:"block", height:"300", width:'300'}),1);
  transitionTimeline.add(TweenMax.to('#bigcircle', .5, {opacity:"0"}),1.5);

  // Doppelgagnger lines appear
  transitionTimeline.add(TweenMax.fromTo('#ghostwrapper', .1, {display:"none"}, {display:'flex'}), 2.5);

  // Doppelgagnerlines move
  transitionTimeline.add(TweenMax.to('#ghostwrapper', .3, {rotation:"90_cw"}), 2.5);
  transitionTimeline.add(TweenMax.to('#true', .3, {rotation:"-90"}), 2.5);

  transitionTimeline.add(TweenMax.to('#ghostwrapper', .3, {rotation:"130_cw"}), 2.8);
  transitionTimeline.add(TweenMax.to('#true', .3, {rotation:"-130"}), 2.8);

  //Red circles appear and rotate
  transitionTimeline.add(TweenMax.fromTo('#redCircleContainer', .1, {display:"none"}, {display:'flex'}), 2.5);
  transitionTimeline.add(TweenMax.to('#redCircleContainer', 1, {rotation:"180"}), 2.5);

  //Red circles move closer to center
  transitionTimeline.add(TweenMax.to('#redwrap1', 1, {top:"30%"}), 2.5);
  transitionTimeline.add(TweenMax.to('#redwrap2', 1, {bottom:"30%"}), 2.5);

  // Red circle collapse
  transitionTimeline.add(TweenMax.to('#redwrap1', .1, {top:"42%"}), 3.7);
  transitionTimeline.add(TweenMax.to('#redwrap2', .1, {bottom:"42%"}), 3.7);

  // Remove everything
  transitionTimeline.add(TweenMax.to('#pattern', .1, {display:"none"}), 3.7);
  transitionTimeline.add(TweenMax.to('#redCircleContainer', .1, {display:"none"}), 3.7);
  transitionTimeline.add(TweenMax.to('#ghostwrapper', .1, {display:"none"}), 3.7);
  transitionTimeline.add(TweenMax.to('#true', .1, {display:"none"}), 3.7);

  // Apocalypse appear
  transitionTimeline.add(TweenMax.fromTo('#apocalypse', .1, {display:"none"}, {display:"flex"}), 3.8);

  // Transition to menu
  transitionTimeline.add(TweenMax.to('#red', .3, {scaleX:(0)}), 3.8);
  transitionTimeline.add(TweenMax.fromTo('#white', .5, {width:"250"}, {width:"100vw",}), 3.8);
  transitionTimeline.add(TweenMax.to('#apocircle', .3, {scale:(100)}), 3.8);
  transitionTimeline.add(TweenMax.to('#apocircle', .5, {opacity:"0"}), 4.5);
  transitionTimeline.add(TweenMax.to('#apocircle', .1, {display:"none"}), 4.6);
  transitionTimeline.add(TweenMax.to('#circlewrap', .1, {display:"none"}), 4.6);

  transitionTimeline.add(TweenMax.fromTo('#logo', 3, {opacity:"0"}, {opacity:"1", onStart:function(){audioplay.play()}}), 5.1);
  transitionTimeline.add(TweenMax.fromTo('#logo', 1.5, {y:"50"}, { ease:Power2.easeOut, y:"0"}), 8);

  transitionTimeline.add(TweenMax.fromTo('#btn1', .5, { y:"25", opacity:"0"}, { y:"0",opacity:"1"}), 8.3);
  transitionTimeline.add(TweenMax.fromTo('#btn2', .5, { y:"25", opacity:"0"}, { y:"0",opacity:"1"}), 8.7);




}

componentDidMount(){

    var intro = document.createElement('audio');
    intro.setAttribute('src', './music/introambient.mp3');
    intro.loop = true;

    var glitch = document.createElement('audio');
    glitch.setAttribute('src', './soundFX/glitch.mp3');
    glitch.loop = true;



    $(document).on('mousemove', function(e){
      $(".light").css({
        left: e.pageX - 300,
        top: e.pageY -300
      })
    })

    var hover = $("#hoverFX")[0];
    var click = $("#clickFX")[0];
    var transitionIntro = $("#transitionIntro")[0];

      $("#button").mouseenter(function() {
        hover.play();
      });


      $('#button').click(function(){
        click.play();
        transitionIntro.play();
        intro.pause();
        glitch.pause();
        intro.currentTime = 0;
        glitch.currentTime = 0;
      })

    var toolTimeline = new TimelineLite();
    var steponeDur = .3;


    // 1. Border draw step 1

    toolTimeline.add(TweenMax.fromTo('#border1', steponeDur, {
        bottom: "50%",
        height: "0",
        width: "1",
      },

      {
        onStart:function(){intro.play()},
        bottom: "50%",
        height: "7",
        width: "1",
      }
    ),.3);

    toolTimeline.add(TweenMax.fromTo('#border2', steponeDur, {
        top: "0",
        height: "1",
        width: "0"
      },

      {
        top: "0",
        height: "1",
        width: "13"
      }
    ),.5);

    toolTimeline.add(TweenMax.fromTo('#border3', steponeDur, {
        top: "0",
        left: '50%',
        height: "1",
        width: "0"
      },

      {
        top: "0",
        left: '50%',
        height: "1",
        width: "12"
      }
    ),.6);

    toolTimeline.add(TweenMax.fromTo('#border4', steponeDur, {
        top: "0",
        right: "0",
        height: "0",
        width: "1"
      },

      {
        top: "0",
        right: "0",
        height: "7",
        width: "1"
      }
    ),.7);

    toolTimeline.add(TweenMax.fromTo('#border5', steponeDur, {
        top: "50%",
        right:"0",
        height: "0",
        width: "1"
      },

      {
        top: "50%",
        right:"0",
        height: "7",
        width: "1"
      }
    ),.8);

    toolTimeline.add(TweenMax.fromTo('#border6', steponeDur, {
        bottom: "0",
        right: '0',
        height: "1",
        width: "0"
      },

      {
        bottom: "0",
        right: '0',
        height: "1",
        width: "13"
      }
    ),.9);

    toolTimeline.add(TweenMax.fromTo('#border7', steponeDur, {
        bottom: "0",
        right: '50%',
        height: "1",
        width: "0"
      },

      {
        bottom: "0",
        right: '50%',
        height: "1",
        width: "13"
      }
    ),1);

    toolTimeline.add(TweenMax.fromTo('#border8', steponeDur, {
        bottom: "0",
        left: '0',
        height: "0",
        width: "1"
      },

      {
        bottom: "0",
        left: '0',
        height: "7",
        width: "1"
      }
    ),1.1);

    // 2.Step 2 flee
    var steptwoDur = .5;

    toolTimeline.add(TweenMax.to('#border1', steptwoDur, {x:-150, ease:"easeOut"}),1.5);
    toolTimeline.add(TweenMax.to('#border2', steptwoDur, {x:-150, ease:"easeOut"}),1.5);

    toolTimeline.add(TweenMax.to('#border3', steptwoDur, {x:150, ease:"easeOut"}),1.7);
    toolTimeline.add(TweenMax.to('#border4', steptwoDur, {x:150, ease:"easeOut"}),1.7);

    toolTimeline.add(TweenMax.to('#border5', steptwoDur, {x:150, ease:"easeOut"}),1.8);
    toolTimeline.add(TweenMax.to('#border6', steptwoDur, {x:150, ease:"easeOut"}),1.8);

    toolTimeline.add(TweenMax.to('#border7', steptwoDur, {x:-150, ease:"easeOut"}),2);
    toolTimeline.add(TweenMax.to('#border8', steptwoDur, {x:-150, ease:"easeOut"}),2);

    var openborders = 2.2;

    // 3. Step 3 Open borders
    toolTimeline.add(TweenMax.to('#border1', steptwoDur, {y:-100}),openborders);
    toolTimeline.add(TweenMax.to('#border2', steptwoDur, {y:-100}),openborders);

    toolTimeline.add(TweenMax.to('#border3', steptwoDur, {y:-100}),openborders);
    toolTimeline.add(TweenMax.to('#border4', steptwoDur, {y:-100}),openborders);

    toolTimeline.add(TweenMax.to('#border5', steptwoDur, {y:100}),openborders);
    toolTimeline.add(TweenMax.to('#border6', steptwoDur, {y:100}),openborders);

    toolTimeline.add(TweenMax.to('#border7', steptwoDur, {y:100}),openborders);
    toolTimeline.add(TweenMax.to('#border8', steptwoDur, {y:100}),openborders);

    // Revealers

    var revealerDelay = 3;
    var revealerDelay1 = 3.5;
    var revealerDelay2 = 3.7;

    var stepthreedur = .5;

    toolTimeline.add(TweenMax.fromTo('#revealer1', stepthreedur, {bottom:"0", heigth:"0"}, {top:"0", height:"100%"}),revealerDelay);
    toolTimeline.add(TweenMax.fromTo('#revealer2', stepthreedur, {top:"0", heigth:"0"}, {bottom:"0", height:"100%"}),revealerDelay);

    toolTimeline.add(TweenMax.fromTo('#revealer1', .1, {bottom:"0"}, {bottom:"auto", top:"0"}),revealerDelay1);
    toolTimeline.add(TweenMax.fromTo('#revealer2', .1, {top:"0"}, {top:"auto", bottom:"0"}),revealerDelay1);

    toolTimeline.add(TweenMax.to('#revealer1', stepthreedur, {top:"0", height:"0"}),revealerDelay2);
    toolTimeline.add(TweenMax.to('#revealer2', stepthreedur, {bottom:"0",height:"0"}),revealerDelay2);

    // Middle line revealer

    var revealerDelay3 = 2;
    var revealerDelay4 = 2.5;
    var revealerDelay5 = 2.7;

    var stepfour = .3;

    toolTimeline.add(TweenMax.to('#revealer3', stepfour, {width:"25%"}),revealerDelay3);
    toolTimeline.add(TweenMax.to('#revealer4', stepfour, {width:"25%"}),revealerDelay3);

    toolTimeline.add(TweenMax.fromTo('#revealer3', .1, {right:"50%"}, {right:"auto", left:"25%"}), revealerDelay4);
    toolTimeline.add(TweenMax.fromTo('#revealer4', .1, {left:"50%"}, {left:"auto", right:"25%"}), revealerDelay4);

    toolTimeline.add(TweenMax.to('#revealer3', stepfour, {width:"0"}),revealerDelay5);
    toolTimeline.add(TweenMax.to('#revealer4', stepfour, {width:"0"}),revealerDelay5);

    ///

    var revealdelay52 = 3.2;
    var revealerDelay6 = 3.5;
    var revealerDelay7 = 4;
    var revealerDelay8 = 4.2;

    toolTimeline.add(TweenMax.fromTo('#revealer5', .5, {height:"0", width:'0', opacity:"0"}, {height: "20%", width:"1px", opacity:"1"}), revealdelay52);
    toolTimeline.add(TweenMax.fromTo('#revealer5', steptwoDur, {height: "20%", width:"1px"}, {height: "20%", width:"35%"}), revealerDelay6);
    toolTimeline.add(TweenMax.fromTo('#revealer5', .5, {left:"50%"}, {left:"auto", right:"15%"}), revealerDelay7);
    toolTimeline.add(TweenMax.fromTo('#revealer5', steptwoDur, {width:"35%"}, {width:"0"}), revealerDelay8);

    toolTimeline.add(TweenMax.fromTo('#revealer6', .5, {height:"0", width:'0', opacity:"0"}, {height: "20%", width:"1px", opacity:"1"}), revealdelay52);
    toolTimeline.add(TweenMax.fromTo('#revealer6', steptwoDur, {height: "20%", width:"1px"}, {height: "20%", width:"35%"}), revealerDelay6);
    toolTimeline.add(TweenMax.fromTo('#revealer6', .5, {right:"50%"}, {right:"auto", left:"15%"}), revealerDelay7);
    toolTimeline.add(TweenMax.fromTo('#revealer6', steptwoDur, {width:"35%"}, {width:"0"}), revealerDelay8);

    var headReveal = 4.2;

    toolTimeline.add(TweenMax.to('#head', .5, {display:"block"}),headReveal);

    var decoratorReveal = 2.5;
    var decoratorReveal2 = 3.5;
    var decoratorReveal3 = 3.7;

    toolTimeline.add(TweenMax.fromTo('#deca1', 1, {width:'0', display:"none"}, {width:"50%", display:"block"}), decoratorReveal);
    toolTimeline.add(TweenMax.fromTo('#deca1', .1, {right:'25%'}, {left:"25%", right:"auto"}), decoratorReveal2);
    toolTimeline.add(TweenMax.fromTo('#deca1', 1, {width:"50%", opacity:"1"}, {width:"0", opacity:"0"}), decoratorReveal3);

    toolTimeline.add(TweenMax.fromTo('#deca2', 1, {width:'0', display:"none"}, {width:"50%", display:"block"}), decoratorReveal);
    toolTimeline.add(TweenMax.fromTo('#deca2', .1, {right:'25%'}, {left:"25%", right:"auto"}), decoratorReveal2);
    toolTimeline.add(TweenMax.fromTo('#deca2', 1, {width:"50%", opacity:"1"}, {width:"0", opacity:"0"}), decoratorReveal3);

    toolTimeline.add(TweenMax.fromTo('#deca3', 1, {height:'0', display:"none"}, {height:"50%", display:"block"}), decoratorReveal);
    toolTimeline.add(TweenMax.fromTo('#deca3', .1, {top:'25%'}, {bottom:"25%", top:"auto"}), decoratorReveal2);
    toolTimeline.add(TweenMax.fromTo('#deca3', 1, {height:"50%", opacity:"1"}, {height:"0", opacity:"0"}), decoratorReveal3);

    toolTimeline.add(TweenMax.fromTo('#deca4', 1, {height:'0', display:"none"}, {height:"50%", display:"block"}), decoratorReveal);
    toolTimeline.add(TweenMax.fromTo('#deca4', .1, {top:'25%'}, {bottom:"25%", top:"auto"}), decoratorReveal2);
    toolTimeline.add(TweenMax.fromTo('#deca4', 1, {height:"50%", opacity:"1"}, {height:"0", opacity:"0"}), decoratorReveal3);

    // Button and upper text
    toolTimeline.add(TweenMax.fromTo('#button', .1, {display: "none"}, {display: "flex"}), 4.1);
    toolTimeline.add(TweenMax.fromTo('#addT', .1, {display: "none"}, {display: "block"}), 4.1);

    toolTimeline.add(TweenMax.fromTo('#button', .5, {opacity:"0", y:"15"}, {opacity:"1", y:"0"}), 4.2);
    toolTimeline.add(TweenMax.fromTo('#addT', .5, {opacity:"0", y:"15"}, {opacity:"1", y:"0"}), 4.3);










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



}

render(){
      return (
        <div className="I-container">
        <audio id="hoverFX">
        	<source src="soundFX/hover.mp3"></source>
        	<source src="soundFX/hover.ogg"></source>
        	Your browser isn't invited for super fun audio time.
        </audio>
        <audio id="clickFX">
          <source src="soundFX/click.mp3"></source>
          <source src="soundFX/click.ogg"></source>
          Your browser isn't invited for super fun audio time.
        </audio>
        <audio id="transitionIntro">
          <source src="soundFX/transitionIntro.mp3"></source>
          <source src="soundFX/transitionIntro.ogg"></source>
          Your browser isn't invited for super fun audio time.
        </audio>



        <div id="pattern" className="pattern"></div>
        <div class="light"></div>
          <div className="intro-container">
              <div className="intro-wrapper">

                <div id="intro-logo"  className="intro-logo">

                  <div className="border-container">
                    <div id="border1" className="logo-border"></div>
                    <div id="border2" className="logo-border"></div>
                    <div id="border3" className="logo-border"></div>
                    <div id="border4" className="logo-border"></div>
                    <div id="border5" className="logo-border"></div>
                    <div id="border6" className="logo-border"></div>
                    <div id="border7" className="logo-border"></div>
                    <div id="border8" className="logo-border"></div>
                  </div>
                  <div className="revealer-container">
                    <div id="revealer1" className="revealer"></div>
                    <div id="revealer2" className="revealer"></div>
                  </div>
                  <div className="revealer-container">
                    <div id="revealer3" className="revealer2"></div>
                    <div id="revealer4" className="revealer2"></div>
                    <div id="revealer5" className="revealer2"></div>
                    <div id="revealer6" className="revealer2"></div>
                  </div>
                  <div className="revealer-container">
                    <h1 id="head">Stampede</h1>
                    <p  id="head">presents</p>
                    <div id="button" onClick={()=>{this.transition()}} >

                      <svg>
                        <rect width='100' height='30'></rect>
                      </svg>
                      ENTER
                    </div>
                  </div>
                  <div className="revealer-container">
                    <div id="deca1" className="deca"></div>
                    <div id="deca2" className="deca"></div>
                    <div id="deca3" className="deca"></div>
                    <div id="deca4" className="deca"></div>
                  </div>


                  <div className="text-container">

                    <h1 id="addT" className="memo-text">量子メ<span>モ</span>リ</h1>
                  </div>

                </div>

                <div className="transition-group" id="transition-g">

                  <div id="circlewrap" className="circle-wrapper">
                  <div id="true" className="wrap true-wrapper">
                    <div id="circle1" className="circle-wrapper__item"></div>
                    <div id="circle2" className="circle-wrapper__item"></div>
                    <div id="bigcircle" className="circle-wrapper__Bitem"></div>
                    <div id="lineBridge" className="line-bridge"></div>
                  </div>
                    <div id="ghostwrapper" className="wrap ghost-wrapper">
                      <div id="Dcircle1" className="circle-wrapper__item--doppelganger"></div>
                      <div id="Dcircle2" className="circle-wrapper__item--doppelganger"></div>
                      <div id="DlineBridge" className="line-bridge--doppelganger"></div>
                    </div>
                  </div>

                  <div id="redCircleContainer" className="redCircle-container">
                    <div id="redwrap1" className="redCircle-wrapper">
                      <div className="redCircle-wrapper__item"></div>
                    </div>
                    <div id="redwrap2" className="redCircle-wrapper">
                      <div className="redCircle-wrapper__item"></div>
                    </div>
                  </div>

                  <div id="apocalypse" className='apocalypse-container'>
                    <div id="red" className="red"></div>
                    <White/>
                    <div id="apocircle" className="apocircle"></div>
                  </div>


                </div>

                <div id="introfooter" className="intro-footer">
                  <div className="intro-social">
                  <a href="https://twitter.com/memo_quantum" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.instagram.com/memothegame/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                  <a href="https://ko-fi.com/ekrijel" rel="noopener noreferrer" target="_blank"><i class="fas fa-coffee"></i></a>
                  <a href="https://www.patreon.com/stampedeproduction" rel="noopener noreferrer" target="_blank"><i class="fab fa-patreon"></i></a>
                  <a href="https://www.twitch.tv/alittepanic" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitch"></i></a>
                  <a href="https://discord.gg/y5ajg7" rel="noopener noreferrer" target="_blank"><i className="fab fa-discord"></i></a>
                  <a href="https://www.youtube.com/channel/UCZaOcxON92n-NLBqjeI6C5Q" rel="noopener noreferrer" target="_blank"><i class="fab fa-youtube"></i></a>
                  </div>

                  <div className="fullscreen-container">
                    <p id="btnFullscreen" className="fullscreen">FULLSCREEN</p>
                  </div>

                  <div className="intro-credits">

                    <div className="intro-credits-text">
                      Use headphones
                    </div>


                    <div className="equaliser-container">
                      <ol className="equaliser-column">
                        <li className="colour-bar"></li>
                      </ol>
                      <ol className="equaliser-column">
                        <li className="colour-bar"></li>
                      </ol>
                      <ol className="equaliser-column">
                        <li className="colour-bar"></li>
                      </ol>
                      <ol className="equaliser-column">
                        <li className="colour-bar"></li>
                      </ol>
                      <ol className="equaliser-column">
                        <li className="colour-bar"></li>
                      </ol>
                    </div>
                  </div>

                </div>
              </div>
            </div>

        </div>
    )
  }
}

export default Intro;
