import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {TweenMax, Expo, TimelineLite} from "gsap/TweenMax";

import 'simplebar';
import 'simplebar/dist/simplebar.css';

import { getUser, updateUser } from '../../actions';
import $ from 'jquery';


class Burger extends PureComponent {

  constructor(props){
        super(props);

    this.state = {
      messages:[],
      received: false,
      length:'',
    }

    this.createLetter = this.createLetter.bind(this);
  }



  componentDidMount(){

    this.props.dispatch(getUser(this.props.user.login.id))

    var menu = new TimelineLite({pause:true});
    menu.add(TweenMax.fromTo("#modalcontainer", .1, {display:"none"}, {display:"grid"}),0);
    menu.add(TweenMax.fromTo("#modalcontainer", .3, {opacity:"0"}, {opacity:"1"}),0.1);


    menu.add(TweenMax.fromTo("#modalList1", 1, {y:100, opacity:0, ease: Expo.easeOut}, {y:0, opacity:1 }),0.5);
    menu.add(TweenMax.fromTo("#modalList2", 1, {y:100, opacity:0, ease: Expo.easeOut}, {y:0, opacity:1 }),0.6);
    menu.add(TweenMax.fromTo("#modalList3", 1, {y:100, opacity:0, ease: Expo.easeOut}, {y:0, opacity:1 }),0.7);
    menu.add(TweenMax.fromTo("#modalList4", 1, {y:100, opacity:0, ease: Expo.easeOut}, {y:0, opacity:1 }),0.8);
    menu.add(TweenMax.fromTo("#modalList5", 1, {y:100, opacity:0, ease: Expo.easeOut}, {y:0, opacity:1 }),0.9);
    menu.add(TweenMax.fromTo("#modalList6", 1, {y:100, opacity:0, ease: Expo.easeOut}, {y:0, opacity:1 }),1);
    menu.add(TweenMax.fromTo("#modalClose", 1, {opacity:0, ease: Expo.easeOut}, {opacity:1 }),1.1);
    menu.reversed(true);


    $(document).on("click", "#navOne", function(){
       menu.reversed() ? menu.play() : menu.reverse();
    })

    $(document).on("click", "#modalClose", function(){
      menu.reversed() ? menu.play() : menu.reverse();
      setTimeout(()=>{
          $(".modal-container").removeClass("modal-container-active");
      }, 2000)
    })



    var letters = new TimelineLite({pause:true});
    letters.add(TweenMax.fromTo("#letterContainer", .1, {display:"none"}, {display:"flex"}),0);
    letters.add(TweenMax.fromTo("#letterContainer", .3, {opacity:"0"}, {opacity:"1"}),0.1);
    letters.add(TweenMax.fromTo("#letterContItem", .3, {display:"none"}, {display:"flex"}),0.1);
    letters.reversed(true);

    $(document).on("click", "#letterContItem", function(){
      letters.reversed() ? letters.play() : letters.reverse();
    })

    $(document).ready(function(){
      $("#letterNavigation").click(function(){
         letters.reversed() ? letters.play() : letters.reverse();
      });


    })

  }

  messages = () =>{
    let messages = this.state.messages;
    let length = this.state.length;

    if (length > 0 ){
      const listOfMessages = messages.map((item)=>
                <div id="letterContItem"
                  onClick={
                    ()=> this.renderId(`${messages.indexOf(item)}`)
                    }
                  style={{ animationDelay:`${parseInt(parseInt(messages.indexOf(item))+parseInt(1))/10}s`}}
                  className="letter__container-item">
                  <h1><i className="far fa-envelope"></i><span>from:</span> {item.name}</h1>
                  <p>{item.preview}</p>
                </div>
              );
              return(
                <div className="letter__container-wrapper">
                   {listOfMessages}
                 </div>
              );
    } else {
      return(
        <div className="letter__container-wrapper">
           <h1>No messages</h1>
         </div>
      );
    }

  }


  createLetter(state){
    let allmessages = this.props.state.allmessages;

    console.log("createletter executed")
    console.log(allmessages)

    if (allmessages.length > 0){
      console.log("more then o")
      this.setState({
        messages: allmessages,
        length: allmessages.length,
        received: true,
      })
    } else {
      this.setState({
        received:false
      })
      console.log("less then o")
    }
    console.log(this.state)
  }

  checkprops = (user, state) =>(
    user ?
      state ?
        this.createLetter(state)
      :null
    :null
  )



  renderId = (index) =>{
    let number = index;
    this.props.openMessage(index);
    this.setState({received:false})
  }



  render(){
    let user = this.props.user.user;
    let state = this.props.state;

    return(
      <div className="navigation">
        {this.checkprops(user, state)}
        <div className="navigation__container">
          <div id="navOne" className="navigation__container-item">
          <div className="nav-dots">
            <span class="tooltiptext">Menu</span>
            <div className="nav-dots-item"></div>
            <div className="nav-dots-item"></div>
            <div className="nav-dots-item"></div>
            <div className="nav-dots-item"></div>
            <div className="nav-dots-item"></div>
            <div className="nav-dots-item"></div>
            <div className="nav-dots-item"></div>
            <div className="nav-dots-item"></div>
            <div className="nav-dots-item"></div>
          </div>
          </div>
          <div  id="letterNavigation" className="navigation__container-item">
            <div className="nav-dots">
              <i className="fas fa-envelope">
                <span class="tooltiptext">Messages</span>
              </i>
            </div>
          </div>
        </div>

      {
        this.state.received ?
            <div data-simplebar id="letterContainer" className="letter__container">
                {this.messages()}
            </div>
          :<div id="letterContainer" className="letter__container">
            <div className="letter__container-after"></div>
              <div className="letter__container-wrapper">
                <h1>No messages</h1>
              </div>
          </div>
        }





            <div id="modalcontainer" class="modal-container">

              <div className="modal-container__item">
                <ul>
                  <li id="modalList1"><Link to="/menu"><span>01</span>Menu<div className="modal-line"></div></Link></li>
                  <li id="modalList2"><Link to="/memos"><span>02</span>Memories<div className="modal-line"></div></Link></li>
                  <li id="modalList3"><Link to="/about"><span>03</span>About<div className="modal-line"></div></Link></li>
                  <li id="modalList4"><Link to="/leaderboard"><span>04</span>Leaderboard<div className="modal-line"></div></Link></li>
                  <li id="modalList5"><Link to="/credits"><span>05</span>Credits<div className="modal-line"></div></Link></li>
                  <li id="modalList6"><Link to="/logout"><span></span>Log out<div className="modal-line"></div></Link></li>
                </ul>
              </div>
              <div className="modalTextClose">
                <p id="modalClose"><span>close</span></p>
              </div>

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


export default connect(mapStateToProps)(Burger)
