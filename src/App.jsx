// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Alpine from "alpinejs";
import Navbar from "./Components/navbar.jsx";
import Profile from "./Components/profile.jsx";
import Footer from "./Components/footer.jsx";
import Journey from "./Components/journey.jsx";
import Contact from "./Components/contact.jsx";
import MoreInfo from "./Components/more_info.jsx";

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

      <Journey></Journey>

      <Contact></Contact>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.30498181603798!2d116.89814218665538!3d-1.2428321255156047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df145da3918815f%3A0x420ddda6c063671c!2sJl.%20Tata%20Praja%20No.5%2C%20Sepinggan%2C%20Kecamatan%20Balikpapan%20Selatan%2C%20Kota%20Balikpapan%2C%20Kalimantan%20Timur%2076115!5e0!3m2!1sen!2sid!4v1689402623741!5m2!1sen!2sid"
          width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      <MoreInfo></MoreInfo>



      <Footer></Footer>
      <button
        // eslint-disable-next-line react/no-unknown-property
        x-data="{ isVisible: false }"
        // eslint-disable-next-line react/no-unknown-property
        x-init="window.addEventListener('scroll', () => { isVisible = window.scrollY > 100 })"
        // eslint-disable-next-line react/no-unknown-property
        x-show="isVisible"
        // eslint-disable-next-line react/no-unknown-property
        x-on:click="window.scrollTo({ top: 0, behavior: 'smooth' })"
        className="fixed bottom-4 right-4 px-2 py-0 text-primary border-primary"
      >
        <img 
        className="w-10 h-10" 
        src="/img/top.png" alt="Back to Top"  />
      </button>

    </>
  );
}

export default App;
