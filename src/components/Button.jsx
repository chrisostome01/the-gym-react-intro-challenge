import React from "react";

export default function Button({onClick, text}) {
  return (
    <button
      className="bg-blue-500 text-white font-bold px-7 py-3  rounded-lg"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
