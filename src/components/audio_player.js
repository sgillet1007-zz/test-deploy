import React, { Component } from 'react';
import satan_track from '../tracks/satan.mp3'
import play_arrow from '../images/icons/play_arrow.png'
import pause from '../images/icons/pause.png'

const satan = new Audio(satan_track)

export default class AudioPlayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playing: false,
      track_index: 0
    }
  }

  handleSatan = () => {
    if(!this.state.playing){
        this.setState({playing: true})
        satan.play()
    } else if(!!this.state.playing){
        this.setState({playing: false})
        satan.pause() 
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
      <span id="audio-container" onClick={this.handleSatan}>
        {this.renderPlayButton()}
      </span>
    );
  }
}