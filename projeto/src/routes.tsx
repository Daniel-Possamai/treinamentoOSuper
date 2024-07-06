import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import React from "react";
import Series from "./pages/series/series";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/series",
    element: <Series />,
  },
]);