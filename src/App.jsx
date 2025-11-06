import React, {useEffect} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import AboutSchool from "./Pages/AboutSchool";

function App () {
  const router =createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "AboutSchool",
      element: <AboutSchool/>
    }
  ]);
  return <RouterProvider router={router}/>;
}

export default App;