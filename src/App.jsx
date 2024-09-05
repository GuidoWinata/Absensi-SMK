<<<<<<< HEAD
import { RouterProvider } from "react-router-dom";
import routes from "./router/RouteList";
import "./App.css";
=======
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './router/RouteList';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ParticlesComponent from './components/Particles';
>>>>>>> 6c5c290bbe96b506eb602c8cb31f8ce942e60c16

function App() {
  return (
    <>
    <ParticlesComponent />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
