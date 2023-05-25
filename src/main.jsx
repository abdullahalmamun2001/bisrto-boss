import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import Contract from "./Pages/Contract/Contract";
import OurMenu from "./Pages/OurMenu/OurMenu";
import {  HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contract',
        element: <Contract></Contract>
      },
      {
        path: '/ourmenu',
        element: <OurMenu></OurMenu>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-xl">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);