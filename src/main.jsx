import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound.jsx';
import ProductDetails from './Pages/ProductDetails/ProductDetails.jsx';
import { CustomNavbar } from './Components/Navbar/Navbar.jsx';
import { FooterWithSitemap } from './Components/Footer/Footer.jsx';
import { LoginForm } from './Pages/Auth/SignIn.jsx';
import Layout from './Layout.jsx';
import { SimpleRegistrationForm } from './Pages/Auth/SignUp.jsx';
import Products from './Pages/Products/Products.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';
import OrderConfirmation from './Pages/OrderConfirmation/OrderConfirmation.jsx';
// import {Provider} from 'react-redux';
// import {store} from './store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the Layout component
    children: [
      {
        path: "/",
        element: <App />, // Main App content
      },
      {
        path: "/signup",
        element: <SimpleRegistrationForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/order-confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
