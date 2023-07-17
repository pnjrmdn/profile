const MoreInfo = () => {
    return (

        <>
            <div className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
                style={{ backgroundImage: "url(/img/bg-cta.jpg)" }}>
                <div className="container relative z-30">
                    <h3 className="text-center font-header text-1xl leading-tight tracking-wide text-white sm:text-1xl lg:text-1xl">
                        For a more detailed overview of my job experience, as well
                        as my licenses and certifications, please refer to my
                        LinkedIn profile. On LinkedIn will find a comprehensive
                        summary of my professional background, including my
                        previous roles, projects I have worked on, and any
                        relevant certifications or licenses.
                    </h3>
                    {/* <form className="mt-6 flex flex-col justify-center sm:flex-row">
                        <input className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3" type="text"
                            id="email" placeholder="Give me your Email" />
                        <button
                            className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold  text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
                            submit
                        </button>
                    </form> */}
                </div>
            </div>
        </>

    );
}

export default MoreInfo;