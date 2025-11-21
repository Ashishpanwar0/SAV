import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
import Ourteacher from "./Pages/Ourteacher";
import Academic from "./Pages/Accademic";
import ContactUs from "./Pages/ContactUs";
import RagistrationForm from "./Pages/RagistrationForm";
import NotFound from "./Pages/NotFound";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/AboutSchool", element: <AboutSchool /> },
    { path: "/PrincipalMessage", element: <PrincipalMessage /> },
    { path: "/ChairmanMessage", element: <ChairmanMessage /> },
    { path: "/AboutSam", element: <AboutSamoon /> },
    { path: "/Visinary", element: <Visinary /> },
    { path: "/AnnualReport", element: <AnnualReport /> },
    { path: "/AuditReport", element: <AuditReport /> },
    { path: "/Press", element: <Press /> },
    { path: "/PhotoGallery", element: <PhotoGallery /> },
    { path: "/Accademic", element: <Academic /> },
    { path: "/Ourteacher", element: <Ourteacher /> },
    { path: "/ContactUs", element: <ContactUs /> },
    { path: "/RagistrationForm", element: <RagistrationForm /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
