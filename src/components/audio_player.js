import React, { Component } from 'react';
import mashup from '../tracks/tct_mashup.mp3'
import play_arrow from '../images/icons/play_arrow.png'
import pause from '../images/icons/pause.png'

const mashupAudio = new Audio(mashup);
mashupAudio.loop = true;

export default class AudioPlayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playing: false,
      track_index: 0
    }
  }

  handleAudio = () => {
    if(!this.state.playing){
        this.setState({playing: true})
        mashupAudio.play()
    } else if(!!this.state.playing){
        this.setState({playing: false})
        mashupAudio.pause() 
    }
  }
  
  renderPlayButton = () => {
    if(!this.state.playing){
        return (<img className="audio-button" src={play_arrow} alt="play" />)
    } else if (!!this.state.playing){
        return (<img className="audio-button" src={pause} alt="pause" />)
    }
  }
  
  render() {
    return (
      <span id="audio-container" onClick={this.handleAudio}>
        {this.renderPlayButton()}
      </span>
    );
  }
}
