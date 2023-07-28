import { useState } from "react";
import Alpine from "alpinejs";

Alpine.data("scrollToElement", () => ({
  scrollTo(targetId) {
    const target = document.getElementById(targetId);

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  },
}));

Alpine.start();

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <nav className="bg-white">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <div>
                    <a href="/">
                      <img
                        src="/img/logo_purple.png"
                        className="w-17 h-17"
                        alt="logo image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="ml-4 flex items-center space-x-4">
                  {/* <div x-data="{ count: 0 }">
                    <button x-on:click="count++">Increment</button>
                    <span x-text="count"></span>
                  </div> */}

                  <span
                    className="text-primary hover:text-black cursor-pointer group-hover:text-yellow"
                    // eslint-disable-next-line react/no-unknown-property
                    x-data="scrollToElement()"
                    // eslint-disable-next-line react/no-unknown-property
                    x-on:click="scrollTo('about')"
                  >
                    About
                  </span>

                  <span
                    className="text-primary hover:text-black cursor-pointer"
                    // eslint-disable-next-line react/no-unknown-property
                    x-data="scrollToElement()"
                    // eslint-disable-next-line react/no-unknown-property
                    x-on:click="scrollTo('services')"
                  >
                    Services
                  </span>

                  <span
                    className="text-primary hover:text-black cursor-pointer"
                    // eslint-disable-next-line react/no-unknown-property
                    x-data="scrollToElement()"
                    // eslint-disable-next-line react/no-unknown-property
                    x-on:click="scrollTo('portofolio')"
                  >
                    Portofolio
                  </span>

                  <span
                    className="text-primary hover:text-black cursor-pointer"
                    // eslint-disable-next-line react/no-unknown-property
                    x-data="scrollToElement()"
                    // eslint-disable-next-line react/no-unknown-property
                    x-on:click="scrollTo('clients')"
                  >
                    Clients
                  </span>

                  <span
                    className="text-primary hover:text-black cursor-pointer"
                    // eslint-disable-next-line react/no-unknown-property
                    x-data="scrollToElement()"
                    // eslint-disable-next-line react/no-unknown-property
                    x-on:click="scrollTo('work')"
                  >
                    Work
                  </span>

                  <span
                    className="text-primary hover:text-black cursor-pointer"
                    // eslint-disable-next-line react/no-unknown-property
                    x-data="scrollToElement()"
                    // eslint-disable-next-line react/no-unknown-property
                    x-on:click="scrollTo('statistics')"
                  >
                    Statistics
                  </span>

                  <span
                    className="text-primary hover:text-black cursor-pointer"
                    // eslint-disable-next-line react/no-unknown-property
                    x-data="scrollToElement()"
                    // eslint-disable-next-line react/no-unknown-property
                    x-on:click="scrollTo('Blog')"
                  >
                    Blog
                  </span>

                  <span
                    className="text-primary hover:text-black cursor-pointer"
                    // eslint-disable-next-line react/no-unknown-property
                    x-data="scrollToElement()"
                    // eslint-disable-next-line react/no-unknown-property
                    x-on:click="scrollTo('Contact')"
                  >
                    Contact
                  </span>
                </div>
              </div>
              <div className="lg:hidden">
                <button
                  type="button"
                  className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={toggleMobileMenu}
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`${
                      isMobileMenuOpen ? "hidden" : "block"
                    } h-6 w-6 hover:text-black`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={`${
                      isMobileMenuOpen ? "block" : "hidden"
                    } h-6 w-6 text-primary hover:text-black`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            className={`${isMobileMenuOpen ? "block" : "hidden"} lg:hidden`}
            id="mobile-menu"
          >
            <div className="bg-primary divide-y divide-white divide-solid px-2 pt-2 pb-1 space-y-1 sm:px-3 text-center">
              <div>
                <span
                  className="text-white hover:text-yellow cursor-pointer group-hover:text-yellow"
                  // eslint-disable-next-line react/no-unknown-property
                  x-data="scrollToElement()"
                  // eslint-disable-next-line react/no-unknown-property
                  x-on:click="scrollTo('about')"
                >
                  About
                </span> 
              </div>
              <div>
                <span
                  className="text-white hover:text-yellow cursor-pointer group-hover:text-yellow"
                  // eslint-disable-next-line react/no-unknown-property
                  x-data="scrollToElement()"
                  // eslint-disable-next-line react/no-unknown-property
                  x-on:click="scrollTo('Services')"
                >
                  Services
                </span> 
              </div>
             <div>
              <span
                  className="text-white hover:text-yellow cursor-pointer group-hover:text-yellow"
                  // eslint-disable-next-line react/no-unknown-property
                  x-data="scrollToElement()"
                  // eslint-disable-next-line react/no-unknown-property
                  x-on:click="scrollTo('portofolio')"
                >
                  Portofolio
                </span>
             </div>
              <div>
                <span
                  className="text-white hover:text-yellow cursor-pointer group-hover:text-yellow"
                  // eslint-disable-next-line react/no-unknown-property
                  x-data="scrollToElement()"
                  // eslint-disable-next-line react/no-unknown-property
                  x-on:click="scrollTo('clients')"
                >
                  Clients
                </span>
              </div>
             <div>
              <span
                  className="text-white hover:text-yellow cursor-pointer group-hover:text-yellow"
                  // eslint-disable-next-line react/no-unknown-property
                  x-data="scrollToElement()"
                  // eslint-disable-next-line react/no-unknown-property
                  x-on:click="scrollTo('work')"
                >
                  Work
                </span>
             </div>
              <div>
                <span
                  className="text-white hover:text-yellow cursor-pointer group-hover:text-yellow"
                  // eslint-disable-next-line react/no-unknown-property
                  x-data="scrollToElement()"
                  // eslint-disable-next-line react/no-unknown-property
                  x-on:click="scrollTo('statistics')"
                >
                  Statistics
                </span>
              </div>
              <div>
                <span
                  className="text-white hover:text-yellow cursor-pointer group-hover:text-yellow"
                  // eslint-disable-next-line react/no-unknown-property
                  x-data="scrollToElement()"
                  // eslint-disable-next-line react/no-unknown-property
                  x-on:click="scrollTo('blog')"
                >
                  Blog
                </span>
              </div>
              <div>
                <span
                  className="text-white hover:text-yellow cursor-pointer group-hover:text-yellow"
                  // eslint-disable-next-line react/no-unknown-property
                  x-data="scrollToElement()"
                  // eslint-disable-next-line react/no-unknown-property
                  x-on:click="scrollTo('contact')"
                >
                  Contact
                </span>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
