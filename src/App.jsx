import React from "react";
import ExercisesOne from "./pages/ExercisesOne";
import { RouterProvider, createBrowserRouter } from "react-router-dom/dist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExercisesOne />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
