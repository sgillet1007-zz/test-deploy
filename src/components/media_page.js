import React from 'react'
import DividerHeading from './divider_heading'
import Photos from './photos'
import fb from '../images/social/fb.jpg'
import ig from '../images/social/ig.jpg'
import yt from '../images/social/yt.jpg'

const Media = () => (
    <div>
        <div className='layoutTopPadding'></div>
            <DividerHeading headerText={'Photos'} />
            <Photos />
            <DividerHeading headerText={'Social'} />
            <div>
                <h3>Like</h3>
                <a href="https://www.facebook.com/theconstanttourists/" target='_blank' rel="noopener noreferrer">
                    <img className="social-link" src={fb} height="70px" alt="facebook" />
                </a>
            </div>
            <br />
            <div>
                <h3>Follow</h3>
                <a href="https://www.instagram.com/theconstanttourists/" target='_blank' rel="noopener noreferrer">
                    <img className="social-link" src={ig} height="70px" alt="instagram" />
                </a>
            </div>
            <br />
            <div>
                <h3>Subscribe</h3>
                <a href="https://www.youtube.com/channel/UCgfAsHmyzHzDL9d_kSDYEPg" target='_blank' rel="noopener noreferrer">
                    <img className="social-link" src={yt} height="70px" alt="youtube" />
                </a>
            </div>
    </div>
)

export default Media;
