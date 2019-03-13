import React from 'react'
import DividerHeading from './divider_heading'

const shows = [
    // {
    //     when: 'Saturday, March 2nd 9pm-12:30am',
    //     venue: 'License #1 at the Hotel Boulderado (BIFF)',
    //     venue_url: 'https://biff1.com/music/',
    //     address: '2115 13th Street, Boulder, CO 80302',
    //     address_url: 'https://goo.gl/maps/uAV4ShiL9nF2'
    // }, 
    {
        when: 'Sunday, March 17th 12:30pm-2pm',
        venue: 'Clancy\'s Irish Pub - St. Patrick\'s Day 2019',
        venue_url: 'https://iloveclancys.com/2019/02/26/saint-patricks-day-weekend-at-clancys-irish-pub-march-15th-16th-and-17th-brought-to-you-by-talnua-distillery/',
        address: '7000 W 38th Ave, Wheat Ridge, CO 80033',
        address_url: 'https://goo.gl/maps/voBdJmDVkwC2'
    },
    {
        when: 'Saturday, May 25th 6pm - 10pm',
        venue: 'Wings Over the Rockies Museum (private event)',
        venue_url: 'https://wingsmuseum.org/',
        address: '7711 E Academy Blvd, Denver, CO 80230',
        address_url: 'https://goo.gl/maps/mVH45cyssQk'
    }
]

const Show = props => {
    const {when, venue, venue_url, address_url, address} = props.data
    return (
    <div className="show-item">
    <strong className="show-title-text">{`${when}`}</strong>
    <div>
        <a className="show-hoverable" href={venue_url} rel="noopener noreferrer" target="_blank">{venue}</a>
    </div>
    <div>
        <a className="show-hoverable" href={address_url} rel="noopener noreferrer" target="_blank">{address}</a>
    </div>
</div>
)}

const renderShowList = () => shows.map((s, i) => <Show data={s} key={i} />)

export default () => {
    return (
        <div>
            <DividerHeading headerText={'Upcoming Shows'} />
            {renderShowList()}
        </div>
    )
}