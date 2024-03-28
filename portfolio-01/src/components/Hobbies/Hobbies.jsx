import React from "react";

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-8 px-6">
      <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
      <ul className="list-disc list-inside">
        <li className="mb-2">Hobby 1</li>
        <li className="mb-2">Hobby 2</li>
        <li className="mb-2">Hobby 3</li>
        {/* Add more hobbies as needed */}
      </ul>
    </section>
  );
};

export default Hobbies;
