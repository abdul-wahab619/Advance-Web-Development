import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="text-3xl font-bold text-white">
              Blogify
            </Link>
            <p className="mt-4">
              The best place to share your thoughts and read others.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xl font-semibold mb-4">About</h4>
            <ul>
              <li className="mb-2">
                <Link to="#" className="text-white hover:text-primaryColor">
                  Our Story
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-white hover:text-primaryColor">
                  Team
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-white hover:text-primaryColor">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul>
              <li className="mb-2">
                <Link to="#" className="text-white hover:text-primaryColor">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-white hover:text-primaryColor">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/mr.abdulwahab.aw/"
                className="text-white hover:text-primaryColor"
              >
                <BsFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/mr.abdulwahab.aw/"
                className="text-white hover:text-primaryColor"
              >
                <BsInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-wahab-aw/"
                className="text-white hover:text-primaryColor"
              >
                <BsLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/abdul-wahab619"
                className="text-white hover:text-primaryColor"
              >
                <BsGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-gray-500">
            &copy; 2024 Blogify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
