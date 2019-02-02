import React from 'react'
import logo from '../images/logo.jpg'

export default () => (
    <div id='page-footer'>
        <a id="tel" href={atob('dGVsOjcyMDcwNzUxMDU=')}>{atob('Q2FsbCBVczogNzIwLjcwNy41MTA1')}</a><br />
        <a href={atob('bWFpbHRvOmJvb2tpbmdAdGhlY29uc3RhbnR0b3VyaXN0cy5jb20=')}>{atob('RW1haWwgVXM6IGJvb2tpbmdAdGhlY29uc3RhbnR0b3VyaXN0cy5jb20=')}</a><br />
        <br />
        <img height="70px" src={logo} alt="logo" /><br />
        {<small>Copyright The Constant Tourists. All rights reserved.</small>}
    </div>
)