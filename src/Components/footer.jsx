const Footer = () => {
    return (
        <>
            <div id="footer" className="bg-primary">
                <div className="container flex flex-col py-6 sm:flex-row">
                    
                    <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                        <a href="">
                            <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                        </a>
                        <a href="/" className="pl-4">
                            <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                        </a>
                        <a href="/" className="pl-4">
                            <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
                        </a>
                        <a href="/" className="pl-4">
                            <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                        </a>
                        <a href="/" className="pl-4">
                            <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                        </a> 

                        <p className="text-center font-body text-white md:text-left">
                        ㅤㅤ© Copyright 2023. All right reserved, @pnjrmdn.
                    </p>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Footer;