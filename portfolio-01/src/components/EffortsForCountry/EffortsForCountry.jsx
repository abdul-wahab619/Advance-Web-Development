import React from "react";

const EffortsForCountry = () => {
  return (
    <section id="efforts-for-country" className="py-8 px-6">
      <h2 className="text-2xl font-bold mb-4">Efforts for Country</h2>
      <ul className="list-disc list-inside">
        <li className="mb-2 font-bold">Succeeded:</li>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">Effort 1</li>
          <li className="mb-2">Effort 2</li>
          <li className="mb-2">Effort 3</li>
          <li className="mb-2">Effort 4</li>
          {/* Add more succeeded efforts as needed */}
        </ul>
        <li className="mb-2 font-bold">Struggling:</li>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">Effort 1</li>
          <li className="mb-2">Effort 2</li>
          <li className="mb-2">Effort 3</li>
          <li className="mb-2">Effort 4</li>
          {/* Add more struggling efforts as needed */}
        </ul>
      </ul>
    </section>
  );
};

export default EffortsForCountry;
