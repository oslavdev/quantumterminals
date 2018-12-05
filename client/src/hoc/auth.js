import React, { Component } from 'react';
import { auth } from '../actions';
import { connect } from 'react-redux';

export default function(ComposedClass, reload){
  class AuthenticationCheck extends Component {

    state = {
        loading: true
    }

    componentWillMount(){
      this.props.dispatch(auth())
    }

    componentWillReceiveProps(nextProps){
      this.setState({loading:false})

      if(!nextProps.user.login.isAuth){
          if(reload === true){
        this.props.history.push('/menu');
        }
      } else {
        if(reload === false){
            this.props.history.push('/menu');
        }
      }
    }

    render(){
      if(this.state.loading){
        return <div className="cube-wrapper">
           <div className="cube-folding">
             <span className="leaf1"></span>
             <span className="leaf2"></span>
             <span className="leaf3"></span>
             <span className="leaf4"></span>
           </div>
           <span className="loading" data-name="Loading">Loading</span>
       </div>
      }
      return(
        <ComposedClass {...this.props} user={this.props.user}/>
      )
    }
  }



  function mapStateToProps(state){
    return{
      user:state.user
    }
  }
  return connect(mapStateToProps)(AuthenticationCheck)
}
