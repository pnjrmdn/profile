// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, Component } from 'react';
import Alpine from "alpinejs";
import Navbar from "./Components/navbar.jsx";
import Profile from "./Components/profile.jsx";
import Footer from "./Components/footer.jsx";
import Journey from "./Components/journey.jsx";
import Contact from "./Components/contact.jsx";
import MoreInfo from "./Components/more_info.jsx";


function App(){

  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    document.title = "@pnjrmdn | Develop";
    Alpine.start();

    // if (isDarkMode) {
    //   document.body.classList.add('dark');
    // } else {
    //   document.body.classList.remove('dark');
    // }
  }, []);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    <>
    <div className='dark:bg-slate2nd'>
      <link rel="stylesheet" href="/styles/main.min.css" />
      <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />


      <Navbar></Navbar>

      {/* <div className={`mx-auto mt-4 ${isDarkMode ? 'dark' : ''}`}>
        <h1 className="text-2xl font-semibold mb-4">abc</h1>
          <span
            onClick={toggleDarkMode}
            className="hover:bg-blue-600 dark:text-black dark:bg-slate-800 text-primary py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            {isDarkMode ? 'Dark Mode' : 'Dark Mode'}
          </span>

      </div> */}

      <Profile></Profile>

      <Journey></Journey>

      <Contact></Contact>

      </div>


        <iframe className=''
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2259.9944596589426!2d116.99243894073653!3d-1.1261556071828305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df15273d7f115d3%3A0x482653013d5576c1!2sJembatan%20Gunung%20Tembak%20I!5e0!3m2!1sen!2sid!4v1694168330366!5m2!1sen!2sid" 
          width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy"
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
