import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/blogs",
    display: "Blogs",
  },
  {
    path: "/blogs/create",
    display: "Create a Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Navbar = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState("Abdul Wahab");

  const handleStickyHeader = () => {
    if (headerRef.current) {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    if (menuRef.current) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:9000/user/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <header
      className="header flex items-center fixed w-full top-0 z-50"
      ref={headerRef}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* =========== Logo ========== */}
          <div>
            <Link to="/" className="text-3xl font-bold text-black">
              Blogify
            </Link>
          </div>
          {/* =========== Menu ========== */}
          <div
            className={`navigation ${isMenuOpen ? "show__menu" : ""}`}
            ref={menuRef}
          >
            <div className="close-menu-icon md:hidden" onClick={toggleMenu}>
              <AiOutlineClose className="w-8 h-8 cursor-pointer text-black text-2xl absolute top-4 right-4" />
            </div>
            <ul className="menu flex items-center gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor text-16 font-600"
                        : "text-black text-16 font-500 hover:text-primaryColor"
                    }
                    onClick={toggleMenu}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== nav right ========== */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative group">
                <button className="bg-primaryColor text-white py-2 px-4 rounded-full flex items-center justify-center">
                  {/* {user.fullName} */}
                  {user}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 hidden group-hover:block">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-600 h-44 flex items-center justify-center rounded-50">
                  Login
                </button>
              </Link>
            )}
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
      <style>{`
        .header {
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          transition: background-color 0.3s ease;
        }
        .sticky__header {
          background-color: rgba(255, 255, 255, 1);
        }
        .navigation {
          display: flex;
          align-items: center;
        }
        .show__menu {
          display: block;
        }
        .menu li {
          list-style: none;
        }
        .menu a {
          text-decoration: none;
        }
        .bg-primaryColor {
          background-color: #007bff; /* Change this to your primary color */
        }
        .text-primaryColor {
          color: #007bff; /* Change this to your primary color */
        }
        .font-600 {
          font-weight: 600;
        }
        .font-500 {
          font-weight: 500;
        }
        .text-16 {
          font-size: 16px;
        }
        .rounded-50 {
          border-radius: 50px;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
