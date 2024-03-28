import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-gray-200 flex justify-between items-center py-4 px-6">
      <h5 className=" text-2xl">Portfolio</h5>
      <ul className="flex space-x-6">
        <li>
          <a
            href="#educational-history"
            className="text-gray-600 hover:text-gray-900"
          >
            Educational History
          </a>
        </li>
        <li>
          <a
            href="#professional-skills"
            className="text-gray-600 hover:text-gray-900"
          >
            Professional Skills
          </a>
        </li>
        <li>
          <a
            href="#professional-projects"
            className="text-gray-600 hover:text-gray-900"
          >
            Professional Projects
          </a>
        </li>
        <li>
          <a href="#hobbies" className="text-gray-600 hover:text-gray-900">
            Hobbies
          </a>
        </li>
        <li>
          <a
            href="#life-ambitions"
            className="text-gray-600 hover:text-gray-900"
          >
            Life Ambitions
          </a>
        </li>
        <li>
          <a
            href="#efforts-for-country"
            className="text-gray-600 hover:text-gray-900"
          >
            Efforts for Country
          </a>
        </li>
      </ul>
      <div>
        <a href="#contact-me" className=" bg-blue-500 rounded-lg py-2 px-2 text-gray-900 hover:bg-green-500 hover:text-white">
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
