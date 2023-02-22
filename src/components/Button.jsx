import React from "react";

export default function Button({text}) {
  return (
    <button
      className="bg-blue-500 text-white font-bold px-7 py-3  rounded-lg"
      onClick={() => alert(`You clicked on ${text}`)}
    >
      {text}
    </button>
  );
}
