import React from "react";

const LifeAmbitions = () => {
  return (
    <section id="life-ambitions" className="py-8 px-6">
      <h2 className="text-2xl font-bold mb-4">Life Ambitions</h2>
      <ul className="list-disc list-inside">
        <li className="mb-2 font-bold">Achieved:</li>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">Ambition 1</li>
          <li className="mb-2">Ambition 2</li>
          <li className="mb-2">Ambition 3</li>
          <li className="mb-2">Ambition 4</li>
          {/* Add more achieved ambitions as needed */}
        </ul>
        <li className="mb-2 font-bold">Struggling:</li>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">Ambition 1</li>
          <li className="mb-2">Ambition 2</li>
          <li className="mb-2">Ambition 3</li>
          <li className="mb-2">Ambition 4</li>
          {/* Add more struggling ambitions as needed */}
        </ul>
      </ul>
    </section>
  );
};

export default LifeAmbitions;
