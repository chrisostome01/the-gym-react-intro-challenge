import React from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";

export default function ExercisesThree() {
  const handleCLick = (text) => {
    alert(`You clicked on ${text}`)
  }
  return (
    <>
      <Nav />
      <div className="flex gap-9 items-center justify-center h-screen">
        <Button onClick={() => handleCLick("Button 1") } text="Button 1" />
        <Button onClick={() => handleCLick("Button 2") } text="Button 2" />
        <Button onClick={() => handleCLick("Button 3") } text="Button 3" />
      </div>
    </>
  );
}
