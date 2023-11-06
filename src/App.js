import React, {useEffect, useState} from "react";
import {useRoutes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from './pages/authentication/login'
import Signup from './pages/authentication/signup'
import ForgotPassword from "./pages/authentication/forgot-password";
import Home from "./pages/client/home";
import AdminHome from "./pages/admin/adminHome"
import { getSession } from "./util/getSession";

function App() {
  // const [session, setSession]= useState(sessionStorage.getItem('token'));
  let sessionToken=sessionStorage.getItem('token');

  let element = useRoutes([
    { path:'/', element:(sessionToken?<AdminHome />:<Login />)},
    { path:'/signup', element:<Signup />},
    { path:'/forgot-password', element:<ForgotPassword />},
  ])

  useEffect(()=>{
    let token=getSession('token');
    console.log("token", token);
    sessionToken = token;
}, [sessionToken]);
  return (
    <>
    <ToastContainer />
    { element}
    </>
  );
}

export default App;
