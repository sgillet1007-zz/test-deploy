import React from 'react'
import email from '../images/icons/email.png'
import phone from '../images/icons/phone.png'

export default () => (
    <div id='page-footer'>
        <a id="tel" href={atob('dGVsOjcyMDcwNzUxMDU=')}>
            <img src={phone} alt='phone' />
        </a>
        <a id="email" href={atob('bWFpbHRvOmNhc3NpZS5rYW50b3JAZ21haWwuY29t')}>
            <img src={email} alt='email' />
        </a>
        <br />
        <small>
            <div>Copyright The Constant Tourists.</div>
            <div>All rights reserved.</div>
        </small>
    </div>
)