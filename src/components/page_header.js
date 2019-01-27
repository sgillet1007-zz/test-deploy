import React, { Component} from "react"
import { Link } from 'react-router-dom'

import expand_menu from '../images/icons/expand_menu.png'
import expand_less from '../images/icons/expand_less.png'

import AudioPlayer from 'react-modular-audio-player';
import play_arrow from '../images/icons/play_arrow.png'
import pause from '../images/icons/pause.png'
import forward from '../images/icons/forward.png'
import rewind from '../images/icons/rewind.png'

export default class PageHeader extends Component {
    constructor(props) {
        super(props)

        this.state ={
            show_nav: false
        }

        this.onToggle = this.onToggle.bind(this);
        this.renderNavToggle = this.renderNavToggle.bind(this);
    }

    onToggle() {
        this.setState({ show_nav: !this.state.show_nav})
    }

    renderNavToggle() {
        if(this.state.show_nav){
            return (
                <img src={expand_less} alt="hide" height="25px" width="25px" />
            )
        } else {
            return (
                <img src={expand_menu} alt="show" height="25px" width="25px" />
            )
        }
    }
    
    render() {
        return (
            <div id="header_container">
                <span id='toggle_nav_tray' onClick={this.onToggle}>{this.renderNavToggle()}</span>
                <span id='band_name_container'>
                        <Link id='band_name' to="/">
                            <p className="band_name_word">- The</p>
                            <p className="band_name_word">Constant</p>
                            <p className="band_name_word">Tourists -</p>
                        </Link>
                </span>
                <span id="audio_container">
                    <AudioPlayer 
                            audioFiles={tracks}
                            fontColor={'white'}
                            fontSize={'1em'}
                            iconSize={'2em'}
                            playIcon={play_arrow}
                            playHoverIcon={play_arrow}
                            pauseIcon={pause}
                            pauseHoverIcon={pause}
                            forwardIcon={forward}
                            forwardHoverIcon={forward}
                            rewindIcon={rewind}
                            rewindHoverIcon={rewind}
                            hideSeeking
                            hideLoop
                            hideRewind
                            rearrange={rearrangePlayer}
                        />
                </span>
                {this.state.show_nav && (
                    <div id='nav_tray'>
                        <Link className='nav-link' id='nav-media' to="/media/">{'- Media -'}</Link>
                        <Link className='nav-link' id='nav-media' to="/">{'- Home -'}</Link>
                        <Link className='nav-link' id='nav-booking' to="/contact/">{'- Contact -'}</Link>
                    </div>)
                }
            </div>
        )
    }
}

const tracks = [
    {
        src: 'http://nebula.wsimg.com/788d768a30ec760f31e1cdc18418d0d8?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio',
        title: 'In The City'
    },
    {
        src: 'http://nebula.wsimg.com/ebddcff358e271a11c11063583e84812?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio',
        title: 'She\'s Coming Back'
    }
]

const rearrangePlayer = [
  {
      className: "audio-container",
      style: { fontFamily: 'Oswald', fontSize: '0.9rem'},
      innerComponents: [
          {
              type: 'name',
              style: {width: "100px"}
           },
          { 
              type: 'rewind',
              style: {width: "30px"}
          },
          { 
              type: 'play',
              style: {width: "30px"}
           },
          { 
              type: 'forward',
              style: {width: "30px"}
           },
        //   { 
        //       type: 'time',
        //       style: {width: "100px"}
        //    }
      ]
  }
]