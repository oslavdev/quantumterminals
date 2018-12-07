import React, {Component} from 'react';

class List extends Component {

  sortBy(users){
    let arr = users;
    let x;
    let index = 5;
    arr.sort((a,b) => a.score < b.score);
    let newArr  =  arr.slice(0, index);
    return x = newArr.slice(0, index).map(item => (
      <div className="board-grid board-grid--2 ">
        <div className="board-grid__item board-grid--2__item"><p>{item.name}</p></div>
        <div className="board-grid__item board-grid--2__item"><p>{item.wrong}</p></div>
        <div className="board-grid__item board-grid--2__item"><p>{item.score}</p></div>
        <div className="board-grid__item board-grid--2__item"><p>{item.difficulty}</p></div>
        <div className="board-grid__item board-grid--2__item"><p>{item.level}</p></div>
      </div>
    ))
  }




  render(){
    let users = this.props.user;
    console.log(users)

    return(
      <div className="board">
      <div className="board-grid board-grid--2 ">
        <div className="board-grid__item board-grid--2__item board-grid--2__item-title"><p>Name</p></div>
        <div className="board-grid__item board-grid--2__item board-grid--2__item-title"><p>Mistakes</p></div>
        <div className="board-grid__item board-grid--2__item board-grid--2__item-title"><p>Score</p></div>
        <div className="board-grid__item board-grid--2__item board-grid--2__item-title"><p>Difficulty</p></div>
        <div className="board-grid__item board-grid--2__item board-grid--2__item-title"><p>Level</p></div>
      </div>
        {users ?
          <div className="sorted__container">{this.sortBy(users)}</div>
          :<div className="cube-wrapper">
           <div className="cube-folding">
             <span className="leaf1"></span>
             <span className="leaf2"></span>
             <span className="leaf3"></span>
             <span className="leaf4"></span>
           </div>
           <span className="loading" data-name="Loading">Loading</span>
       </div>
     }
      </div>
    )
  }
}

export default List;
