import { useState } from "react";

export default function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const handleChange = (field) => (e) => {
    setGeneralInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const [isFullHeight, setIsFullHeight] = useState(false);

  const handleMouseEnter = () => {
    setIsFullHeight(true);
  };

  const handleMouseLeave = () => {
    setIsFullHeight(false);
  };

  return (
    <div
      className={`text-gray-800 flex flex-col bg-white shadow-lg p-6 rounded-lg
         transition-max-height duration-1000 overflow-hidden
        ${isFullHeight ? "max-h-screen" : "max-h-20"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-3xl font-semibold mb-6">General Info</h1>
      {Object.keys(generalInfo).map((field) => (
        <div className="flex flex-col items-start mb-4" key={field}>
          <label className="font-medium text-base mb-2">
            {field.charAt(0).toUpperCase() + field.slice(1)}:
          </label>
          <input
            value={generalInfo[field]}
            onChange={handleChange(field)}
            className="bg-gray-100 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-700"
          />
        </div>
      ))}
    </div>
  );
}
