import React, {Component} from 'react';
import Sound from 'react-sound';

class Music extends Component {

    constructor(props) {
            super(props);
            this.state = {
              song:"",
              condition:Sound.status.PLAYING
            }

          }

  StartMusic(){
    let sound = this.props.state.sound;

    switch(sound) {
       case "none": {
          this.setState({song:''})
          break;
        }
        case "intro": {
           this.setState({song:''})
           break;
         }
        default: {
          this.setState({song:'https://sample-videos.com/audio/mp3/wave.mp3'})
           break;
        }
      }
  }




render(){

  return(

    <div>
    <div className="noDisp">
      {this.StartMusic()}
    </div>
      <Sound
         url={this.state.song}
         playStatus={this.state.condition}
         playFromPosition={0}
         onLoading={this.handleSongLoading}
         onPlaying={this.handleSongPlaying}
         onFinishedPlaying={this.handleSongFinishedPlaying}
       />
     </div>
  )
}

}

export default Music;
