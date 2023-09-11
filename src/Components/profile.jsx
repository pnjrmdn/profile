const Profile = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-8"
        style={{ backgroundImage: "url(/img/bg-hero.jpg)" }}
      >
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-16 sm:pb-18 lg:pt-14 lg:pb-18">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
              <img
                src="/img/blog-author.jpg"
                className="h-48 rounded-full sm:h-56"
                alt="author"
              />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="dark:text-yellow text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Welcome to My Page
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="dark:text-white font-body text-lg uppercase text-yellow">
                    Let's connect
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl dark:text-white text-yellow"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  
                  {/* <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/profile.php?id=61550097057947"
                  >
                    <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                  </a> */}
                  
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/panji55_"
                    className="pl-4"
                  >
                    <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.behance.net/panjiramad3bba"
                    className="pl-4"
                  >
                    <i className="bx bxl-behance text-2xl text-white hover:text-yellow"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/panji-ramadan-since2016/"
                    className="pl-4"
                  >
                    <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/pnj.quagmire"
                    className="pl-4"
                  >
                    <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/pnjrmdn"
                    className="pl-4"
                  >
                    <i className="bx bxl-github text-2xl text-white hover:text-yellow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dark:bg-slate px-10 bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase dark:text-primary text-primary sm:text-5xl lg:text-6xl">
              Who am I ?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium dark:text-white dark:text-white text-black sm:text-2xl lg:text-3xl">
              I'm Panji Ramadanu, Data Engineer | Web Dev
            </h4>
            <p className="pt-6 font-body leading-relaxed dark:text-grey-40 text-grey-20">
              Experienced full‑stack developer with a proven track record in the
              computer software industry. proficient in analytical skills,
              communication, data analysis, web design, UI/UX and management.
              enjoys multimedia‑related activities such as photography, graphic
              design and video editing.
            </p> <br />

            <p className="font-body text-lg font-semibold uppercase dark:text-white text-grey-20">
                  Skills 
                </p>
                 
                

            
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              {/* <div className="flex items-center justify-center sm:justify-start md:pl-1"> */}
                
               
                {/* <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div> */}
              {/* </div> */}

              <div className="flex items-center justify-center pt-5 pl-1 sm:justify-start sm:pt-0">
              <p className=" text-primary dark:text-yellow">
             CodeIgniter, Laravel, Reactjs, Git, NGINX, Sequelize, Express, Prallax, Bootsrap, Tailwind, RegEx, Jenkins, Web Scraper,
             Nodejs, PowerBI, Google Data Studio, Jenkins, Ubuntu Server, Windows Server, Proxmox, Photoshop, CorelDraw, Figma, Adobe Premiere.
            </p>
              </div>
            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div>
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase dark:text-white dark:text-white text-black">
                  Java Script
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">
                  85%
                </h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div
                  className="h-3 rounded-full bg-primary"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase dark:text-white dark:text-white text-black">
                  Python
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">
                  70%
                </h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div
                  className="h-3 rounded-full bg-primary"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase dark:text-white dark:text-white text-black">
                  PHP
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">
                  98%
                </h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div
                  className="h-3 rounded-full bg-primary"
                  style={{ width: "98%" }}
                ></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase dark:text-white dark:text-white text-black">
                  Shell Script
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">
                  91%
                </h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div
                  className="h-3 rounded-full bg-primary"
                  style={{ width: "91%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dark:bg-slate2nd container py-16 md:py-20" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's what I'm good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium dark:text-white text-black sm:text-2xl lg:text-3xl">
          These are the services I offer
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded px-8 py-12 shadow-2xl dark:shadow-slate dark:shadow-xl hover:bg-primary transform transition-all hover:scale-105 md:mx-0">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">

              <div className="hidden group-hover:block dark:block">
                <img
                  src="/img/icon-development-white.svg"
                  alt="development icon"
                />
              </div>
              <div className="block group-hover:hidden dark:hidden">
                <img
                  src="/img/icon-development-black.svg"
                  alt="development icon"
                />
              </div>



            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase dark:text-yellow text-primary group-hover:text-yellow lg:text-xl">
                WEB DEVELOPER
              </h3>
              <p className="text-grey dark:text-white pt-4 text-sm group-hover:text-white md:text-base">
              Involves creating and maintaining websites and web applications. 
              </p>
            </div>
          </div>

          <div className="group rounded px-8 py-12 shadow-2xl dark:shadow-lg dark:shadow-slate hover:bg-primary hover:bg-primary transform transition-all hover:scale-105 md:mx-0">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block dark:block">
                <img
                  src="/img/icon-content-white.svg"
                  alt="content marketing icon"
                />
              </div>
              <div className="block group-hover:hidden dark:hidden">
                <img
                  src="/img/icon-content-black.svg"
                  alt="content marketing icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase dark:text-yellow text-primary group-hover:text-yellow lg:text-xl hover:bg-primary transform transition-all hover:scale-105 md:mx-0">
                Data Engineer
              </h3>
              <p className="text-grey dark:text-white pt-4 text-sm group-hover:text-white md:text-base">
              Design, build, and maintain the infrastructure for collecting, storing, and processing data. 
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow-2xl dark:shadow-lg dark:shadow-slate hover:bg-primary hover:bg-primary transform transition-all hover:scale-105 md:mx-0">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block dark:block">
                <img
                  src="/img/icon-mobile-white.svg"
                  alt="Mobile Application icon"
                />
              </div>
              <div className="block group-hover:hidden dark:hidden">
                <img
                  src="/img/icon-mobile-black.svg"
                  alt="Mobile Application icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase dark:text-yellow text-primary group-hover:text-yellow lg:text-xl ">
                Data analyst
              </h3>
              <p className="text-grey dark:text-white pt-4 text-sm group-hover:text-white md:text-base">
              Examine data to identify trends, patterns, and insights. 
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow-2xl dark:shadow-lg dark:shadow-slate hover:bg-primary hover:bg-primary transform transition-all hover:scale-105 md:mx-0">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block dark:block">
                <img
                  src="/img/icon-email-white.svg"
                  alt="Email Marketing icon"
                />
              </div>
              <div className="block group-hover:hidden dark:hidden">
                <img
                  src="/img/icon-email-black.svg"
                  alt="Email Marketing icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase dark:text-yellow text-primary group-hover:text-yellow lg:text-xl">
                Database Administrator
              </h3>
              <p className="text-grey dark:text-white  pt-4 text-sm group-hover:text-white md:text-base">
              Manage and maintain databases that store an organization's data. 
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow-2xl dark:shadow-lg dark:shadow-slate hover:bg-primary hover:bg-primary transform transition-all hover:scale-105 md:mx-0">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block dark:block">
                <img src="/img/icon-design-white.svg" alt="Theme Design icon" />
              </div>
              <div className="block group-hover:hidden dark:hidden">
                <img src="/img/icon-design-black.svg" alt="Theme Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase dark:text-yellow text-primary group-hover:text-yellow lg:text-xl">
                Graphic Designer
              </h3>
              <p className="text-grey dark:text-white  pt-4 text-sm group-hover:text-white md:text-base">
               Create visual content for various purposes, including advertisements, branding, and digital media. 
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow-2xl dark:shadow-lg dark:shadow-slate hover:bg-primary hover:bg-primary transform transition-all hover:scale-105 md:mx-0">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block dark:block">
                <img
                  src="/img/icon-graphics-white.svg"
                  alt="Graphic Design icon"
                />
              </div>
              <div className="block group-hover:hidden dark:hidden">
                <img
                  src="/img/icon-graphics-black.svg"
                  alt="Graphic Design icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase dark:text-yellow text-primary group-hover:text-yellow lg:text-xl">
                UI/UX Designer
              </h3>
              <p className="text-grey dark:text-white  pt-4 text-sm group-hover:text-white md:text-base">
              Focus on enhancing the user experience of websites and applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dark:bg-slate2nd container py-16 md:py-20" id="portofolio">
        <h2 className=" text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out my Certificates
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium dark:text-white text-black sm:text-2xl lg:text-3xl">
          Here's what I have done in the past, get more on Linkedin
        </h3>

        <div className=" mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <a
            href="#0"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/img/sc1.png"
              className="w-full shadow-2xl dark:shadow-2xl dark:shadow-black"
              alt="portfolio image"
            />
          </a>
          <a
           href="#0"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/img/sc2.png"
              className="w-full shadow-2xl dark:shadow-2xl dark:shadow-black"
              alt="portfolio image"
            />
          </a>
          <a
           href="#0"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/img/sc3.png"
              className="w-full shadow-2xl dark:shadow-2xl dark:shadow-black"
              alt="portfolio image"
            />
          </a>
          
          <a
           href="#0"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/img/sc5.png"
              className="w-full shadow-2xl dark:shadow-2xl dark:shadow-black"
              alt="portfolio image"
            />
          </a>
          <a
           href="#0"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/img/sc6.png"
              className="w-full shadow-2xl dark:shadow-2xl dark:shadow-black"
              alt="portfolio image"
            />
          </a>

          <a
           href="#0"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/img/sc4.png"
              className="w-full shadow-2xl dark:shadow-2xl dark:shadow-black"
              alt="portfolio image"
            />
          </a>
        </div>
      </div>

      <div className="bg-grey-50 dark:bg-slate2nd"  id="clients">
        {/* <div className="container py-16 md:py-20"> */}
        <div className="mx-auto w-full sm:w-3/4 lg:w-full ">
          <h2 className="dark:text-yellow text-center font-header pb-10 sm:pb-10 md:pb-10 px-10 text-4xl pt-10 font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          the last thing I did 
          </h2>

          {/* part top  */}
          <div
            className="bg-cover bg-top bg-no-repeat sm:pb-10 md:pb-10 lg:pt-10"
            id="statistics"
          >
            <div className="container ">
              <div className="mx-auto dark:shadow-black dark:shadow-2xl w-5/6 bg-white dark:bg-slate py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
                <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                  <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                    <div>
                      <img
                        src="/img/icon-project.svg"
                        className="mx-auto h-12 w-auto md:h-20 dark:hidden"
                        alt="icon project"
                      />
                    </div>

                    <div>
                      <img
                        src="/img/icon-project-white.svg"
                        className="dark:mx-auto dark:h-20 dark:w-auto dark:md:h-20 dark:block"
                        alt="icon project"
                      />
                    </div>

                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        12
                      </h1>
                      <h4 className="text-grey-dark dark:text-white font-header text-base font-medium leading-loose md:text-xl">
                        Finished Projects
                      </h4>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                       <img
                        src="/img/icon-award.svg"
                        className="mx-auto h-12 w-auto md:h-20 dark:hidden"
                        alt="icon award"
                      />
                      <div>
                      <img
                        src="/img/icon-award-white.svg"
                        className="dark:mx-auto dark:h-20 dark:w-auto dark:md:h-20 dark:block"
                        alt="icon award"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        2
                      </h1>
                      <h4 className="text-grey-dark dark:text-white font-header text-base font-medium leading-loose md:text-xl">
                        Awards Won
                      </h4>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                    <div>
                      <img
                        src="/img/icon-happy.svg"
                        className="mx-auto h-12 w-auto md:h-20 dark:hidden"
                        alt="icon happy clients"
                      />
                    </div>
                    <div>
                    <img
                        src="/img/icon-happy-white.svg"
                        className="dark:mx-auto dark:h-20 dark:w-auto dark:md:h-20 dark:block"
                        alt="icon happy clients"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        8
                      </h1>
                      <h4 className="text-grey-dark dark:text-white font-header text-base font-medium leading-loose md:text-xl">
                        Happy Clients
                      </h4>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                    <div>
                    <img
                        src="/img/icon-puzzle.svg"
                        className="mx-auto h-12 w-auto md:h-20 dark:hidden"
                        alt="icon puzzle"
                      />
                    </div>
                    <div>
                      
                      <img
                        src="/img/icon-puzzle-white.svg"
                        className="dark:mx-auto dark:h-20 dark:w-auto dark:md:h-20 dark:block"
                        alt="icon puzzle"
                      />
                      
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        87
                      </h1>
                      <h4 className="dark:text-white text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                        Bugs Fixed
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
              <span className="m-8 block">
                <img
                  src="/img/logo-coca-cola.svg"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                />
              </span>
              <span className="m-8 block">
                <img
                  src="/img/logo-apple.svg"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                />
              </span>

              <span className="m-8 block">
                <img
                  src="/img/logo-netflix.svg"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                />
              </span>

              <span className="m-8 block">
                <img
                  src="/img/logo-amazon.svg"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                />
              </span>

              <span className="m-8 block">
                <img
                  src="/img/logo-stripe.svg"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                />
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
