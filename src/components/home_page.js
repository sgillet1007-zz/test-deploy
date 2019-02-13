import React from 'react';
import hero from '../images/hero.jpg'
import BandBios from './band_bios'
import UpcomingShows from './upcoming_shows_section'

const Home = () => (
    <div>
        <img className='hero-image' src={hero} alt="" />
        <UpcomingShows />
        <BandBios />
    </div>
)

export default Home;
