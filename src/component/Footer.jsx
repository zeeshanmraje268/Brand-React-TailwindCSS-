import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faYoutube,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <>
      <div className=" bg-white p-2 " id="footer">
        <div className=" grid md:grid-cols-5 my-5 gap-5 max-w-[1050px] mx-auto">
          <div>
            <h2 className="text-indigo-500 text-[1.2rem] font-bold">
              Solutions
            </h2>
            <ul>
              <h3>Marketing</h3>
              <h3>Analytics</h3>
              <h3>Commerce</h3>
              <h3>Data</h3>
              <h3>Cloud</h3>
            </ul>
          </div>
          <div>
            <h2 className="text-indigo-500 text-[1.2rem] font-bold">Support</h2>
            <ul>
              <h3>Pricing</h3>
              <h3>Documentation</h3>
              <h3>Guides</h3>
              <h3>API Status</h3>
            </ul>
          </div>

          <div>
            <h2 className="text-indigo-500 text-[1.2rem] font-bold">Company</h2>
            <ul>
              <h3>About</h3>
              <h3>Blog</h3>
              <h3>Jobs</h3>
              <h3>Press</h3>
              <h3>Partners</h3>
            </ul>
          </div>

          <div>
            <h2 className="text-indigo-500 text-[1.2rem] font-bold">Legal</h2>
            <ul>
              <h3>Chain</h3>
              <h3>Private</h3>
              <h3>Policies</h3>
              <h3>Terms</h3>
            </ul>
          </div>
          <div className="md:flex flex-col">
            <h2 className="text-indigo-500 text-[1.2rem] font-bold">
              Subscribe to our newsletter
            </h2>
            <p>
              The latest news, articles and , resources, sent to your inbox
              weekly
            </p>
            <div >
              <form action="https://formspree.io/f/xyyaevjr" method="POST" className="md:flex mt-2 ">
              <input
                type="email"
                name="email"
                className=" border-2  border-indigo-500 rounded-2xl px-2 text-indigo-500"
                placeholder="Enter Your Email"
              />
              <button className="btn2" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="max-w-[1050px] mx-auto my-5">
          <div className="flex justify-between items-center">
            <div className="text-indigo-500">
              2023{" "}
              <a href="https://www.linkedin.com/in/zeeshan-m-raje-0b8493232/">
                (Zeeshan M. Raje , MERN Stack Developer)
              </a>
            </div>
            <div >
              <a href="https://www.facebook.com/zeeshan.raje/" ><FontAwesomeIcon icon={faFacebook} className='px-3 text-indigo-500 text-2xl' /></a>
              <a href="https://www.instagram.com/zeeshan_m_raje/"><FontAwesomeIcon icon={faInstagram} className='px-3 text-indigo-500 text-2xl' /></a>
              <a href="https://www.linkedin.com/in/zeeshan-m-raje-0b8493232/"><FontAwesomeIcon icon={faLinkedin} className='px-3 text-indigo-500 text-2xl'/></a>
              <a href="https://www.youtube.com/channel/UCDTxNhbGoQZy-Ox0p6iUS6g"><FontAwesomeIcon icon={faYoutube} className='px-3 text-indigo-500 text-2xl'/></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
