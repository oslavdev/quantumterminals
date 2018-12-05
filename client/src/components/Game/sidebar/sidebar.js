import React, { PureComponent } from 'react';
import ReactDOM from "react-dom";


class Sidebar extends PureComponent {



  render(){
    let state = this.props.state;
    let user = this.props.user.user;

    let minutes = state.minutes+0;
    let seconds = state.seconds+0;

    return (

      <div className="sidebar__container">
      <div className="stats__wrapper">
        <div className="stats">
          <div className="stats__item">
            <p>Time left: {minutes}:{seconds}</p>
          </div>
        </div>
        <div className="stats">
          <div className="stats__item">
            <p>Level: {state.level}</p>
          </div>
        </div>
        <div className="stats">
          <div className="stats__item">
            <p>Difficulty: {user ? user.difficulty : null}</p>
          </div>
        </div>
        <div className="stats">
          <div className="stats__item">
            <p>Score: {state.score}</p>
          </div>
        </div>
        <div className="stats">
          <div className="stats__item">
            <p>Mistakes: {state.mistakes}</p>
          </div>
        </div>
        <div className="stats">
          <div className="stats__item">
            <p>Streak: {state.currentStreak}/{state.streak}</p>
          </div>
        </div>
      </div>
      </div>
    )
  }

}

export default Sidebar;
