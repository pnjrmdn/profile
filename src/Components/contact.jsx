const Contact = () => {
return(
    <>

    <div className="container py-16 md:py-20" id="contact">
<h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
  Here's a contact form
</h2>

<div className="flex flex-col pt-16 lg:flex-row">
  <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
    <div className="flex items-center">
      <i className="bx bx-phone text-2xl text-grey-40"></i>
      <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
        My WhastApp Phone
      </p>
    </div>
    <div className="grid grid-cols-2">
      <div>
        <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
          Telkosmel 
          081346828499
        </p>
      </div>
      <div>
        <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
          Indosat 
          081545857950
        </p>
      </div>
    </div>
  </div>
  <div
    className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
    <div className="flex items-center">
      <i className="bx bx-envelope text-2xl text-grey-40"></i>
      <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
        My Email
      </p>
    </div>
    <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
      panjiramadanu55@gmail.com 
      panjiramadanu55@proton.me
    </p>
  </div>
  <div
    className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
    <div className="flex items-center">
      <i className="bx bx-map text-2xl text-grey-40"></i>
      <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
        My Address
      </p>
    </div>
    <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
      Jl Tata Praja Blok H 1 Rt 23 No. 5 Kelurahan Sepinggan Baru Kota Balikpapan Selatan Provinsi Kalimantan
      Timur
    </p>
  </div>
</div>
</div>


    </>
);
}

export default Contact;