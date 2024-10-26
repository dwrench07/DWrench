import './App.css';
import { Home } from './Files/Routes'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Dwrench",
    element: <Home />,
  },
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
