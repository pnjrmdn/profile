import React, { useState, useEffect } from 'react';
import Alpine from "alpinejs";
import Navbar from "./Components/navbar.jsx";
import Profile from "./Components/profile.jsx";
import Footer from "./Components/footer.jsx";


function App() {
  useEffect(() => {
    document.title = "@pnjrmdn | Develop";
    Alpine.start();
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/styles/main.min.css" />
      <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />

      <Navbar></Navbar>

      <Profile></Profile>

      <Footer></Footer>
      <button
        x-data="{ isVisible: false }"
        x-init="window.addEventListener('scroll', () => { isVisible = window.scrollY > 100 })"
        x-show="isVisible"
        x-on:click="window.scrollTo({ top: 0, behavior: 'smooth' })"
        className="fixed bottom-4 right-4 px-2 py-0 rounded bg-white text-primary border-2 border-primary"
      >
        Back to Top
      </button>

    </>
  );
}

export default App;
