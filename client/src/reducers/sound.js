const initialSoundState = {
  play:false,
  track:'',
  src:''
};

export default (state = initialSoundState, action) =>{

  const {type} = action;
  switch (type){
    case 'Intro':
      return {...state, play:true}
    case "Noise":
      return {track:'noise', play:true, src:"src"}
    case "Standby":
      return {...state, play:true}
    case 'Gameplay':
      return {...state, play:true}
    case 'Credits':
      return {...state, play:true}
    default:
      return state;
  }
}
