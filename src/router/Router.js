import React from "react";
import MainPage from "../layout/MainPage";
import { useRoutes } from "react-router-dom";
import Annances from "../views/Annances";
import Reglement from "../views/Reglement";
import Inscription from "../views/Inscription";
import ContactPage from "../views/ContactPage";
import { MainRoulettePage } from "../component/MainRoulettePage";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <MainPage/>,
      children: [
        {
          path: "", 
          element: <Annances/> 
        },
        {
          path: "reglement", 
          element: <Reglement/> 
        },
        {
          path: "inscription", 
          element: <Inscription/> 
        },
        {
          path: "contact", 
          element: <ContactPage/> 
        },
        {
          path: "roulette", 
          element: <MainRoulettePage/> 
        },
      ]
    },
    
  ];

  return useRoutes(routes);
};

export default Router;
