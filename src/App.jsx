import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import AboutSchool from "./Pages/AboutSchool";
import PrincipalMessage from "./Pages/PrincipalMessage";
import ChairmanMessage from "./Pages/ChairmanMessage";
import AboutSamoon from "./Pages/AboutSamoon";
import Visinary from "./Pages/Visinary";
import AnnualReport from "./Pages/AnnualReport";
import AuditReport from "./Pages/AuditReport";
import Press from "./Pages/Press";
import PhotoGallery from "./Pages/PhotoGallery";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "AboutSchool", element: <AboutSchool /> },
    { path: "PrincipalMessage", element: <PrincipalMessage /> },
    { path: "ChairmanMessage", element: <ChairmanMessage /> },
    { path: "AboutSam", element: <AboutSamoon /> },
    { path: "Visinary", element: <Visinary /> },
    { path: "AnnualReport", element: <AnnualReport /> },
    { path: "AuditReport", element: <AuditReport /> },
    { path: "Press", element: <Press /> },
    {path: "PhotoGallery", element: <PhotoGallery/>}
  ]);

  return <RouterProvider router={router} />;
}

export default App;
