import React from "react";
import profileImg from "../../assets/linkedin.jpg";
const Header = () => {
  return (
    <header className="flex justify-between py-4 px-6">
      <div className="ml-20 text-center">
        <h1 className="text-3xl font-bold">Hi, I'm Abdul Wahab</h1>
        <p className="mt-2 w-[20rem]">
          I'm a full-stack developer with over 2 years of experience of MERN.
          Reach out if you'd like to learn more!
        </p>
      </div>
      <div>
        <img
          src={profileImg}
          alt="Profile"
          className="rounded-full w-40 h-40 mr-20 ml-0"
        />
      </div>
    </header>
  );
};

export default Header;
