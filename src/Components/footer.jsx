const Footer = () => {
    return (
        <>
            <div id="footer" className="bg-primary dark:bg-slate">
                <div className="container flex flex-col py-6 sm:flex-row">
                    
                    <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                        <a href="https://www.facebook.com/profile.php?id=61550097057947"  Target="_blank" className="pl-4">
                            <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                        </a>
                        <a href="https://twitter.com/panji55_" Target="_blank" className="pl-4">
                            <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                        </a>
                        <a href="https://www.behance.net/panjiramad3bba" Target="_blank" className="pl-4">
                            <i className="bx bxl-behance text-2xl text-white hover:text-yellow"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/panji-ramadan-since2016/" Target="_blank" className="pl-4">
                            <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                        </a>
                        <a href="https://www.instagram.com/pnj.quagmire/" Target="_blank" className="pl-4">
                            <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                        </a> 

                        <p className="text-center font-body text-white md:text-left">
                        ㅤㅤ© Copyright 2023. All right reserved, @pnj.quagmire
                    </p>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Footer;