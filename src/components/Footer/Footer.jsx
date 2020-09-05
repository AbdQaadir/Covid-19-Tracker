import React from "react";

import LogoIcon from "./logo-icon.svg";
import LogoText from "./logo-text.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="row justify-content-around" id="footer">
      <div className="col-xl-3 col-lg-3 col-md-4 col-10">
        <div className="mb-3">
          <img src={LogoIcon} alt="" className="mr-2" />
          <img src={LogoText} alt="" />
        </div>
        <h5 className="d-block mt-4">Source:</h5>
        <p className="footer-p">
          The infos on this this webpage were crawled from WHO, images were
          downloaded from Pixaybay and Pexels, Icons were downloaded from
          Iconfinder and Flaticons.
        </p>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-4 col-10" id="footer-links">
        <h5 className="text-primary">Useful Links</h5>
        <ul className="mt-2 list-unstyled">
          <li className="my-2">
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHO Information
            </a>
          </li>
          <li className="my-2">
            <a
              href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019"
              target="_blank"
              rel="noopener noreferrer"
            >
              Covid-19 Wikipedia
            </a>
          </li>
          <li className="my-2">
            <a
              href="https://www.google.com/search?sxsrf=ALeKk00Kl4RmeLdlf_lxc5ieCcuH8NUvqw%3A1599306203724&ei=23lTX7_pK7TC8gK8oobgDQ&q=world+news+on+covid+19&oq=World+news+on+&gs_lcp=CgZwc3ktYWIQAxgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECAAQRzoECCMQJzoFCAAQkQI6BQgAELEDOgUILhCxAzoICAAQsQMQgwE6CwguEMcBEKMCEJECOgcIABCxAxBDOgQIABBDOgoIABCxAxCDARBDOhEILhCxAxDHARCjAhCRAhCTAjoICC4QsQMQgwE6CwguELEDEIMBEJMCUIy-AVjX1AFg_N4BaABwAXgAgAHrAogB7BqSAQYyLTEyLjKYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab"
              target="_blank"
              rel="noopener noreferrer"
            >
              World News on Covid-19
            </a>
          </li>
        </ul>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-4 col-10">
        <h5 className="text-primary">Emergency Numbers to call</h5>
        <p>+2348030000000, 5739 00030300</p>
      </div>
    </div>
  );
};

export default Footer;
