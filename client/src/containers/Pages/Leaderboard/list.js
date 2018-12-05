import React, {Component} from 'react';

class List extends Component {

  sortBy(users){
    users.sort((a,b) => a.score < b.score);
    users.map(item => (
      <div className="board-grid board-grid--2 ">
        <div className="board-grid__item board-grid--2__item"><p>Name: {item.name}</p></div>
        <div className="board-grid__item board-grid--2__item"><p>Time: {item.time}</p></div>
        <div className="board-grid__item board-grid--2__item"><p>Mistakes: {item.wrong}</p></div>
        <div className="board-grid__item board-grid--2__item"><p>Score: {item.score}</p></div>
        <div className="board-grid__item board-grid--2__item"><p>Difficulty: {item.difficulty}</p></div>
        <div className="board-grid__item board-grid--2__item"><p>Level: {item.level}</p></div>
      </div>
    ))
  }




  render(){
    let users = this.props.user;
    console.log(users)
    console.log(this.state)
    return(
      <div className="board">
      <div className="board-grid board-grid--2 ">
        <div className="board-grid__item board-grid--2__item"><p>Name</p></div>
        <div className="board-grid__item board-grid--2__item"><p>Mistakes</p></div>
        <div className="board-grid__item board-grid--2__item"><p>Score</p></div>
        <div className="board-grid__item board-grid--2__item"><p>Difficulty</p></div>
        <div className="board-grid__item board-grid--2__item"><p>Level</p></div>
      </div>
        {users ?
          <div>{
            this.sortBy(users)}
            {users.map(item => (
                <div className="board-grid board-grid--2 ">
                  <div className="board-grid__item board-grid--2__item"><p>{item.name}</p></div>
                  <div className="board-grid__item board-grid--2__item"><p>{item.wrong}</p></div>
                  <div className="board-grid__item board-grid--2__item"><p>{item.score}</p></div>
                  <div className="board-grid__item board-grid--2__item"><p>{item.difficulty}</p></div>
                  <div className="board-grid__item board-grid--2__item"><p>{item.level}</p></div>
                </div>
            ))
          }</div>
          :<div className="cube-wrapper">
           <div className="cube-folding">
             <span className="leaf1"></span>
             <span className="leaf2"></span>
             <span className="leaf3"></span>
             <span className="leaf4"></span>
           </div>
           <span className="loading" data-name="Loading">Loading</span>
       </div>}
      </div>
    )
  }
}

export default List;
