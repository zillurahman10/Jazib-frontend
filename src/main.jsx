import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound.jsx';
import ProductDetails from './Pages/ProductDetails/ProductDetails.jsx';
import { CustomNavbar } from './Components/Navbar/Navbar.jsx';
import { FooterWithSitemap } from './Components/Footer/Footer.jsx';
import { LoginCard } from './Pages/Auth/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <LoginCard></LoginCard>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  },
  {
    path: "/product-details",
    element: <ProductDetails></ProductDetails>
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomNavbar></CustomNavbar>
    <RouterProvider router = {router}></RouterProvider>
    <FooterWithSitemap></FooterWithSitemap>
  </StrictMode>,
)
