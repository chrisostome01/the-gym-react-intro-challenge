import React from "react";
import ExercisesOne from "./pages/ExercisesOne";
import ExercisesTwo from "./pages/ExercisesTwo";
import ExercisesThree from "./pages/ExercisesThree";
import ExercisesFour from "./pages/ExercisesFour";
import ExercisesFive from "./pages/ExercisesFour";
import { RouterProvider, createBrowserRouter } from "react-router-dom/dist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExercisesOne />,
  },
  {
    path: "/two",
    element: <ExercisesTwo />,
  },
  {
    path: "/three",
    element: <ExercisesThree />,
  },
  {
    path: "/four",
    element: <ExercisesFour />,
  },
  {
    path: "/five",
    element: <ExercisesFive />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
