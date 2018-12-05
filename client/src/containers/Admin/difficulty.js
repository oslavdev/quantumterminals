import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, updateUser } from '../../actions';
import $ from 'jquery';

import Dots from '../../components/Dots/dots';
import Header from '../../components/Header/header';
import Decor from '../../components/Decor/decor';
import Burger from '../../components/Burger/burger';

const ShowMessage = () => {
  document.querySelector(".Modal").classList.remove('Modal-INV');
  document.querySelector(".Modal").classList.remove('Modal-ANIM');
  document.querySelector(".asker-1").classList.remove('asker-ANIM');
  document.querySelector(".asker-2").classList.remove('asker-ANIM');
  document.querySelector(".Modal_h").classList.remove('ModalHead-ANIM');
}



class Difficulty extends PureComponent {

  state = {
    formdata:{
      _id:this.props.user.login.id,
      difficulty:"",
      firstStart: false
    },
    description:'Choose difficulty',
    received: false
  }


  componentDidMount(props){
    this.props.dispatch(getUser(this.props.user.login.id))
    $(".list__item").hover(function(){
      $(this).toggleClass("selected");
      $(this).toggleClass("list__item-active");
      $(".btn2", this).toggleClass("btn2-active");
      $(".btn1", this).toggleClass("btn1-active");
    })
  }

  easyIn(){
    $("#im").remove();
    console.log("easy")
    this.setState({description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})
  }
  hardIn(){
    $("#im").remove();
    this.setState({description:"Hard is very hard"})
  }
  extremeIn(){
    $("#im").remove();
    this.setState({description:"Extreme is even harder"})
  }
  impossibleIn(){
    $("#im").remove();
    this.setState({description:"Well, you bet"})
  }
  AsianIn(){
    this.setState({description:""})
    var img = document.createElement("img");
    img.id = "im";
    img.src = "images/no.gif";
    var src = document.getElementById("description");
    src.appendChild(img);
  }

  close = () => {

    document.querySelector(".Modal").classList.add('Modal-ANIM');
    document.querySelector(".Modal_h").classList.add('ModalHead-ANIM');
    document.querySelector(".asker-1").classList.add('asker-ANIM');
    document.querySelector(".asker-2").classList.add('asker-ANIM');


    setTimeout(()=>{
      document.querySelector(".Modal").classList.add('Modal-INV');
    }, 1000)
  }

  sendData = (e) =>{
    e.preventDefault();
    this.props.dispatch(updateUser(this.state.formdata));
    console.log("Sent data");
    this.props.history.push('/game')
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
                      <div className="list__item">
                        <a
                        onMouseEnter={this.easyIn.bind(this)}
                        onClick={this.setStateToEasy} className="link">EASY</a>
                          <div className="btn btn1"></div>
                          <div className="btn btn2"></div>
                      </div>
                    </li>
                    <li id="btn1">
                      <div className="list__item">
                        <a
                        onMouseEnter={this.hardIn.bind(this)}
                        onClick={this.setStateToHard} className="link">HARD</a>
                          <div className="btn btn1"></div>
                          <div className="btn btn2"></div>
                      </div>
                    </li>
                    <li id="btn1">
                      <div className="list__item">
                        <a
                        onMouseEnter={this.extremeIn.bind(this)}
                        onClick={this.setStateToExtreme} className="link" >EXTREME</a>
                          <div className="btn btn1"></div>
                          <div className="btn btn2"></div>
                      </div>
                    </li>
                    <li id="btn1">
                      <div className="list__item">
                        <a
                        onMouseEnter={this.impossibleIn.bind(this)}
                        onClick={this.setStateToImpossible} className="link" >IMPOSSIBLE</a>
                          <div className="btn btn1"></div>
                          <div className="btn btn2"></div>
                      </div>
                    </li>
                    <li id="btn1">
                      <div className="list__item">
                        <a
                        onMouseEnter={this.AsianIn.bind(this)}
                        onClick={this.setStateToAsian} className="link" >Asian</a>
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
      :<div>Please start a new game</div>
   :null
  )



  render(){
    let user = this.props.user;
    let state = this.state.formdata;

    console.log(state)

    return(
      <div className="Difficulty-container">
        <Header/>
        <Decor/>
        {this.checkProps(user)}
        <div id="DIF_MOD" className="Modal Modal-INV">
            <div className="Modal-revealer"></div>
            <h1 id="Message" className="Modal_h" onClick={this.sendData}>You chose: {this.state.formdata.difficulty}. ARE YOU SURE?</h1>
            <div className="q">
              <Link className="asker asker-1" to="/game" onClick={this.sendData}>Yes</Link>
              <div className="asker asker-2" onClick={this.close}>No</div>
            </div>
            <div className="BG-TEXT">MEMO</div>
            <div className="pattern pattern-pop"></div>
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
