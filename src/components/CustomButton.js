import React from "react";

const CustomButton = ({ text, onClick }) => {
  return (
    <button className="block w-auto text-blue-800 text-sm font-semibold rounded-lg hover:bg-blue-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
    onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
