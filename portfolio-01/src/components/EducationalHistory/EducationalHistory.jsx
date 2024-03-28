import React from "react";

const EducationalHistory = () => {
  return (
    <section id="educational-history" className="py-8 px-6">
      <h2 className="text-2xl font-bold mb-4">Educational History</h2>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Sr. No.</th>
              <th className="border px-4 py-2">Degree Title</th>
              <th className="border px-4 py-2">Passing Year</th>
              <th className="border px-4 py-2">Total Marks</th>
              <th className="border px-4 py-2">Obtained Marks</th>
              <th className="border px-4 py-2">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {/* Add your educational history data here */}
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">
                Bachelor's in Computer Science
              </td>
              <td className="border px-4 py-2">2020</td>
              <td className="border px-4 py-2">1000</td>
              <td className="border px-4 py-2">850</td>
              <td className="border px-4 py-2">85%</td>
            </tr>
            {/* Add more rows if needed */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EducationalHistory;
