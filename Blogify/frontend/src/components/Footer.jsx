import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section mt-10 bg-gray-900 relative text-gray-400">
      <div className="container mx-auto px-4">
        <div className="footer-cta pt-5 pb-5 border-b border-gray-700">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="single-cta flex items-center">
                <i className="fas fa-map-marker-alt text-orange-500 text-2xl"></i>
                <div className="cta-text ml-4">
                  <h4 className="text-white text-lg font-semibold mb-1">
                    Find us
                  </h4>
                  <span className="text-gray-500">
                    Jalalpur Jattan, Gujrat, Pakistan
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="single-cta flex items-center">
                <i className="fas fa-phone text-orange-500 text-2xl"></i>
                <div className="cta-text ml-4">
                  <h4 className="text-white text-lg font-semibold mb-1">
                    Call us
                  </h4>
                  <span className="text-gray-500">+92-12345678</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="single-cta flex items-center">
                <i className="far fa-envelope-open text-orange-500 text-2xl"></i>
                <div className="cta-text ml-4">
                  <h4 className="text-white text-lg font-semibold mb-1">
                    Mail us
                  </h4>
                  <span className="text-gray-500">blogify@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <div>
                <div className="footer-logo mb-6">
                  <a
                    href="/"
                    className="text-2xl text-white font-bold relative"
                  >
                    Blogify
                    <span className="absolute left-0 bottom-[-5px] h-[2px] w-[50px] bg-orange-500"></span>
                  </a>
                </div>
                <div className="footer-text mb-6">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span className="text-white text-lg font-bold mb-4 block relative">
                    Follow us
                    <span className="absolute left-0 bottom-[-5px] h-[2px] w-[50px] bg-orange-500"></span>
                  </span>
                  <a
                    href="https://www.facebook.com/mr.abdulwahab.aw"
                    className="text-xl mr-4"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/mr.abdulwahab.aw/"
                    className="text-xl mr-4"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abdul-wahab-aw/"
                    className="text-xl"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <div className="footer-widget">
                <div className="footer-widget-heading mb-10">
                  <h3 className="text-white text-xl font-semibold mb-1 relative">
                    Useful Links
                    <span className="absolute left-0 bottom-[-5px] h-[2px] w-[50px] bg-orange-500"></span>
                  </h3>
                </div>
                <ul className="flex flex-wrap">
                  <li className="w-1/2 mb-3">
                    <a href="/" className="text-gray-500 hover:text-orange-500">
                      Home
                    </a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="/" className="text-gray-500 hover:text-orange-500">
                      Terms
                    </a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="/" className="text-gray-500 hover:text-orange-500">
                      Privacy
                    </a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a
                      href="/blog/add-new"
                      className="text-gray-500 hover:text-orange-500"
                    >
                      Add Blog
                    </a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="/" className="text-gray-500 hover:text-orange-500">
                      Contact
                    </a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="/" className="text-gray-500 hover:text-orange-500">
                      About us
                    </a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="/" className="text-gray-500 hover:text-orange-500">
                      Our Services
                    </a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="/" className="text-gray-500 hover:text-orange-500">
                      Expert Team
                    </a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="/" className="text-gray-500 hover:text-orange-500">
                      Contact us
                    </a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="/" className="text-gray-500 hover:text-orange-500">
                      Latest News
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <div className="footer-widget">
                <div className="footer-widget-heading mb-10">
                  <h3 className="text-white text-xl font-semibold mb-1 relative">
                    Subscribe
                    <span className="absolute left-0 bottom-[-5px] h-[2px] w-[50px] bg-orange-500"></span>
                  </h3>
                </div>
                <div className="footer-text mb-6">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form relative overflow-hidden">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="w-full p-4 bg-gray-700 border border-gray-700 text-white"
                    />
                    <button className="absolute right-0 top-0 bg-orange-500 p-4 border border-orange-500">
                      <i className="fab fa-telegram-plane text-white text-lg rotate-[-6deg]"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm">
                Copyright &copy; 2024, All Right Reserved
                <a
                  href="https://www.linkedin.com/in/abdul-wahab-aw/"
                  className="text-orange-500 ml-1"
                >
                  Abdul Wahab
                </a>
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right">
              <ul className="flex justify-center md:justify-end space-x-4">
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-500 hover:text-orange-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-500 hover:text-orange-500"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-500 hover:text-orange-500"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/blog/add-new"
                    className="text-sm text-gray-500 hover:text-orange-500"
                  >
                    Add Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-500 hover:text-orange-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
