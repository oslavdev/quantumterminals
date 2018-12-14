import React, {Component} from 'react';

class Gameboard extends Component {

    componentDidMount(){
      let size = 30;
      for (let i = 0; i < size; i++) {

        let cell = document.createElement("div");

        let front = document.createElement("div");
        let back = document.createElement("div");


        const classes1 =  [
          'playground__item',
          `playground__item--${i+1}`,
          `playground__item--front`,
        ];

        const classes2 =  [
          'playground__item',
          `playground__item--${i+1}`,
          `playground__item--back`,
        ];

        cell.classList.add("playground-container");

        classes1.map(function(item) {
            return front.classList.add(item);
        });

        classes2.map(function(item) {
            return back.classList.add(item);
        });

        front.id = `front${i+1}`;
        back.id = `back${i+1}`;

        let element = document.querySelector(".playground");
          element.appendChild(cell);

          let decoration = document.createElement("div");
          let decorationItem1 = document.createElement("div");
          let decorationItem2 = document.createElement("div");
          let decorationItem3 = document.createElement("div");
          let decorationItem4 = document.createElement("div");
          let decorationItem5 = document.createElement("div");

          let decorationItemPlus1 = document.createTextNode("+");
          let decorationItemPlus2 = document.createTextNode("+");
          let decorationItemPlus3 = document.createTextNode("+");
          let decorationItemPlus4 = document.createTextNode("+");
          let decorationItemPlus5 = document.createTextNode("+");

          decoration.classList.add("decoration");
          decorationItem1.classList.add("decoration__item-1", "decoration__item");
          decorationItem2.classList.add("decoration__item-2", "decoration__item");
          decorationItem3.classList.add("decoration__item-3", "decoration__item");
          decorationItem4.classList.add("decoration__item-4", "decoration__item");
          decorationItem5.classList.add("decoration__item-5", "decoration__item");

          decorationItem1.appendChild(decorationItemPlus1);
          decorationItem2.appendChild(decorationItemPlus2);
          decorationItem3.appendChild(decorationItemPlus3);
          decorationItem4.appendChild(decorationItemPlus4);
          decorationItem5.appendChild(decorationItemPlus5);

          decoration.appendChild(decorationItem1);
          decoration.appendChild(decorationItem2);
          decoration.appendChild(decorationItem3);
          decoration.appendChild(decorationItem4);
          decoration.appendChild(decorationItem5);

          let decoration2 = document.createElement("div");
          let bdecorationItem1 = document.createElement("div");
          let bdecorationItem2 = document.createElement("div");
          let bdecorationItem3 = document.createElement("div");
          let bdecorationItem4 = document.createElement("div");
          let bdecorationItemPlus1 = document.createTextNode("+");
          let bdecorationItemPlus2 = document.createTextNode("+");
          let bdecorationItemPlus3 = document.createTextNode("+");
          let bdecorationItemPlus4 = document.createTextNode("+");

          decoration2.classList.add("decoration2");
          bdecorationItem1.classList.add("decoration__item-1", "decoration__item", "decoration__item-back");
          bdecorationItem2.classList.add("decoration__item-2", "decoration__item", "decoration__item-back");
          bdecorationItem3.classList.add("decoration__item-3", "decoration__item", "decoration__item-back");
          bdecorationItem4.classList.add("decoration__item-4", "decoration__item", "decoration__item-back");

          bdecorationItem1.appendChild(bdecorationItemPlus1);
          bdecorationItem2.appendChild(bdecorationItemPlus2);
          bdecorationItem3.appendChild(bdecorationItemPlus3);
          bdecorationItem4.appendChild(bdecorationItemPlus4);

          decoration2.appendChild(bdecorationItem1);
          decoration2.appendChild(bdecorationItem2);
          decoration2.appendChild(bdecorationItem3);
          decoration2.appendChild(bdecorationItem4);

          const random = (min, max) => {
            min = 0.100;
            max = 0.700;
            return (Math.random() * (max - min) + min).toFixed(3);
          };

          front.style.animationDelay = `${random()}s`;
          back.style.animationDelay = `${random()}s`;

          var scont = document.createElement("div");
          scont.classList.add(`score__container`, `score__container--${i+1}`);
          scont.id = (`scorecontainer${i+1}`);

          cell.appendChild(scont);

          cell.appendChild(front);
          cell.appendChild(back);
          front.appendChild(decoration);
          back.appendChild(decoration2);
      }
    }

  render(){
    return (
      <div id="playground" className="playground"></div>
    )
  }

}

export default Gameboard;
