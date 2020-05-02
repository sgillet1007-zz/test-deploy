import React from "react";
import email from "../images/icons/email.png";
import phone from "../images/icons/phone.png";

export default () => (
  <div id="page-footer">
    <a id="tel" href={atob("dGVsOjcyMDcwNzUxMDE=")}>
      <img src={phone} alt="phone" />
    </a>
    <a
      id="email"
      href={atob("bWFpbHRvOmJvb2tpbmdAdGhlY29uc3RhbnR0b3VyaXN0cy5jb20=")}
    >
      <img src={email} alt="email" />
    </a>
    <br />
    <small>
      <div>The Constant Tourists</div>
      <div>© {new Date().getFullYear()} All Rights Reserved</div>
    </small>
  </div>
);
