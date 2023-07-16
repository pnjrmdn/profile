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
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I'm Panji Ramadanu
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">
                    Let's connect
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/panji.ramadanu.3/"
                  >
                    <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                  </a>
                  
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
                    href="https://www.linkedin.com/in/panji-ramadanu-601257149/"
                    className="pl-4"
                  >
                    <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/pnj.rmdn/"
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

      <div className="bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I'm Panji Ramadanu, a Web Developer
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              Experienced full‑stack developer with a proven track record in the
              computer software industry. proficient in analytical skills,
              communication, data analysis, web design, UI/UX and management.
              enjoys multimedia‑related activities such as photography, graphic
              design and video editing.
            </p>
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              <div className="flex items-center justify-center sm:justify-start md:pl-1">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <a href="/">
                  <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="www.behance.net/panjiramad3bba" className="pl-4">
                  <i className="bx bxl-behance text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div>
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
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
                <h4 className="font-body font-semibold uppercase text-black">
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
                <h4 className="font-body font-semibold uppercase text-black">
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
                <h4 className="font-body font-semibold uppercase text-black">
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

      <div className="container py-16 md:py-20" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's what I'm good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the services I offer
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded px-8 py-12 shadow hover:bg-primary transform transition-all hover:scale-105 md:mx-0">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img
                  src="/img/icon-development-white.svg"
                  alt="development icon"
                />
              </div>
              <div className="block group-hover:hidden">
                <img
                  src="/img/icon-development-black.svg"
                  alt="development icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                WEB DEVELOPMENT
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img
                  src="/img/icon-content-white.svg"
                  alt="content marketing icon"
                />
              </div>
              <div className="block group-hover:hidden">
                <img
                  src="/img/icon-content-black.svg"
                  alt="content marketing icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Web Scraping
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img
                  src="/img/icon-mobile-white.svg"
                  alt="Mobile Application icon"
                />
              </div>
              <div className="block group-hover:hidden">
                <img
                  src="/img/icon-mobile-black.svg"
                  alt="Mobile Application icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Data analysis
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img
                  src="/img/icon-email-white.svg"
                  alt="Email Marketing icon"
                />
              </div>
              <div className="block group-hover:hidden">
                <img
                  src="/img/icon-email-black.svg"
                  alt="Email Marketing icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                System Administrator
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/img/icon-design-white.svg" alt="Theme Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/img/icon-design-black.svg" alt="Theme Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Graphic Design
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img
                  src="/img/icon-graphics-white.svg"
                  alt="Graphic Design icon"
                />
              </div>
              <div className="block group-hover:hidden">
                <img
                  src="/img/icon-graphics-black.svg"
                  alt="Graphic Design icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                UI/UX Design
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I have done in the past
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <a
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/img/portfolio-apple.jpeg"
              className="w-full shadow"
              alt="portfolio image"
            />
          </a>
          <a
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/img/portfolio-stripe.jpeg"
              className="w-full shadow"
              alt="portfolio image"
            />
          </a>
          <a
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/img/portfolio-fedex.jpeg"
              className="w-full shadow"
              alt="portfolio image"
            />
          </a>
          <a
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/img/portfolio-microsoft.jpeg"
              className="w-full shadow"
              alt="portfolio image"
            />
          </a>
        </div>
      </div>

      <div className="bg-grey-50" id="clients">
        {/* <div className="container py-16 md:py-20"> */}
        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
          <h2 className="text-center font-header text-4xl pt-10 font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            My latest clients
          </h2>

          {/* part top  */}
          <div
            className="bg-cover bg-top bg-no-repeat md:py-10 lg:pt-10"
            id="statistics"
          >
            <div className="container">
              <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
                <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                  <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                    <div>
                      <img
                        src="/img/icon-project.svg"
                        className="mx-auto h-12 w-auto md:h-20"
                        alt="icon project"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        12
                      </h1>
                      <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                        Finished Projects
                      </h4>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                    <div>
                      <img
                        src="/img/icon-award.svg"
                        className="mx-auto h-12 w-auto md:h-20"
                        alt="icon award"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        3
                      </h1>
                      <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                        Awards Won
                      </h4>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                    <div>
                      <img
                        src="/img/icon-happy.svg"
                        className="mx-auto h-12 w-auto md:h-20"
                        alt="icon happy clients"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        8
                      </h1>
                      <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                        Happy Clients
                      </h4>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                    <div>
                      <img
                        src="/img/icon-puzzle.svg"
                        className="mx-auto h-12 w-auto md:h-20"
                        alt="icon puzzle"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        99
                      </h1>
                      <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                        Bugs Fixed
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
