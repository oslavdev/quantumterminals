import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, updateUser } from '../../actions';
import $ from 'jquery';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

import Decor from '../../components/Decor/decor';
import Header from '../../components/Header/header';
import Dots from '../../components/Dots/dots';
import Footer from '../../components/Footer/footer';


class Menu extends PureComponent {

  state = {
    formdata:{
      _id:this.props.user.login.id,
      score:"0",
      level:"1",
      mistakes:"0",
      time:"0",
      difficulty:"Easy",
      best:"0",
      firstStart: true,
      firstEnter: true,
      firstEver: true,
      messages: [],
    },
    received: false,
    show: true

  }

  componentWillMount(){
      this.props.dispatch(getUser(this.props.user.login.id))
  }

  componentDidMount(){
    $(".list__item").hover(function(){
      $(this).toggleClass("selected");
      $(this).toggleClass("list__item-active");
      $(".btn2", this).toggleClass("btn2-active");
      $(".btn1", this).toggleClass("btn1-active");
    })



  }


  ask = () =>{
    var transitionTimeline = new TimelineLite();

    transitionTimeline.add(TweenMax.fromTo('#Modal', .1, {display:"none"}, {display:"block"}),.1);
    transitionTimeline.add(TweenMax.fromTo('#Modal', .5, {opacity:"0",  y:"20"}, {opacity:"1",  y:"0"}),.3);

    transitionTimeline.add(TweenMax.fromTo('#ModalHeader', .5, {opacity:"0",  y:"20"}, {opacity:"1",  y:"0"}),.8);
    transitionTimeline.add(TweenMax.fromTo('#q', .5, {opacity:"0",  y:"20"}, {opacity:"1",  y:"0"}),1);


  }

  clearData = (e) => {
    e.preventDefault();
    this.props.dispatch(updateUser(this.state.formdata))
    setTimeout(()=>{
          this.props.history.push('/difficulty')
    },1000)
    console.log("Data was cleared. You do have guts afterall!")
  }

  close = () => {

    var transitionTimeline = new TimelineLite();

      transitionTimeline.add(TweenMax.fromTo('#q', .5, {opacity:"1",  y:"0"}, {opacity:"0",  y:"20"}),.3);
      transitionTimeline.add(TweenMax.fromTo('#ModalHeader', .5, {opacity:"1",  y:"0"}, {opacity:"0",  y:"20"}),.7);

      transitionTimeline.add(TweenMax.fromTo('#Modal', .5, {opacity:"1",  y:"0"}, {opacity:"0",  y:"20"}),1);
      transitionTimeline.add(TweenMax.fromTo('#Modal', .1, {display:"block"}, {display:"none"}),1.5);



  }



  checkProps = (user) => (
    user ?
      this.checklevel(user)
        :null
  )

  checklevel = (user) =>{
    this.setState({received:true})
  }

  continue = (user) =>(
    user ?
      user.firstStart ?
        user.final ?
        <div id="Continue"onClick={()=>this.props.history.push("/difficulty")} className="list__item list__item-continue">
          <p  className="link">NEW GAME +</p>
            <div className="btn btn1"></div>
            <div className="btn btn2"></div>
         </div>
        :<div id="Continue"className="list__item list__item-inactive list__item-continue">
            <p  className="link">CONTINUE</p>
            <div className="btn btn1"></div>
            <div className="btn btn2"></div>
          </div>
      :<div id="Continue" onClick={()=>this.props.history.push("/game")} className="list__item list__item-continue">
        <p className="link">CONTINUE</p>
        <div className="btn btn1"></div>
        <div className="btn btn2"></div>
      </div>
    :null
  )


  render(){
    let user = this.props.user.user;


    return(
      <div className="G-wrapper">

        <div className="menu__container">
          <Header/>
          <Decor/>
          {this.checkProps(user)}
          {this.checklevel}
          <div id="Modal" className="Modal">
          <div className="Modal__text-wrapper">
              {user?
                  user.frstStartEver ? <h1 id="ModalHeader" className="Modal_h">Are you sure you want to start a new game? You will loose all your progress? </h1>
                : <h1 id="ModalHeader" className="Modal_h">The game will be started</h1>
              :null
              }

              <div id="q" className="q">


                <Link  to="/difficulty" onClick={this.clearData}
                      className="buttonGot-2"
                      id="button" >
                  <svg>
                    <rect width='100' height='30'></rect>
                  </svg>
                  Yes
                </Link>

                  <div onClick={this.close}
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

          {this.continue(user)}


            <ul className="list">
              <li id="btn2">
                <div id="Newgame" className="list__item">
                  <p className="link" onClick={this.ask}>NEW GAME</p>
                  <div className="btn btn1"></div>
                  <div className="btn btn2"></div>
                </div>
              </li>
              <li id="btn2">
                <div className="list__item">
                  <Link className="link" to="/info">INFO</Link>
                  <div className="btn btn1"></div>
                  <div className="btn btn2"></div>
                </div>
              </li>
              <li id="btn2">
                <div className="list__item">
                  <Link className="link" to="/logout">LOG OUT</Link>
                  <div className="btn btn1"></div>
                  <div className="btn btn2"></div>
                </div>
              </li>
            </ul>
        </div>
                  {this.state.received ?
                        this.state.show ?
                          <div className="support__container">
                            <div className="support__container-content">
                              <p>It's just the beginning. This is a beta version of te game. There will be much more. </p>
                              <div className="buttonGot__wrapper">
                                <Link className="buttonGot " id="button" to="/about" >
                                  <svg>
                                    <rect width='100' height='30'></rect>
                                  </svg>
                                  Discover
                                </Link>
                              </div>
                            </div>
                            <i onClick={()=>this.setState({show:false})} className="fas fa-times"></i>
                          </div>
                          :null
                      :null
                    }
        <Dots/>
      </div>

    )


  }

}

function mapStateToProps(state){
    return {
        us:state.us
    }

  }


export default connect(mapStateToProps)(Menu)
