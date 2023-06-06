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
import { HelmetProvider } from 'react-helmet-async';
import Order from "./Pages/Order/Order/Order";
import Login from "./Pages/Login/Login";
import AuthProvider from "./Provider/AuthProvider";
import Register from "./Pages/Register/Register";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import DashBoard from "./Layout/DashBoard";
import MyCart from "./Pages/Dashboard/MyCart/MyCart";
import PrivateRouter from "./Router/privateRouter/PrivateRouter";
import AddUSer from "./Pages/Dashboard/MyCart/AddUSer/AddUSer";
// import SignUp from "./Pages/SignUp/SignUp";
const queryClient = new QueryClient()
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
      },
      {
        path: '/ordershop',
        element: <PrivateRouter><Order></Order></PrivateRouter>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      // {
      //   path:'/register',
      //   element:<SignUp></SignUp>
      // }
      
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRouter><DashBoard></DashBoard></PrivateRouter>,
    children:[
      {
        path:'mycart',
        element:<PrivateRouter><MyCart></MyCart></PrivateRouter>
      },
      {
        path:'alluser',
        element:<AddUSer></AddUSer>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen-xl">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </HelmetProvider></AuthProvider>
  </React.StrictMode>
);