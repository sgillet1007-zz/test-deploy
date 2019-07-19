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
    // {
    //     when: 'Sunday, March 17th 12:30pm-2pm',
    //     venue: 'Clancy\'s Irish Pub - St. Patrick\'s Day 2019',
    //     venue_url: 'https://iloveclancys.com/2019/02/26/saint-patricks-day-weekend-at-clancys-irish-pub-march-15th-16th-and-17th-brought-to-you-by-talnua-distillery/',
    //     address: '7000 W 38th Ave, Wheat Ridge, CO 80033',
    //     address_url: 'https://goo.gl/maps/voBdJmDVkwC2'
    // },
    // {
    //     when: 'Saturday, May 25th 5pm - 8pm',
    //     venue: 'Private Event - Denver, CO',
    // },
    // {
    //     when: 'Saturday, June 22nd 5pm - 8pm',
    //     venue: 'Spirit Hound Distillery',
    //     venue_url: 'http://www.spirithounds.com/',
    //     address: '4196 Ute Hwy, Lyons, CO 80540',
    //     address_url: 'https://goo.gl/maps/tXVnQ3yP7cGfdt6x8'
    // },
    // {
    //     when: 'Saturday, June 29th 7pm - 10pm',
    //     venue: 'City Star Brewing',
    //     venue_url: 'https://citystarbrewing.com/',
    //     address: '321 Mountain Ave, Berthoud, CO 80513',
    //     address_url: 'https://goo.gl/maps/AFznYzwm28L2'
    // },
    // {
    //     when: 'Tuesday, July 2nd 7pm - 8pm',
    //     venue: 'Private Event - Denver, CO',
    //     // venue_url: 'https://www.theargyle.org/',
    //     // address: '4115 W 38th Ave, Denver, CO 80212',
    //     // address_url: 'https://goo.gl/maps/112npp9z67pDNpGG7'
    // },
    // {
    //     when: 'Wednesday, July 17th 7pm - 8pm',
    //     venue: 'Littleton Museum - Summer Concert Series',
    //     venue_url: 'https://www.littletongov.org/city-services/city-departments/museum',
    //     address: '6028 S Gallup St, Littleton, CO 80120',
    //     address_url: 'https://goo.gl/maps/aob3tjAv6mw'
    // },
    {
        when: 'Sunday, July 21st 6pm - 8pm',
        venue: 'Odell Brewing Company',
        // venue_url: 'https://www.odellbrewing.com/',
        address: 'Private Event',
        // address_url: 'https://goo.gl/maps/2i2o3Z6NSiQfDfnR7'
    },
    {
        when: 'Sunday, July 28th 7:30pm - 10pm',
        venue: 'Wedding Reception- Boulder, CO',
    },
    {
        when: 'Saturday, August 24th 12pm - 3pm',
        venue: 'Mile High Flea Market',
        venue_url: 'https://milehighfleamarket.com/en/things-to-do/live-entertainment/',
        address: '7007 E 88th Ave, Henderson, CO 80640',
        address_url: 'https://goo.gl/maps/8CHUad8K5bwia7A96'
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