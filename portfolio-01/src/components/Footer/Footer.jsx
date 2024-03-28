import React from "react";

import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-2 px-5 text-center">
      <div className="flex justify-center items-center space-x-20">
        {/* WhatsApp icon */}
        <a href="whatsapp_link" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="WhatsApp" className="w-8 h-8 rounded-lg" />
        </a>
        {/* Facebook icon */}
        <a href="facebook_link" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className="w-8 h-8 rounded-lg" />
        </a>
        {/* Instagram icon */}
        <a href="instagram_link" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="w-8 h-8 rounded-lg" />
        </a>
        {/* YouTube icon */}
        <a href="youtube_link" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="YouTube" className="w-8 h-8 rounded-lg" />
        </a>
        {/* LinkedIn icon */}
        <a href="linkedin_link" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-8 h-8 rounded-lg" />
        </a>
        {/* Twitter icon */}
        <a href="twitter_link" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" className="w-8 h-8 rounded-lg" />
        </a>
      </div>
      <p className="mt-4">awminhas619@gmail.com</p>
    </footer>
  );
};

export default Footer;
