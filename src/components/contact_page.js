import React from 'react'
import DividerHeading from './divider_heading'

const Contact = () => (
    <div id="contact-container">
        <div className='layoutTopPadding'></div>
        <DividerHeading headerText={'Contact Form'} />
        <div id="contact-form">
            <form name="booking" action="/" method="post">
                <input type="hidden" name="form-name" value="booking" />
                <p><label><input type="text" name="name" placeholder="Your Name" required /></label></p>
                <p><label><input type="email" name="email" placeholder="Your Email" required /></label></p>
                <p><label><textarea name="message" placeholder="Your message..." required></textarea></label></p>
                <button className="btn" type="submit">Send Message</button>
            </form>
        </div>
    </div>
)

export default Contact;
