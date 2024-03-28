import React from "react";

const Skills = () => {
  return (
    <section id="professional-skills" className="py-8 px-6">
      <h2 className="text-2xl font-bold mb-4">Professional Skills</h2>
      <ul className="list-disc list-inside">
        <li className="mb-2">React Js</li>
        <li className="mb-2">Node Js</li>
        <li className="mb-2">Express Js</li>
        <li className="mb-2">MongoDb</li>
        <li className="mb-2">GraphQL</li>
        <li className="mb-2">Figma</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
};

export default Skills;
