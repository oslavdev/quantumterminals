import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../../actions';


import Header from '../../../components/Header/header';
import Burger from '../../../components/Burger/burger';
import Decor from '../../../components/Decor/decor';
import Dots from '../../../components/Dots/dots';


class Memos extends PureComponent {

  constructor(props){
    super(props);

    this.state ={
      level:'',
      render: false,
    }


  }





  componentDidMount(props){
    this.props.dispatch(getUser(this.props.user.login.id))


  }

  renderStory(){
    let level = this.state.level;
    console.log(level)
    switch(level) {
     case undefined: {
        return(
          <div className="story-content">
            <p>No useful information</p>
          </div>
        );
          break;
       }
        case "3": {
           return(
             <div className="story-content">

               <p>Sometimes I find myself thinking of music.
                 And sometimes I even have a feeling that I can understand, conceive the meaning of this word.
                 But that sensation seems distant, as if reaching me through filter barrier that cuts off all extra frequencies, leaving only a faint echo of perception.  I never heard music, of course.  But the feeling is so real. Engine is rattling under the floor. Is it music? Train jerked and slowly begun to swing from side to side. We moved, alright, I said to myself with relief. I opened my eyes and looked at the window. Endless fields of pure untouched snow. No buildings, no people, a few trees and small wooden construction of unknown origin. White is the colour of chasm.
                 Everyone depict emptiness with back colour. Why is that? The emptiness is definitely white.
               </p>
               <br/>
               <p>
                "Tea? Coffee?" It was a young smiling steward at the door. White curls falling on the face. They don't bother fix them. I shake my head. "No, wait!" I shout. White curls appeared again. "Coffee please." They smiled. "Natural black, no flavours," why not to fix yourself a little feast, even if it is far above what I can afford for now. Soon it won't be a big deal anyway.
               </p>
               <br/>
               <p>
                I reached a suitcase from under the seat. My compact yellow road fellow. Is it bad to personalize inanimate objects? Who can blame. I fished out a thick folder and flopped it on the table. Talking of inanimate object, I need to work. Bumps rose up my spine, I froze. No, it is bad. Black humour, I am not supposed to say that. It is bad.
               </p>
               <br/>
               <p>
                White curls silently materialized in the coupe with a cup of good smelling coffee. I didn't even notice when they came. "I am a bad person," I said. Don't know why I did this. "Why? No, I am sure you are not, miss." They said.
               </p>
               <br/>
               <p>"How can you tell?"</p>
                <br/>
                 <p>  "I can, I have a third eye for bad persons.", then they added. "I work in the south-direction train."</p>
              <br/>
                 <p>  "Alright, good point," I nodded gratefully accepting the cup. That smell. Never drunk a single cup of this drink in my life. The thought cheered me up a little. The curls framed smile still hung above me.</p>
                 <br/>
                 <p>  "Oh, yeah, here," my least favourite moment. I offered my bank card and got back to my papers. Damn, that smell.</p>
              <br/>
                 <p>  "Enjoy your coffee," the smile finally disappeared with the rest of the person leaving me alone. I opened my files.</p>
                  <br/>
                    <h2>Piece is missing...</h2>
             </div>
           );
            break;
          }
          case "4": {
             return(
               <div className="story-content">

                 <p>Sometimes I find myself thinking of music.
                   And sometimes I even have a feeling that I can understand, conceive the meaning of this word.
                   But that sensation seems distant, as if reaching me through filter barrier that cuts off all extra frequencies, leaving only a faint echo of perception.  I never heard music, of course.  But the feeling is so real. Engine is rattling under the floor. Is it music? Train jerked and slowly begun to swing from side to side. We moved, alright, I said to myself with relief. I opened my eyes and looked at the window. Endless fields of pure untouched snow. No buildings, no people, a few trees and small wooden construction of unknown origin. White is the colour of chasm.
                   Everyone depict emptiness with back colour. Why is that? The emptiness is definitely white.
                 </p>
                 <br/>
                 <p>
                  "Tea? Coffee?" It was a young smiling steward at the door. White curls falling on the face. They don't bother fix them. I shake my head. "No, wait!" I shout. White curls appeared again. "Coffee please." They smiled. "Natural black, no flavours," why not to fix yourself a little feast, even if it is far above what I can afford for now. Soon it won't be a big deal anyway.
                 </p>
                 <br/>
                 <p>
                  I reached a suitcase from under the seat. My compact yellow road fellow. Is it bad to personalize inanimate objects? Who can blame. I fished out a thick folder and flopped it on the table. Talking of inanimate object, I need to work. Bumps rose up my spine, I froze. No, it is bad. Black humour, I am not supposed to say that. It is bad.
                 </p>
                 <br/>
                 <p>
                  White curls silently materialized in the coupe with a cup of good smelling coffee. I didn't even notice when they came. "I am a bad person," I said. Don't know why I did this. "Why? No, I am sure you are not, miss." They said.
                 </p>
                 <br/>
                 <p>"How can you tell?"</p>
                  <br/>
                   <p>  "I can, I have a third eye for bad persons.", then they added. "I work in the south-direction train."</p>
                <br/>
                   <p>  "Alright, good point," I nodded gratefully accepting the cup. That smell. Never drunk a single cup of this drink in my life. The thought cheered me up a little. The curls framed smile still hung above me.</p>
                   <br/>
                   <p>  "Oh, yeah, here," my least favourite moment. I offered my bank card and got back to my papers. Damn, that smell.</p>
                <br/>
                   <p>  "Enjoy your coffee," the smile finally disappeared with the rest of the person leaving me alone. I opened my files.</p>
                    <br/>
                      <h2>Piece is missing...</h2>
               </div>
             );
              break;
            }
            case "5": {
               return(
                 <div className="story-content">

                   <p>Sometimes I find myself thinking of music.
                     And sometimes I even have a feeling that I can understand, conceive the meaning of this word.
                     But that sensation seems distant, as if reaching me through filter barrier that cuts off all extra frequencies, leaving only a faint echo of perception.  I never heard music, of course.  But the feeling is so real. Engine is rattling under the floor. Is it music? Train jerked and slowly begun to swing from side to side. We moved, alright, I said to myself with relief. I opened my eyes and looked at the window. Endless fields of pure untouched snow. No buildings, no people, a few trees and small wooden construction of unknown origin. White is the colour of chasm.
                     Everyone depict emptiness with back colour. Why is that? The emptiness is definitely white.
                   </p>
                   <br/>
                   <p>
                    "Tea? Coffee?" It was a young smiling steward at the door. White curls falling on the face. They don't bother fix them. I shake my head. "No, wait!" I shout. White curls appeared again. "Coffee please." They smiled. "Natural black, no flavours," why not to fix yourself a little feast, even if it is far above what I can afford for now. Soon it won't be a big deal anyway.
                   </p>
                   <br/>
                   <p>
                    I reached a suitcase from under the seat. My compact yellow road fellow. Is it bad to personalize inanimate objects? Who can blame. I fished out a thick folder and flopped it on the table. Talking of inanimate object, I need to work. Bumps rose up my spine, I froze. No, it is bad. Black humour, I am not supposed to say that. It is bad.
                   </p>
                   <br/>
                   <p>
                    White curls silently materialized in the coupe with a cup of good smelling coffee. I didn't even notice when they came. "I am a bad person," I said. Don't know why I did this. "Why? No, I am sure you are not, miss." They said.
                   </p>
                   <br/>
                   <p>"How can you tell?"</p>
                    <br/>
                     <p>  "I can, I have a third eye for bad persons.", then they added. "I work in the south-direction train."</p>
                  <br/>
                     <p>  "Alright, good point," I nodded gratefully accepting the cup. That smell. Never drunk a single cup of this drink in my life. The thought cheered me up a little. The curls framed smile still hung above me.</p>
                     <br/>
                     <p>  "Oh, yeah, here," my least favourite moment. I offered my bank card and got back to my papers. Damn, that smell.</p>
                  <br/>
                     <p>  "Enjoy your coffee," the smile finally disappeared with the rest of the person leaving me alone. I opened my files.</p>
                      <br/>
                        <h2>Piece is missing...</h2>
                 </div>
               );
                break;
              }
              case "6": {
                 return(
                   <div className="story-content">

                     <p>Sometimes I find myself thinking of music.
                       And sometimes I even have a feeling that I can understand, conceive the meaning of this word.
                       But that sensation seems distant, as if reaching me through filter barrier that cuts off all extra frequencies, leaving only a faint echo of perception.  I never heard music, of course.  But the feeling is so real. Engine is rattling under the floor. Is it music? Train jerked and slowly begun to swing from side to side. We moved, alright, I said to myself with relief. I opened my eyes and looked at the window. Endless fields of pure untouched snow. No buildings, no people, a few trees and small wooden construction of unknown origin. White is the colour of chasm.
                       Everyone depict emptiness with back colour. Why is that? The emptiness is definitely white.
                     </p>
                     <br/>
                     <p>
                      "Tea? Coffee?" It was a young smiling steward at the door. White curls falling on the face. They don't bother fix them. I shake my head. "No, wait!" I shout. White curls appeared again. "Coffee please." They smiled. "Natural black, no flavours," why not to fix yourself a little feast, even if it is far above what I can afford for now. Soon it won't be a big deal anyway.
                     </p>
                     <br/>
                     <p>
                      I reached a suitcase from under the seat. My compact yellow road fellow. Is it bad to personalize inanimate objects? Who can blame. I fished out a thick folder and flopped it on the table. Talking of inanimate object, I need to work. Bumps rose up my spine, I froze. No, it is bad. Black humour, I am not supposed to say that. It is bad.
                     </p>
                     <br/>
                     <p>
                      White curls silently materialized in the coupe with a cup of good smelling coffee. I didn't even notice when they came. "I am a bad person," I said. Don't know why I did this. "Why? No, I am sure you are not, miss." They said.
                     </p>
                     <br/>
                     <p>"How can you tell?"</p>
                      <br/>
                       <p>  "I can, I have a third eye for bad persons.", then they added. "I work in the south-direction train."</p>
                    <br/>
                       <p>  "Alright, good point," I nodded gratefully accepting the cup. That smell. Never drunk a single cup of this drink in my life. The thought cheered me up a little. The curls framed smile still hung above me.</p>
                       <br/>
                       <p>  "Oh, yeah, here," my least favourite moment. I offered my bank card and got back to my papers. Damn, that smell.</p>
                    <br/>
                       <p>  "Enjoy your coffee," the smile finally disappeared with the rest of the person leaving me alone. I opened my files.</p>
                        <br/>
                        <p>
                        I collected only three memories this month. That's not much, if I'll keep this going, I'll stay without a job. Partially that's why I agreed on this doubtful adventure. Southern parts were closed since the Collapse. It is still not safe there. I capitalized on my acquaintances in Citadel. They signed me a pass. And now I was going straight to the heart of the south. There are not many passengers on board. I have not decided yet if it is good or bad. Anyway, the goal is worth it. Huge accumulations of untouched memories. Every month if not a week a new spot appears here and there and no one dare to come too close. They all are afraid. I don't blame them. I am too, I am too afraid. But I'm also despaired. It equalizes all cons. That's how it works. That's how I work; this is some kind of a life pattern.
                        </p>
                        <br/>
                        <p>
                        I jumped around the document and unwrapped the map. I thoughtfully marked all spots I knew with a red marker. On the empty field I wrote down all useful information: phones, addresses, people. Especially people. I don't want to go nuts while I am there. So I will need a company. At least someone more a less in their mind. I decided to stay at a small hostel in Yellow brick district. Have no idea why it is called so. I imagine the whole district built of yellow bricks. This idea fascinated me, partially that's why I chose this place. Interesting, is it far from the station. I tried to make sense out of this map. I had a feeling likes this was not very accurate map.
                        </p>
                        <br/>
                        <p>
                        I put out the map and sighed. "Damn, my coffee, I forgot." I took the cup and made a sip. It is cold. Disappointed I put the cup on the table. This is my first every cup of coffee and I spoiled the moment. I paid a fortune for that. In the mouth remained a bitter taste. It is not bad even cold, though. I made a second sip.
                        </p>
                        <br/>
                        <p>
                        What did I know about what happened in the south? I tried to go thought the facts I heard or learned. Better be sure you know what to do, for not to get into troubles.
                        </p>
                        <br/>
                        <p>
                        South. The place of father and mother of freedom – Pyrrhon. It is them who started everything, and them who ended it. There were times, when people communicated with each other using only mind, times when no one had a single secret, everyone were the one. Time of collective memory and responsibility for each other. Time of cloud knowledge. People didn't work, they dedicated parts of their brains for global calculations. A world-wide biological cloud computer, that was. But people were unhappy, they had no freedom, they had no true knowledge of who they are and what they do. Why they live and what do they pursue as society and as individuals.
                        </p>
                        <br/>
                          <h2>Piece is missing...</h2>
                   </div>
                 );
                  break;
                }
                case "7": {
                   return(
                     <div className="story-content">

                       <p>Sometimes I find myself thinking of music.
                         And sometimes I even have a feeling that I can understand, conceive the meaning of this word.
                         But that sensation seems distant, as if reaching me through filter barrier that cuts off all extra frequencies, leaving only a faint echo of perception.  I never heard music, of course.  But the feeling is so real. Engine is rattling under the floor. Is it music? Train jerked and slowly begun to swing from side to side. We moved, alright, I said to myself with relief. I opened my eyes and looked at the window. Endless fields of pure untouched snow. No buildings, no people, a few trees and small wooden construction of unknown origin. White is the colour of chasm.
                         Everyone depict emptiness with back colour. Why is that? The emptiness is definitely white.
                       </p>
                       <br/>
                       <p>
                        "Tea? Coffee?" It was a young smiling steward at the door. White curls falling on the face. They don't bother fix them. I shake my head. "No, wait!" I shout. White curls appeared again. "Coffee please." They smiled. "Natural black, no flavours," why not to fix yourself a little feast, even if it is far above what I can afford for now. Soon it won't be a big deal anyway.
                       </p>
                       <br/>
                       <p>
                        I reached a suitcase from under the seat. My compact yellow road fellow. Is it bad to personalize inanimate objects? Who can blame. I fished out a thick folder and flopped it on the table. Talking of inanimate object, I need to work. Bumps rose up my spine, I froze. No, it is bad. Black humour, I am not supposed to say that. It is bad.
                       </p>
                       <br/>
                       <p>
                        White curls silently materialized in the coupe with a cup of good smelling coffee. I didn't even notice when they came. "I am a bad person," I said. Don't know why I did this. "Why? No, I am sure you are not, miss." They said.
                       </p>
                       <br/>
                       <p>"How can you tell?"</p>
                        <br/>
                         <p>  "I can, I have a third eye for bad persons.", then they added. "I work in the south-direction train."</p>
                      <br/>
                         <p>  "Alright, good point," I nodded gratefully accepting the cup. That smell. Never drunk a single cup of this drink in my life. The thought cheered me up a little. The curls framed smile still hung above me.</p>
                         <br/>
                         <p>  "Oh, yeah, here," my least favourite moment. I offered my bank card and got back to my papers. Damn, that smell.</p>
                      <br/>
                         <p>  "Enjoy your coffee," the smile finally disappeared with the rest of the person leaving me alone. I opened my files.</p>
                          <br/>
                          <p>
                          I collected only three memories this month. That's not much, if I'll keep this going, I'll stay without a job. Partially that's why I agreed on this doubtful adventure. Southern parts were closed since the Collapse. It is still not safe there. I capitalized on my acquaintances in Citadel. They signed me a pass. And now I was going straight to the heart of the south. There are not many passengers on board. I have not decided yet if it is good or bad. Anyway, the goal is worth it. Huge accumulations of untouched memories. Every month if not a week a new spot appears here and there and no one dare to come too close. They all are afraid. I don't blame them. I am too, I am too afraid. But I'm also despaired. It equalizes all cons. That's how it works. That's how I work; this is some kind of a life pattern.
                          </p>
                          <br/>
                          <p>
                          I jumped around the document and unwrapped the map. I thoughtfully marked all spots I knew with a red marker. On the empty field I wrote down all useful information: phones, addresses, people. Especially people. I don't want to go nuts while I am there. So I will need a company. At least someone more a less in their mind. I decided to stay at a small hostel in Yellow brick district. Have no idea why it is called so. I imagine the whole district built of yellow bricks. This idea fascinated me, partially that's why I chose this place. Interesting, is it far from the station. I tried to make sense out of this map. I had a feeling likes this was not very accurate map.
                          </p>
                          <br/>
                          <p>
                          I put out the map and sighed. "Damn, my coffee, I forgot." I took the cup and made a sip. It is cold. Disappointed I put the cup on the table. This is my first every cup of coffee and I spoiled the moment. I paid a fortune for that. In the mouth remained a bitter taste. It is not bad even cold, though. I made a second sip.
                          </p>
                          <br/>
                          <p>
                          What did I know about what happened in the south? I tried to go thought the facts I heard or learned. Better be sure you know what to do, for not to get into troubles.
                          </p>
                          <br/>
                          <p>
                          South. The place of father and mother of freedom – Pyrrhon. It is them who started everything, and them who ended it. There were times, when people communicated with each other using only mind, times when no one had a single secret, everyone were the one. Time of collective memory and responsibility for each other. Time of cloud knowledge. People didn't work, they dedicated parts of their brains for global calculations. A world-wide biological cloud computer, that was. But people were unhappy, they had no freedom, they had no true knowledge of who they are and what they do. Why they live and what do they pursue as society and as individuals.
                          </p>
                          <br/>
                            <h2>Piece is missing...</h2>
                     </div>
                   );
                    break;
                  }
                  case "8": {
                     return(
                       <div className="story-content">

                         <p>Sometimes I find myself thinking of music.
                           And sometimes I even have a feeling that I can understand, conceive the meaning of this word.
                           But that sensation seems distant, as if reaching me through filter barrier that cuts off all extra frequencies, leaving only a faint echo of perception.  I never heard music, of course.  But the feeling is so real. Engine is rattling under the floor. Is it music? Train jerked and slowly begun to swing from side to side. We moved, alright, I said to myself with relief. I opened my eyes and looked at the window. Endless fields of pure untouched snow. No buildings, no people, a few trees and small wooden construction of unknown origin. White is the colour of chasm.
                           Everyone depict emptiness with back colour. Why is that? The emptiness is definitely white.
                         </p>
                         <br/>
                         <p>
                          "Tea? Coffee?" It was a young smiling steward at the door. White curls falling on the face. They don't bother fix them. I shake my head. "No, wait!" I shout. White curls appeared again. "Coffee please." They smiled. "Natural black, no flavours," why not to fix yourself a little feast, even if it is far above what I can afford for now. Soon it won't be a big deal anyway.
                         </p>
                         <br/>
                         <p>
                          I reached a suitcase from under the seat. My compact yellow road fellow. Is it bad to personalize inanimate objects? Who can blame. I fished out a thick folder and flopped it on the table. Talking of inanimate object, I need to work. Bumps rose up my spine, I froze. No, it is bad. Black humour, I am not supposed to say that. It is bad.
                         </p>
                         <br/>
                         <p>
                          White curls silently materialized in the coupe with a cup of good smelling coffee. I didn't even notice when they came. "I am a bad person," I said. Don't know why I did this. "Why? No, I am sure you are not, miss." They said.
                         </p>
                         <br/>
                         <p>"How can you tell?"</p>
                          <br/>
                           <p>  "I can, I have a third eye for bad persons.", then they added. "I work in the south-direction train."</p>
                        <br/>
                           <p>  "Alright, good point," I nodded gratefully accepting the cup. That smell. Never drunk a single cup of this drink in my life. The thought cheered me up a little. The curls framed smile still hung above me.</p>
                           <br/>
                           <p>  "Oh, yeah, here," my least favourite moment. I offered my bank card and got back to my papers. Damn, that smell.</p>
                        <br/>
                           <p>  "Enjoy your coffee," the smile finally disappeared with the rest of the person leaving me alone. I opened my files.</p>
                            <br/>
                            <p>
                            I collected only three memories this month. That's not much, if I'll keep this going, I'll stay without a job. Partially that's why I agreed on this doubtful adventure. Southern parts were closed since the Collapse. It is still not safe there. I capitalized on my acquaintances in Citadel. They signed me a pass. And now I was going straight to the heart of the south. There are not many passengers on board. I have not decided yet if it is good or bad. Anyway, the goal is worth it. Huge accumulations of untouched memories. Every month if not a week a new spot appears here and there and no one dare to come too close. They all are afraid. I don't blame them. I am too, I am too afraid. But I'm also despaired. It equalizes all cons. That's how it works. That's how I work; this is some kind of a life pattern.
                            </p>
                            <br/>
                            <p>
                            I jumped around the document and unwrapped the map. I thoughtfully marked all spots I knew with a red marker. On the empty field I wrote down all useful information: phones, addresses, people. Especially people. I don't want to go nuts while I am there. So I will need a company. At least someone more a less in their mind. I decided to stay at a small hostel in Yellow brick district. Have no idea why it is called so. I imagine the whole district built of yellow bricks. This idea fascinated me, partially that's why I chose this place. Interesting, is it far from the station. I tried to make sense out of this map. I had a feeling likes this was not very accurate map.
                            </p>
                            <br/>
                            <p>
                            I put out the map and sighed. "Damn, my coffee, I forgot." I took the cup and made a sip. It is cold. Disappointed I put the cup on the table. This is my first every cup of coffee and I spoiled the moment. I paid a fortune for that. In the mouth remained a bitter taste. It is not bad even cold, though. I made a second sip.
                            </p>
                            <br/>
                            <p>
                            What did I know about what happened in the south? I tried to go thought the facts I heard or learned. Better be sure you know what to do, for not to get into troubles.
                            </p>
                            <br/>
                            <p>
                            South. The place of father and mother of freedom – Pyrrhon. It is them who started everything, and them who ended it. There were times, when people communicated with each other using only mind, times when no one had a single secret, everyone were the one. Time of collective memory and responsibility for each other. Time of cloud knowledge. People didn't work, they dedicated parts of their brains for global calculations. A world-wide biological cloud computer, that was. But people were unhappy, they had no freedom, they had no true knowledge of who they are and what they do. Why they live and what do they pursue as society and as individuals.
                            </p>
                            <br/>
                              <h2>Piece is missing...</h2>
                       </div>
                     );
                      break;
                    }
                    case "9": {
                       return(
                         <div className="story-content">

                           <p>Sometimes I find myself thinking of music.
                             And sometimes I even have a feeling that I can understand, conceive the meaning of this word.
                             But that sensation seems distant, as if reaching me through filter barrier that cuts off all extra frequencies, leaving only a faint echo of perception.  I never heard music, of course.  But the feeling is so real. Engine is rattling under the floor. Is it music? Train jerked and slowly begun to swing from side to side. We moved, alright, I said to myself with relief. I opened my eyes and looked at the window. Endless fields of pure untouched snow. No buildings, no people, a few trees and small wooden construction of unknown origin. White is the colour of chasm.
                             Everyone depict emptiness with back colour. Why is that? The emptiness is definitely white.
                           </p>
                           <br/>
                           <p>
                            "Tea? Coffee?" It was a young smiling steward at the door. White curls falling on the face. They don't bother fix them. I shake my head. "No, wait!" I shout. White curls appeared again. "Coffee please." They smiled. "Natural black, no flavours," why not to fix yourself a little feast, even if it is far above what I can afford for now. Soon it won't be a big deal anyway.
                           </p>
                           <br/>
                           <p>
                            I reached a suitcase from under the seat. My compact yellow road fellow. Is it bad to personalize inanimate objects? Who can blame. I fished out a thick folder and flopped it on the table. Talking of inanimate object, I need to work. Bumps rose up my spine, I froze. No, it is bad. Black humour, I am not supposed to say that. It is bad.
                           </p>
                           <br/>
                           <p>
                            White curls silently materialized in the coupe with a cup of good smelling coffee. I didn't even notice when they came. "I am a bad person," I said. Don't know why I did this. "Why? No, I am sure you are not, miss." They said.
                           </p>
                           <br/>
                           <p>"How can you tell?"</p>
                            <br/>
                             <p>  "I can, I have a third eye for bad persons.", then they added. "I work in the south-direction train."</p>
                          <br/>
                             <p>  "Alright, good point," I nodded gratefully accepting the cup. That smell. Never drunk a single cup of this drink in my life. The thought cheered me up a little. The curls framed smile still hung above me.</p>
                             <br/>
                             <p>  "Oh, yeah, here," my least favourite moment. I offered my bank card and got back to my papers. Damn, that smell.</p>
                          <br/>
                             <p>  "Enjoy your coffee," the smile finally disappeared with the rest of the person leaving me alone. I opened my files.</p>
                              <br/>
                              <p>
                              I collected only three memories this month. That's not much, if I'll keep this going, I'll stay without a job. Partially that's why I agreed on this doubtful adventure. Southern parts were closed since the Collapse. It is still not safe there. I capitalized on my acquaintances in Citadel. They signed me a pass. And now I was going straight to the heart of the south. There are not many passengers on board. I have not decided yet if it is good or bad. Anyway, the goal is worth it. Huge accumulations of untouched memories. Every month if not a week a new spot appears here and there and no one dare to come too close. They all are afraid. I don't blame them. I am too, I am too afraid. But I'm also despaired. It equalizes all cons. That's how it works. That's how I work; this is some kind of a life pattern.
                              </p>
                              <br/>
                              <p>
                              I jumped around the document and unwrapped the map. I thoughtfully marked all spots I knew with a red marker. On the empty field I wrote down all useful information: phones, addresses, people. Especially people. I don't want to go nuts while I am there. So I will need a company. At least someone more a less in their mind. I decided to stay at a small hostel in Yellow brick district. Have no idea why it is called so. I imagine the whole district built of yellow bricks. This idea fascinated me, partially that's why I chose this place. Interesting, is it far from the station. I tried to make sense out of this map. I had a feeling likes this was not very accurate map.
                              </p>
                              <br/>
                              <p>
                              I put out the map and sighed. "Damn, my coffee, I forgot." I took the cup and made a sip. It is cold. Disappointed I put the cup on the table. This is my first every cup of coffee and I spoiled the moment. I paid a fortune for that. In the mouth remained a bitter taste. It is not bad even cold, though. I made a second sip.
                              </p>
                              <br/>
                              <p>
                              What did I know about what happened in the south? I tried to go thought the facts I heard or learned. Better be sure you know what to do, for not to get into troubles.
                              </p>
                              <br/>
                              <p>
                              South. The place of father and mother of freedom – Pyrrhon. It is them who started everything, and them who ended it. There were times, when people communicated with each other using only mind, times when no one had a single secret, everyone were the one. Time of collective memory and responsibility for each other. Time of cloud knowledge. People didn't work, they dedicated parts of their brains for global calculations. A world-wide biological cloud computer, that was. But people were unhappy, they had no freedom, they had no true knowledge of who they are and what they do. Why they live and what do they pursue as society and as individuals.
                              </p>
                              <br/>
                              <p>
                              Pyrrhon was the one who found the bravery to rebel. And they succeeded. The Cloud fell on the earth shattered in pieces. The network was broken. Authority was destroyed. But not everything was as they expected. People, who used to be part of the whole were left alone, cut out of the rest of the world. They became even more unhappy than they were. There were no mind communication, they had to learn to speak using their vocal cords again, they had to begin building a new world, they had to work hard to survive. Many of them lost their minds. They were shattered with the Cloud. Humanity lost 70% percent of their knowledge. They were thrown back in centuries in development. But humanity rapidly gained some of the lost knowledge because of people like me, who track quantum spots with lost memories and collect them then send to the Citadel to decipher and  analyze data. Most of the time it is just random remembrances of people, but sometimes we find useful information. History, technologies, art and music. Ah, I had never found a single piece of music. I wish I could, I heard these stories of  lucky QTrackhounds, who found the music. It is unbelievable what they tell about it. It is like a magic!
                              </p>
                              <br/>
                              <p>
                              Finding these pieces helped people to reconstruct events of the Collapse. But still we have a lot of holes in the story. The only thing we are sure about that's it all started on the South. It explains the massive destructions and anomalies in that zone.
                              </p>
                              <br/>
                              <p>
                              What about Pyrrhon? No one knows where they are now and if they even existed. The only thing I know, that I found only one mention of them in memory during my five year career. It was a legend like story that explains global cooling down of the earth. It is says that people used to control weather, calling different conditions according to approved perfect 30 days pattern. It was raining every Friday, can you imagine that? Pyrrhon, it is believed really liked snow. But it was rarely snowing back then. So, when the collapse happened, on the whole planet established permanent winter. Was it a conscious decision or accident the story does not explains. But f they exist and still alive, I bet they are happy now, because there is plenty of snow now.
                              </p>
                              <br/>
                              <p>
                              I stopped taking to imagination and looked at the window. On the horizon outlined silhouette of Citadell – a huge floating machine in the sky. We were close. The border was crossed a long time ago, and I didn't even notice it. No one even asked me for a pass. Maybe if I didn't have one I wouldn't be permitted on board. I don't know how exactly it works. I stretched my arm and grabbed completely cold drink and made the final sip. Coffee is overrated.
                              </p>
                              <br/>
                              <p>
                              The train suddenly stopped. If I haven't finished my drink I would spill it on my coat. I people running behind the door in coupe. I stood up and waked out to look outside. The curled-framed face bulked at me. It looked scared.
                              </p>
                              <br/>
                                <h2>Piece is missing...</h2>
                         </div>
                       );
                        break;
                      }
                      case "10": {
                         return(
                           <div className="story-content">

                             <p>Sometimes I find myself thinking of music.
                               And sometimes I even have a feeling that I can understand, conceive the meaning of this word.
                               But that sensation seems distant, as if reaching me through filter barrier that cuts off all extra frequencies, leaving only a faint echo of perception.  I never heard music, of course.  But the feeling is so real. Engine is rattling under the floor. Is it music? Train jerked and slowly begun to swing from side to side. We moved, alright, I said to myself with relief. I opened my eyes and looked at the window. Endless fields of pure untouched snow. No buildings, no people, a few trees and small wooden construction of unknown origin. White is the colour of chasm.
                               Everyone depict emptiness with back colour. Why is that? The emptiness is definitely white.
                             </p>
                             <br/>
                             <p>
                              "Tea? Coffee?" It was a young smiling steward at the door. White curls falling on the face. They don't bother fix them. I shake my head. "No, wait!" I shout. White curls appeared again. "Coffee please." They smiled. "Natural black, no flavours," why not to fix yourself a little feast, even if it is far above what I can afford for now. Soon it won't be a big deal anyway.
                             </p>
                             <br/>
                             <p>
                              I reached a suitcase from under the seat. My compact yellow road fellow. Is it bad to personalize inanimate objects? Who can blame. I fished out a thick folder and flopped it on the table. Talking of inanimate object, I need to work. Bumps rose up my spine, I froze. No, it is bad. Black humour, I am not supposed to say that. It is bad.
                             </p>
                             <br/>
                             <p>
                              White curls silently materialized in the coupe with a cup of good smelling coffee. I didn't even notice when they came. "I am a bad person," I said. Don't know why I did this. "Why? No, I am sure you are not, miss." They said.
                             </p>
                             <br/>
                             <p>"How can you tell?"</p>
                              <br/>
                               <p>  "I can, I have a third eye for bad persons.", then they added. "I work in the south-direction train."</p>
                            <br/>
                               <p>  "Alright, good point," I nodded gratefully accepting the cup. That smell. Never drunk a single cup of this drink in my life. The thought cheered me up a little. The curls framed smile still hung above me.</p>
                               <br/>
                               <p>  "Oh, yeah, here," my least favourite moment. I offered my bank card and got back to my papers. Damn, that smell.</p>
                            <br/>
                               <p>  "Enjoy your coffee," the smile finally disappeared with the rest of the person leaving me alone. I opened my files.</p>
                                <br/>
                                <p>
                                I collected only three memories this month. That's not much, if I'll keep this going, I'll stay without a job. Partially that's why I agreed on this doubtful adventure. Southern parts were closed since the Collapse. It is still not safe there. I capitalized on my acquaintances in Citadel. They signed me a pass. And now I was going straight to the heart of the south. There are not many passengers on board. I have not decided yet if it is good or bad. Anyway, the goal is worth it. Huge accumulations of untouched memories. Every month if not a week a new spot appears here and there and no one dare to come too close. They all are afraid. I don't blame them. I am too, I am too afraid. But I'm also despaired. It equalizes all cons. That's how it works. That's how I work; this is some kind of a life pattern.
                                </p>
                                <br/>
                                <p>
                                I jumped around the document and unwrapped the map. I thoughtfully marked all spots I knew with a red marker. On the empty field I wrote down all useful information: phones, addresses, people. Especially people. I don't want to go nuts while I am there. So I will need a company. At least someone more a less in their mind. I decided to stay at a small hostel in Yellow brick district. Have no idea why it is called so. I imagine the whole district built of yellow bricks. This idea fascinated me, partially that's why I chose this place. Interesting, is it far from the station. I tried to make sense out of this map. I had a feeling likes this was not very accurate map.
                                </p>
                                <br/>
                                <p>
                                I put out the map and sighed. "Damn, my coffee, I forgot." I took the cup and made a sip. It is cold. Disappointed I put the cup on the table. This is my first every cup of coffee and I spoiled the moment. I paid a fortune for that. In the mouth remained a bitter taste. It is not bad even cold, though. I made a second sip.
                                </p>
                                <br/>
                                <p>
                                What did I know about what happened in the south? I tried to go thought the facts I heard or learned. Better be sure you know what to do, for not to get into troubles.
                                </p>
                                <br/>
                                <p>
                                South. The place of father and mother of freedom – Pyrrhon. It is them who started everything, and them who ended it. There were times, when people communicated with each other using only mind, times when no one had a single secret, everyone were the one. Time of collective memory and responsibility for each other. Time of cloud knowledge. People didn't work, they dedicated parts of their brains for global calculations. A world-wide biological cloud computer, that was. But people were unhappy, they had no freedom, they had no true knowledge of who they are and what they do. Why they live and what do they pursue as society and as individuals.
                                </p>
                                <br/>
                                <p>
                                Pyrrhon was the one who found the bravery to rebel. And they succeeded. The Cloud fell on the earth shattered in pieces. The network was broken. Authority was destroyed. But not everything was as they expected. People, who used to be part of the whole were left alone, cut out of the rest of the world. They became even more unhappy than they were. There were no mind communication, they had to learn to speak using their vocal cords again, they had to begin building a new world, they had to work hard to survive. Many of them lost their minds. They were shattered with the Cloud. Humanity lost 70% percent of their knowledge. They were thrown back in centuries in development. But humanity rapidly gained some of the lost knowledge because of people like me, who track quantum spots with lost memories and collect them then send to the Citadel to decipher and  analyze data. Most of the time it is just random remembrances of people, but sometimes we find useful information. History, technologies, art and music. Ah, I had never found a single piece of music. I wish I could, I heard these stories of  lucky QTrackhounds, who found the music. It is unbelievable what they tell about it. It is like a magic!
                                </p>
                                <br/>
                                <p>
                                Finding these pieces helped people to reconstruct events of the Collapse. But still we have a lot of holes in the story. The only thing we are sure about that's it all started on the South. It explains the massive destructions and anomalies in that zone.
                                </p>
                                <br/>
                                <p>
                                What about Pyrrhon? No one knows where they are now and if they even existed. The only thing I know, that I found only one mention of them in memory during my five year career. It was a legend like story that explains global cooling down of the earth. It is says that people used to control weather, calling different conditions according to approved perfect 30 days pattern. It was raining every Friday, can you imagine that? Pyrrhon, it is believed really liked snow. But it was rarely snowing back then. So, when the collapse happened, on the whole planet established permanent winter. Was it a conscious decision or accident the story does not explains. But f they exist and still alive, I bet they are happy now, because there is plenty of snow now.
                                </p>
                                <br/>
                                <p>
                                I stopped taking to imagination and looked at the window. On the horizon outlined silhouette of Citadell – a huge floating machine in the sky. We were close. The border was crossed a long time ago, and I didn't even notice it. No one even asked me for a pass. Maybe if I didn't have one I wouldn't be permitted on board. I don't know how exactly it works. I stretched my arm and grabbed completely cold drink and made the final sip. Coffee is overrated.
                                </p>
                                <br/>
                                <p>
                                The train suddenly stopped. If I haven't finished my drink I would spill it on my coat. I people running behind the door in coupe. I stood up and waked out to look outside. The curled-framed face bulked at me. It looked scared.
                                </p>
                                <br/>
                                <h2>Piece is missing...</h2>
                           </div>
                         );
                          break;
                        }
                        case "11": {
                           return(
                             <div className="story-content">

                               <p>Sometimes I find myself thinking of music.
                                 And sometimes I even have a feeling that I can understand, conceive the meaning of this word.
                                 But that sensation seems distant, as if reaching me through filter barrier that cuts off all extra frequencies, leaving only a faint echo of perception.  I never heard music, of course.  But the feeling is so real. Engine is rattling under the floor. Is it music? Train jerked and slowly begun to swing from side to side. We moved, alright, I said to myself with relief. I opened my eyes and looked at the window. Endless fields of pure untouched snow. No buildings, no people, a few trees and small wooden construction of unknown origin. White is the colour of chasm.
                                 Everyone depict emptiness with back colour. Why is that? The emptiness is definitely white.
                               </p>
                               <br/>
                               <p>
                                "Tea? Coffee?" It was a young smiling steward at the door. White curls falling on the face. They don't bother fix them. I shake my head. "No, wait!" I shout. White curls appeared again. "Coffee please." They smiled. "Natural black, no flavours," why not to fix yourself a little feast, even if it is far above what I can afford for now. Soon it won't be a big deal anyway.
                               </p>
                               <br/>
                               <p>
                                I reached a suitcase from under the seat. My compact yellow road fellow. Is it bad to personalize inanimate objects? Who can blame. I fished out a thick folder and flopped it on the table. Talking of inanimate object, I need to work. Bumps rose up my spine, I froze. No, it is bad. Black humour, I am not supposed to say that. It is bad.
                               </p>
                               <br/>
                               <p>
                                White curls silently materialized in the coupe with a cup of good smelling coffee. I didn't even notice when they came. "I am a bad person," I said. Don't know why I did this. "Why? No, I am sure you are not, miss." They said.
                               </p>
                               <br/>
                               <p>"How can you tell?"</p>
                                <br/>
                                 <p>  "I can, I have a third eye for bad persons.", then they added. "I work in the south-direction train."</p>
                              <br/>
                                 <p>  "Alright, good point," I nodded gratefully accepting the cup. That smell. Never drunk a single cup of this drink in my life. The thought cheered me up a little. The curls framed smile still hung above me.</p>
                                 <br/>
                                 <p>  "Oh, yeah, here," my least favourite moment. I offered my bank card and got back to my papers. Damn, that smell.</p>
                              <br/>
                                 <p>  "Enjoy your coffee," the smile finally disappeared with the rest of the person leaving me alone. I opened my files.</p>
                                  <br/>
                                  <p>
                                  I collected only three memories this month. That's not much, if I'll keep this going, I'll stay without a job. Partially that's why I agreed on this doubtful adventure. Southern parts were closed since the Collapse. It is still not safe there. I capitalized on my acquaintances in Citadel. They signed me a pass. And now I was going straight to the heart of the south. There are not many passengers on board. I have not decided yet if it is good or bad. Anyway, the goal is worth it. Huge accumulations of untouched memories. Every month if not a week a new spot appears here and there and no one dare to come too close. They all are afraid. I don't blame them. I am too, I am too afraid. But I'm also despaired. It equalizes all cons. That's how it works. That's how I work; this is some kind of a life pattern.
                                  </p>
                                  <br/>
                                  <p>
                                  I jumped around the document and unwrapped the map. I thoughtfully marked all spots I knew with a red marker. On the empty field I wrote down all useful information: phones, addresses, people. Especially people. I don't want to go nuts while I am there. So I will need a company. At least someone more a less in their mind. I decided to stay at a small hostel in Yellow brick district. Have no idea why it is called so. I imagine the whole district built of yellow bricks. This idea fascinated me, partially that's why I chose this place. Interesting, is it far from the station. I tried to make sense out of this map. I had a feeling likes this was not very accurate map.
                                  </p>
                                  <br/>
                                  <p>
                                  I put out the map and sighed. "Damn, my coffee, I forgot." I took the cup and made a sip. It is cold. Disappointed I put the cup on the table. This is my first every cup of coffee and I spoiled the moment. I paid a fortune for that. In the mouth remained a bitter taste. It is not bad even cold, though. I made a second sip.
                                  </p>
                                  <br/>
                                  <p>
                                  What did I know about what happened in the south? I tried to go thought the facts I heard or learned. Better be sure you know what to do, for not to get into troubles.
                                  </p>
                                  <br/>
                                  <p>
                                  South. The place of father and mother of freedom – Pyrrhon. It is them who started everything, and them who ended it. There were times, when people communicated with each other using only mind, times when no one had a single secret, everyone were the one. Time of collective memory and responsibility for each other. Time of cloud knowledge. People didn't work, they dedicated parts of their brains for global calculations. A world-wide biological cloud computer, that was. But people were unhappy, they had no freedom, they had no true knowledge of who they are and what they do. Why they live and what do they pursue as society and as individuals.
                                  </p>
                                  <br/>
                                  <p>
                                  Pyrrhon was the one who found the bravery to rebel. And they succeeded. The Cloud fell on the earth shattered in pieces. The network was broken. Authority was destroyed. But not everything was as they expected. People, who used to be part of the whole were left alone, cut out of the rest of the world. They became even more unhappy than they were. There were no mind communication, they had to learn to speak using their vocal cords again, they had to begin building a new world, they had to work hard to survive. Many of them lost their minds. They were shattered with the Cloud. Humanity lost 70% percent of their knowledge. They were thrown back in centuries in development. But humanity rapidly gained some of the lost knowledge because of people like me, who track quantum spots with lost memories and collect them then send to the Citadel to decipher and  analyze data. Most of the time it is just random remembrances of people, but sometimes we find useful information. History, technologies, art and music. Ah, I had never found a single piece of music. I wish I could, I heard these stories of  lucky QTrackhounds, who found the music. It is unbelievable what they tell about it. It is like a magic!
                                  </p>
                                  <br/>
                                  <p>
                                  Finding these pieces helped people to reconstruct events of the Collapse. But still we have a lot of holes in the story. The only thing we are sure about that's it all started on the South. It explains the massive destructions and anomalies in that zone.
                                  </p>
                                  <br/>
                                  <p>
                                  What about Pyrrhon? No one knows where they are now and if they even existed. The only thing I know, that I found only one mention of them in memory during my five year career. It was a legend like story that explains global cooling down of the earth. It is says that people used to control weather, calling different conditions according to approved perfect 30 days pattern. It was raining every Friday, can you imagine that? Pyrrhon, it is believed really liked snow. But it was rarely snowing back then. So, when the collapse happened, on the whole planet established permanent winter. Was it a conscious decision or accident the story does not explains. But f they exist and still alive, I bet they are happy now, because there is plenty of snow now.
                                  </p>
                                  <br/>
                                  <p>
                                  I stopped taking to imagination and looked at the window. On the horizon outlined silhouette of Citadell – a huge floating machine in the sky. We were close. The border was crossed a long time ago, and I didn't even notice it. No one even asked me for a pass. Maybe if I didn't have one I wouldn't be permitted on board. I don't know how exactly it works. I stretched my arm and grabbed completely cold drink and made the final sip. Coffee is overrated.
                                  </p>
                                  <br/>
                                  <p>
                                  The train suddenly stopped. If I haven't finished my drink I would spill it on my coat. I people running behind the door in coupe. I stood up and waked out to look outside. The curled-framed face bulked at me. It looked scared.
                                  </p>
                                  <br/>
                                  <h2>Piece is missing...</h2>
                             </div>
                           );
                            break;
                          }
                          case "12": {
                             return(
                               <div className="story-content">

                                 <p>Sometimes I find myself thinking of music.
                                   And sometimes I even have a feeling that I can understand, conceive the meaning of this word.
                                   But that sensation seems distant, as if reaching me through filter barrier that cuts off all extra frequencies, leaving only a faint echo of perception.  I never heard music, of course.  But the feeling is so real. Engine is rattling under the floor. Is it music? Train jerked and slowly begun to swing from side to side. We moved, alright, I said to myself with relief. I opened my eyes and looked at the window. Endless fields of pure untouched snow. No buildings, no people, a few trees and small wooden construction of unknown origin. White is the colour of chasm.
                                   Everyone depict emptiness with back colour. Why is that? The emptiness is definitely white.
                                 </p>
                                 <br/>
                                 <p>
                                  "Tea? Coffee?" It was a young smiling steward at the door. White curls falling on the face. They don't bother fix them. I shake my head. "No, wait!" I shout. White curls appeared again. "Coffee please." They smiled. "Natural black, no flavours," why not to fix yourself a little feast, even if it is far above what I can afford for now. Soon it won't be a big deal anyway.
                                 </p>
                                 <br/>
                                 <p>
                                  I reached a suitcase from under the seat. My compact yellow road fellow. Is it bad to personalize inanimate objects? Who can blame. I fished out a thick folder and flopped it on the table. Talking of inanimate object, I need to work. Bumps rose up my spine, I froze. No, it is bad. Black humour, I am not supposed to say that. It is bad.
                                 </p>
                                 <br/>
                                 <p>
                                  White curls silently materialized in the coupe with a cup of good smelling coffee. I didn't even notice when they came. "I am a bad person," I said. Don't know why I did this. "Why? No, I am sure you are not, miss." They said.
                                 </p>
                                 <br/>
                                 <p>"How can you tell?"</p>
                                  <br/>
                                   <p>  "I can, I have a third eye for bad persons.", then they added. "I work in the south-direction train."</p>
                                <br/>
                                   <p>  "Alright, good point," I nodded gratefully accepting the cup. That smell. Never drunk a single cup of this drink in my life. The thought cheered me up a little. The curls framed smile still hung above me.</p>
                                   <br/>
                                   <p>  "Oh, yeah, here," my least favourite moment. I offered my bank card and got back to my papers. Damn, that smell.</p>
                                <br/>
                                   <p>  "Enjoy your coffee," the smile finally disappeared with the rest of the person leaving me alone. I opened my files.</p>
                                    <br/>
                                    <p>
                                    I collected only three memories this month. That's not much, if I'll keep this going, I'll stay without a job. Partially that's why I agreed on this doubtful adventure. Southern parts were closed since the Collapse. It is still not safe there. I capitalized on my acquaintances in Citadel. They signed me a pass. And now I was going straight to the heart of the south. There are not many passengers on board. I have not decided yet if it is good or bad. Anyway, the goal is worth it. Huge accumulations of untouched memories. Every month if not a week a new spot appears here and there and no one dare to come too close. They all are afraid. I don't blame them. I am too, I am too afraid. But I'm also despaired. It equalizes all cons. That's how it works. That's how I work; this is some kind of a life pattern.
                                    </p>
                                    <br/>
                                    <p>
                                    I jumped around the document and unwrapped the map. I thoughtfully marked all spots I knew with a red marker. On the empty field I wrote down all useful information: phones, addresses, people. Especially people. I don't want to go nuts while I am there. So I will need a company. At least someone more a less in their mind. I decided to stay at a small hostel in Yellow brick district. Have no idea why it is called so. I imagine the whole district built of yellow bricks. This idea fascinated me, partially that's why I chose this place. Interesting, is it far from the station. I tried to make sense out of this map. I had a feeling likes this was not very accurate map.
                                    </p>
                                    <br/>
                                    <p>
                                    I put out the map and sighed. "Damn, my coffee, I forgot." I took the cup and made a sip. It is cold. Disappointed I put the cup on the table. This is my first every cup of coffee and I spoiled the moment. I paid a fortune for that. In the mouth remained a bitter taste. It is not bad even cold, though. I made a second sip.
                                    </p>
                                    <br/>
                                    <p>
                                    What did I know about what happened in the south? I tried to go thought the facts I heard or learned. Better be sure you know what to do, for not to get into troubles.
                                    </p>
                                    <br/>
                                    <p>
                                    South. The place of father and mother of freedom – Pyrrhon. It is them who started everything, and them who ended it. There were times, when people communicated with each other using only mind, times when no one had a single secret, everyone were the one. Time of collective memory and responsibility for each other. Time of cloud knowledge. People didn't work, they dedicated parts of their brains for global calculations. A world-wide biological cloud computer, that was. But people were unhappy, they had no freedom, they had no true knowledge of who they are and what they do. Why they live and what do they pursue as society and as individuals.
                                    </p>
                                    <br/>
                                    <p>
                                    Pyrrhon was the one who found the bravery to rebel. And they succeeded. The Cloud fell on the earth shattered in pieces. The network was broken. Authority was destroyed. But not everything was as they expected. People, who used to be part of the whole were left alone, cut out of the rest of the world. They became even more unhappy than they were. There were no mind communication, they had to learn to speak using their vocal cords again, they had to begin building a new world, they had to work hard to survive. Many of them lost their minds. They were shattered with the Cloud. Humanity lost 70% percent of their knowledge. They were thrown back in centuries in development. But humanity rapidly gained some of the lost knowledge because of people like me, who track quantum spots with lost memories and collect them then send to the Citadel to decipher and  analyze data. Most of the time it is just random remembrances of people, but sometimes we find useful information. History, technologies, art and music. Ah, I had never found a single piece of music. I wish I could, I heard these stories of  lucky QTrackhounds, who found the music. It is unbelievable what they tell about it. It is like a magic!
                                    </p>
                                    <br/>
                                    <p>
                                    Finding these pieces helped people to reconstruct events of the Collapse. But still we have a lot of holes in the story. The only thing we are sure about that's it all started on the South. It explains the massive destructions and anomalies in that zone.
                                    </p>
                                    <br/>
                                    <p>
                                    What about Pyrrhon? No one knows where they are now and if they even existed. The only thing I know, that I found only one mention of them in memory during my five year career. It was a legend like story that explains global cooling down of the earth. It is says that people used to control weather, calling different conditions according to approved perfect 30 days pattern. It was raining every Friday, can you imagine that? Pyrrhon, it is believed really liked snow. But it was rarely snowing back then. So, when the collapse happened, on the whole planet established permanent winter. Was it a conscious decision or accident the story does not explains. But f they exist and still alive, I bet they are happy now, because there is plenty of snow now.
                                    </p>
                                    <br/>
                                    <p>
                                    I stopped taking to imagination and looked at the window. On the horizon outlined silhouette of Citadell – a huge floating machine in the sky. We were close. The border was crossed a long time ago, and I didn't even notice it. No one even asked me for a pass. Maybe if I didn't have one I wouldn't be permitted on board. I don't know how exactly it works. I stretched my arm and grabbed completely cold drink and made the final sip. Coffee is overrated.
                                    </p>
                                    <br/>
                                    <p>
                                    The train suddenly stopped. If I haven't finished my drink I would spill it on my coat. I people running behind the door in coupe. I stood up and waked out to look outside. The curled-framed face bulked at me. It looked scared.
                                    </p>
                                    <br/>
                                    <p>
                                    "What happened?"
                                    </p>
                                    <br/>
                                    <p>
                                    "Nothing, everything is under control. Please, take your seat."
                                    </p>
                                    <br/>
                                    <p>
                                    "I want to know, why did we stop?"
                                    </p>
                                    <br/>
                                    <p>
                                    "Please, seat down," they tried to push me back in coupe, but  I protested.
                                    </p>
                                    <br/>
                                    <p>
                                    "Not chance I get back. I have an important work, I have a pass, tell me what is going on."
                                    </p>
                                    <br/>
                                    <p>
                                    They looked back at the window.
                                    </p>
                                    <br/>
                                    <p>
                                    "Nothing, everything is under control. Please, take your seat."
                                    </p>
                                    <br/>
                                    <p>
                                    "What is there."
                                    </p>
                                    <br/>
                                    <p>
                                    "Please, seat," they whispered. I got it. Somehow I sympathized to them, I didn't wasn’t to create problems to them, that was the only reason why I obeyed, so I got back to my coupe and landed on the coach. Nervously I looked at the window, but didn't see a thing. Only endless empty fields of snow and Citadel now half-hidden behind a frost gauze hanging above the land. I heard a low-frequent voice. It sounded not right. Something was not right. Panic begun to crawl up to me.
                                    </p>
                                    <br/>
                                    <p>
                                    I jumped up on my feet and burst open the door. On the other side of the train through the decorated with hoarfrost window I saw people. I exhaled on the glass and rubbed with a glove. They stood motionlessly along the railways. Their faces were blank. It didn't seem they understood where they are or even who. Then I noticed that one of them was covered in blood.
                                    </p>
                                    <br/>
                                    <p>
                                    What happened? Did we hit someone? There were no one to ask. I saw white-curled steward standing on the street, wrapping in coat and shrinking of the cold. They ralked to a person in uniform. Maybe that is a border? What these people are doing here? By the llok I could tell that they are one of these people, lost in space, no memories, no personality. It still exist somewhere in the form of quantum data. Maybe I even collected them or if not me than someone else, one of my collegues. I wonder if I will become a memory one day and someone will collect me and decipher me in Citadel in one of their terminals, unlocking and re-connecting chains of blocks, recosntructioning neuron network models. One of the lost sould, persons without body, defragmented and shattered along the networ, decapitated torrent of person's data. Pure person stuck in non-existance, shoveling off the endless banks of stranger's memories. And I will become someone's bed time story after that.
                                    </p>
                                    <br/>
                                    <p>
                                    The steward looked back and caught my sight. They articulated me using only their mouth to go back in coupe. That feeling again. It was like a sudden knowledge that fell on me from a high cliff and landing with its feet right on my head. I knew this person. I saw this steward somewhere else. I saw pictures before my eyes. Some kind of hostel. There was another person. They smiled and drinked coffee. "Nice weather, eh?" they saluted me. Whute-curled person. I know them, I can remember, but I know. How? Did I see it in someone's memories? No, I don't think so. I was in hostel, but who was I? I heard the music.
                                    </p>
                                    <br/>
                                    <p>
                                    The light faded. I missed the part.
                                    </p>
                                    <br/>
                                    <p>
                                    Some important part of the memory.
                                    </p>
                                    <br/>
                                    <p>
                                    I… can't... remember.
                                    </p>
                                    <br/>
                                    <p>
                                    Hello "Noise", my name is Lumituisku. And welcome to quantum terminals. I will guide your way through the process of unlocking memory.
                                    </p>
                                    <br/>



                               </div>
                             );
                              break;
                            }
      default: {
           break;
        }
  }

}


  checkprops = () => (
    this.props.user.user ?
      setTimeout(()=>{
        if(this.props.user.user.level != undefined){
          this.setState({
            render:true,
            level:this.props.user.user.level
          })
        } else {
          console.log("User level is undefined")
        }
      },1000)
    :null
  )


  render(){


    return(
      <div id="container" className="memos-wrapper">
        <div className="noDisp">
          {this.checkprops()}
        </div>
        <div className="menu__container">
          <Header/>
          <Decor/>
          <Dots/>
          <div className="memo__container">
            <div className="memo__container-header">
            <h1><span><i className="far fa-envelope"></i>from:</span> Unknown</h1>
            <p>Location: Citadel.qm(port:111)</p>
            </div>

            <div className="memo__container-content">
            {this.state.render ? this.renderStory() :<div>Loading</div>}

            </div>


          </div>
          <div  onClick={()=>this.props.history.push("/info")} className="list__item">
            <p className="link">BACK</p>
            <div className="btn btn1"></div>
            <div className="btn btn2"></div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        us:state.us
    }
  }

export default connect(mapStateToProps)(Memos)
