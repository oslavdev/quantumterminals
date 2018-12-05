import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, updateUser } from '../../actions';
import $ from 'jquery';

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
      wrong:"0",
      time:"0",
      difficulty:"Easy",
      best:"0",
      firstStart: true,
      firstEnter:true
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
    console.log("are you sure?")
    document.querySelector(".Modal").classList.remove('Modal-INV');
    document.querySelector(".Modal").classList.remove('Modal-ANIM');
    document.querySelector(".asker-1").classList.remove('asker-ANIM');
    document.querySelector(".asker-2").classList.remove('asker-ANIM');
    document.querySelector(".Modal_h").classList.remove('ModalHead-ANIM');
  }

  clearData = (e) => {
    e.preventDefault();
    this.props.dispatch(updateUser(this.state.formdata))
    this.props.history.push('/difficulty')
    console.log("Data was cleared. You do have guts afterall!")
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
        <div onClick={()=>this.props.history.push("/difficulty")} className="list__item list__item-continue">
          <p className="link">NEW GAME +</p>
            <div className="btn btn1"></div>
            <div className="btn btn2"></div>
         </div>
        :<div className="list__item list__item-inactive list__item-continue">
            <p className="link">CONTINUE</p>
            <div className="btn btn1"></div>
            <div className="btn btn2"></div>
          </div>
      :<div  onClick={()=>this.props.history.push("/game")} className="list__item list__item-continue">
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
          <div className="Modal Modal-INV">
              <div className="Modal-revealer"></div>
              <h1 className="Modal_h">Are you sure you want to start a new game? You will loose all your progress? </h1>
              <div className="q">

                <Link className="asker asker-1" to="/difficulty" onClick={this.clearData}>Yes</Link>
                <div className="asker asker-2" onClick={this.close}>No</div>
              </div>
              <div className="BG-TEXT">MEMO</div>
              <div className="pattern pattern-pop"></div>
          </div>

          {this.continue(user)}


            <ul className="list">
              <li id="btn2">
                <div className="list__item">
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
                              <p>It's just the beginning. This is a beta version of Memo The Quantum Terminals. There will be much more. </p>
                              <div className="buttonGot__wrapper">
                                <Link className="buttonGot" id="button" to="/about" >
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
