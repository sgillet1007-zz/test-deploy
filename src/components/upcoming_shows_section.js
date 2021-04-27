import React from 'react';
import DividerHeading from './divider_heading';
import { Link } from "react-router-dom";

const shows = [
  // {
  //     when: 'Saturday, March 2nd 9pm-12:30am',
  //     venue: 'License #1 at the Hotel Boulderado (BIFF)',
  //     venue_url: 'https://biff1.com/music/',
  //     address: '2115 13th Street, Boulder, CO 80302',
  //     address_url: 'https://goo.gl/maps/uAV4ShiL9nF2'
  // },
  {
    when: 'Saturday, May 1st 2pm-4pm',
    venue: "Clancy's Irish Pub (outside patio)",
    venue_url: 'https://iloveclancys.com',
    address: '7000 W 38th Ave, Wheat Ridge, CO 80033',
    address_url: 'https://goo.gl/maps/voBdJmDVkwC2'
  },
  // {
  //   when: 'Saturday, March 14th 7pm - 9:30pm',
  //   venue: 'City Star Brewing',
  //   venue_url: 'https://citystarbrewing.com/',
  //   address: '321 Mountain Ave, Berthoud, CO 80513',
  //   address_url: 'https://goo.gl/maps/AFznYzwm28L2'
  // },
  // {
  //   when: 'Tuesday, March 17th 11am-12:30pm',
  //   venue: "Clancy's Irish Pub (outside stage)",
  //   venue_url: 'https://iloveclancys.com/category/events/',
  //   address: '7000 W 38th Ave, Wheat Ridge, CO 80033',
  //   address_url: 'https://goo.gl/maps/voBdJmDVkwC2',
  // },
  // {
  //     when: 'Saturday, May 25th 5pm - 8pm',
  //     venue: 'Private Event - Denver, CO',
  // },
  // {
  //   when: 'Saturday, July 11th 5pm - 8pm',
  //   venue: 'Spirit Hound Distillery',
  //   venue_url: 'http://www.spirithounds.com/',
  //   address: '4196 Ute Hwy, Lyons, CO 80540',
  //   address_url: 'https://goo.gl/maps/tXVnQ3yP7cGfdt6x8',
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
  // {
  //     when: 'Sunday, July 21st 6pm - 8pm',
  //     venue: 'Odell Brewing Company',
  //     // venue_url: 'https://www.odellbrewing.com/',
  //     address: 'Private Event',
  //     // address_url: 'https://goo.gl/maps/2i2o3Z6NSiQfDfnR7'
  // },
  // {
  //     when: 'Sunday, July 28th 7:30pm - 10pm',
  //     venue: 'Wedding Reception- Boulder, CO',
  // },
  // {
  //     when: 'Saturday, August 17th 7pm - 10pm',
  //     venue: 'City Star Brewing',
  //     venue_url: 'https://citystarbrewing.com/',
  //     address: '321 Mountain Ave, Berthoud, CO 80513',
  //     address_url: 'https://goo.gl/maps/AFznYzwm28L2'
  // },
  // {
  //     when: 'Saturday, August 24th 12pm - 3pm',
  //     venue: 'Mile High Flea Market',
  //     venue_url: 'https://milehighfleamarket.com/en/things-to-do/live-entertainment/',
  //     address: '7007 E 88th Ave, Henderson, CO 80640',
  //     address_url: 'https://goo.gl/maps/8CHUad8K5bwia7A96'
  // },
  // {
  //     when: 'Thursday, September 12th 5pm - 8pm',
  //     venue: 'Southlands Wine Walk',
  //     venue_url: 'https://www.shopsouthlands.com/eventprograms/southlands-wine-walk/',
  //     address: '6155 S. Main Street Aurora, CO 80016',
  //     address_url: 'https://goo.gl/maps/mqetFQodzfAuVs9k8'
  // },
  // {
  //     when: 'Saturday, October 26th 5:30pm - 6:15pm',
  //     venue: 'Private Wedding Party',
  //     // venue_url: 'https://www.denverlibrary.org/content/hadley-branch-library',
  //     address: 'New Orleans, LA',
  //     // address_url: 'https://goo.gl/maps/WUXDqbdi7YKnsh1t6'
  // },
  // {
  //     when: 'Saturday, December 14th 9am - 11:15am',
  //     venue: 'Hadley Branch Library',
  //     venue_url: 'https://www.denverlibrary.org/content/hadley-branch-library',
  //     address: '1890 S. Grove Street Denver, CO 80219',
  //     address_url: 'https://goo.gl/maps/WUXDqbdi7YKnsh1t6'
  // }
];

const Show = (props) => {
  const { when, venue, venue_url, address_url, address } = props.data;
  return (
    <div className='show-item'>
      <strong className='show-title-text'>{`${when}`}</strong>
      <div>
        <a
          className='show-hoverable'
          href={venue_url}
          rel='noopener noreferrer'
          target='_blank'
        >
          {venue}
        </a>
      </div>
      <div>
        <a
          className='show-hoverable'
          href={address_url}
          rel='noopener noreferrer'
          target='_blank'
        >
          {address}
        </a>
      </div>
    </div>
  );
};

const renderShowList = () => shows.map((s, i) => <Show data={s} key={i} />);

export default () => {
  return (
    <div>
      <DividerHeading headerText={'Upcoming Shows'} />
      {/* <div> */}
      {/* <div className="show-item">
          <strong className="show-title-text">{`Thursdays 9 - 10pm (Mountain Time)`}</strong>
          <div>
            <a
              className="show-hoverable"
              href={
                "https://www.facebook.com/theconstanttourists/videos/582098672404824/"
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              {`Facebook Live - Weekly Concert Series`}
            </a>
          </div>
          <div>
            <a
              className="show-hoverable"
              href={
                "https://www.facebook.com/theconstanttourists/videos/582098672404824/"
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              {`Streaming to you live from Nate and Cass' house!`}
            </a>
          </div>
        </div> */}
      {/* </div> */}
      {renderShowList()}
      {shows.length === 0 && (
        <div className='show-item'>
        <strong className='show-title-text'>Live shows are on hold due to COVID</strong>
        <div>Stay safe everyone.  We hope to be back soon!</div>
          <div>
            <Link to='/contact'>
              <div className='show-hoverable'>
                (click here to get in touch)
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
