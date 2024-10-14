import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import AboutUs from "./pages/AboutUS.jsx";
import ContactUs from "./pages/contactUs.jsx";
import Login from "./pages/loginPage.jsx";
import BrandProducts from "./components/fetchEachBrand.jsx"; 
import LaptopPage from "./components/laptopPdts.jsx";
import MobilePage from "./components/mobilePdts.jsx";
import TabletPage from "./components/tabletPdts.jsx";
import GamingPage from "./components/gamingPdts.jsx";
import AccessoriesPage from "./components/accessoryPdts.jsx";
import WearablePage from "./components/wearablePdts.jsx";
import ShopNow from "./components/shopNow.jsx";
import TopSellingProducts from "./components/topSelling.jsx";
import SearchResults from "./components/searchResults.jsx";
import Layout from "./components/layOut.jsx";
import Signup from "./pages/signupPage.jsx";
import React from 'react';
import WishlistPage from "./pages/wishlistPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header.jsx";
import { useEffect,useState } from "react";
import ProductsProvider from "./store/ProductsContext.jsx";
import CartProvider, { CartContext } from "./context/cart/cartContext.jsx";
import WishlistProvider from "./store/WishlistContext.jsx";


const App = () => {
 
  return (
    <ProductsProvider>
      <CartProvider>
      <WishlistProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={< Signup />} />

          <Route path="cart" element={<CartPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="checkout" element={<CheckoutPage />} />

          <Route path="laptop" element={<LaptopPage />} />
          <Route path="mobile" element={<MobilePage />} />
          <Route path="tablet" element={<TabletPage />} />
          <Route path="gaming" element={<GamingPage />} />
          <Route path="wearable" element={<WearablePage />} />
          <Route path="accessory" element={<AccessoriesPage />} />
          <Route path="/shopnow" element={<ShopNow />} />
          <Route path="topselling" element={<TopSellingProducts />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="products/:brandName" element={<BrandProducts />} />
        </Route>
      </Routes>
    </Router>
    </WishlistProvider>
    </CartProvider>
    </ProductsProvider>
  );
};

export default App;
