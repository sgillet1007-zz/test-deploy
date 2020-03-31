import React, { Component } from 'react';
import cowbell_audio from '../tracks/cowbell.mp3';
import cowbell_image from '../images/cowbell.png';
import DividerHeading from './divider_heading';

class Cowbell extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.keyCode === 32) {
      this.playCowbell();
    }
  };

  playCowbell = () => {
    var cb = new Audio(cowbell_audio);
    cb.play();
  };

  render = () => (
    <div>
      <DividerHeading headerText={'Cowbell'} />
      <div onClick={this.playCowbell}>
        <img src={cowbell_image} height={175} alt='cowbell' />
        <p>Click or press spacebar to add more cowbell</p>
      </div>
    </div>
  );
}

export default Cowbell;
