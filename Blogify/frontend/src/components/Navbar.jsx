import React, { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

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

  const handleStickyHeader = () => {
    if (headerRef.current) {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
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
      menuRef.current.classList.toggle("show__menu");
    }
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* =========== Logo ========== */}
          <div>
            <Link to="/" className="w-28 h-20 object-fill">
              Blogify
            </Link>
          </div>
          {/* =========== Menu ========== */}
          <div className="navigation" ref={menuRef}>
            <div className="close-menu-icon md:hidden" onClick={toggleMenu}>
              <AiOutlineClose className="w-8 h-8 cursor-pointer text-black text-2xl absolute top-4 right-4" />
            </div>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
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
            {/* Uncomment and adjust the below code as needed */}
            {/* {token && user ? (
              <div>
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      src={user?.photo}
                      alt="User"
                      className="w-full rounded-full"
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )} */}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
