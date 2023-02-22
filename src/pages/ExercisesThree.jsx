import React from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";

export default function ExercisesThree() {
  return (
    <>
      <Nav />
      <div className="flex gap-9 items-center justify-center h-screen">
        <Button text="Button 1" />
        <Button text="Button 2" />
        <Button text="Button 3" />
      </div>
    </>
  );
}
