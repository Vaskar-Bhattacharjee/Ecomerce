import { Banner2 } from "../assets";

function Banner() { 
  return (
    <div
      className="w-screen h-[85vh] overflow-hidden flex  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Banner2})` }}
    >
      <div
        className="flex flex-1 sm:flex-col md:flex-col lg:flex-row  inset-0 bg-black/70 gap-0 
                    items-center justify-center "
      >
        <div
          className="flex flex-col gap-2 sm:gap-2 md:gap-1 lg:gap-1 items-center sm:ml-0 md:ml-15 lg:ml-15  w-full max-w-[500px]">
         
         <div className="flex  gap-2 lg:flex-col ">
         <div className="flex items-center sm:items-center lg:w-[500px] lg:justify-start lg:ml-50">
          <h1
  className="text-[30px] sm:text-[50px] md:text-[40px] lg:text-[50px] font-bold text-white 
             mb-[-1rem] text-start sm:text-center md:text-center"
>
  Get 25% OFF
</h1>
          </div>
          <div className="flex items-center sm:items-center lg:w-[500px] lg:justify-start lg:ml-50">
            <h1
              className="text-[30px] sm:text-[50px] md:text-[40px] lg:text-[50px] font-bold text-start text-white 
                         mb-[-1rem] sm:text-center md:text-center"
            >
              On Your
            </h1>
          </div>

         </div>
          
          <div className="flex items-center sm:items-center lg:w-[500px] lg:justify-start lg:ml-50">
            <h1
              className="text-[30px] sm:text-[50px] md:text-[40px] lg:text-[50px] font-bold text-white 
                         text-start sm:text-center md:text-center"
            >
              First Purchase
            </h1>
          </div>
          <div className="flex flex-col gap-0 sm:gap-0  md:gap-0.5 lg:gap-1">
          <div className="flex  items-center sm:items-center lg:w-[500px] lg:justify-start lg:ml-50">
            <h1
              className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-normal text-white 
                         text-start sm:text-center md:text-center"
            >
              Use the code: <span className="text-sm font-semibold">150FF</span>
            </h1>
          </div>
          <div className="flex items-center sm:items-center lg:w-[500px] lg:justify-start lg:ml-50">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-normal text-white text-start sm:text-center">Easy and FREE Returns</p>
          </div>
          <div className="flex items-center sm:items-center lg:w-[500px] lg:justify-start lg:ml-50">
            <p className="text-[14px] text-white text-start sm:text-center">*T&Cs apply</p>
          </div>
          </div>
          
          <div className="flex items-center sm:items-center lg:w-[500px] lg:justify-start lg:ml-50">       <button
              className=" w-[180px] sm:w-[250px] md:w-[250px] lg:[250px]  cursor-pointer 
                         hover:bg-white hover:text-black hover:duration-300 py-2 px-4 
                         flex justify-center items-center border bg-transparent text-white 
                         border-white rounded-[5px] text-xl font-normal text-start mt-5 "
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-0 sm:w-0 sm:h-0 flex lg:mr-[20px] sm:mx-auto mt-8 items-start"></div>
      </div>
    </div>
  );
}

export default Banner;
