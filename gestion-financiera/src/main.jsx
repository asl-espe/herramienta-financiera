import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./components/Dashboard.jsx";  
import ReportPDF from "./components/Reportes/viewReportes.jsx";  

const router = createHashRouter([
  {
    path: "/",
    element: <App />,  
    children: [
      {
        path: "/",  
        element: <Dashboard />,  
      },
      {
        path: "inventario",  
        element: <ReportPDF />,  
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
