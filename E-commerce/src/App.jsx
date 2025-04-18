import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Product from './Component/Product';
import Feature from './Component/Feature';
import Feature_product from './Component/Feature_product';
import Login from './Component/Login'
import Subcribe from './Component/Subcribe';
import Singup from './Component/Singup'
import Footer from './Component/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';
import Singleproduct from './Component/Singleproduct';
import UserContextProvider from './Context/UserContextProvider';
import ForgetPassword from './Component/ForgetPassword';
import Myorder from './Component/Myorder'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Hero />
          <Product  />
          <Feature />
          <Feature_product  />
          <Subcribe />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/product",
      element: (
        <>
          <Navbar />
          <Product  />
          <Feature_product/>
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/singleproduct",
      element: (
        <>
          <Navbar />
          <Singleproduct />
          <Footer />
        </>
      ),
    },
    {
      path:"/login",
      element:(
        <>
        <Navbar/>
        <Login/>
        </>
      )
    },
    {
      path:"/signup",
      element:(
        <>
        <Navbar/>
        <Singup/>
        </>
      )
    },
    {
      path:"/forget",
      element:(
        <>
        <Navbar/>
        <ForgetPassword/>
        </>
      )
    },{
      path:"/myorder",
      element:(
        <>
        <Navbar/>
        <Myorder/>
        <Footer/>
        </>
      )
    }
  ]);

  return (
    <>
    <UserContextProvider>
      <RouterProvider router={router} />;
    </UserContextProvider>
    
    </>
  )
}

export default App;
