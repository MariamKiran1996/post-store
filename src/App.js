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

function App() {
  const [session, setSession]= useState('');

  useEffect=(()=>{
      let token=sessionStorage.getItem('token');
      setSession(token);
  }, []);

  let element = useRoutes([
    { path:'/', element:<Login />},
    { path:'/signup', element:<Signup />},
    { path:'/forgot-password', element:<ForgotPassword />},
  ])
  return (
    <>
    <ToastContainer />
    { element}
    </>
  );
}

export default App;
