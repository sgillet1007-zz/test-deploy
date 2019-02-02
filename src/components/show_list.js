import React from 'react'
import DividerHeading from '../components/divider_heading'

export default () => {
    return (
        <div>
            <DividerHeading headerText={'Upcoming Shows'} />
            <div>
                <strong>Saturday, March 2 9:00pm-12:30am</strong>
                <div>License #1 at the Hotel Boulderado (BIFF)</div>
                <div>
                    <a href="https://biff1.com/music/" rel="noopener noreferrer" target="_blank">2115 13th Street, Boulder, CO 80302</a>
                </div>
            </div>
        </div>
    )
}