import { useRef, useEffect } from "react";

function Banner() { 
  const glowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const moveLight = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveLight);
    return () => window.removeEventListener("mousemove", moveLight);
  }, []);
  return (
    
    <div
      className="w-screen h-[100vh] bg-transparent overflow-hidden flex relative "
     
    >
      <div
      ref={glowRef}
      className="absolute w-60 h-60 rounded-full 
    bg-yellow-500
    opacity-30 blur-3xl pointer-events-none z-10"
  style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      <div
        className="flex w-full  sm:flex-col md:flex-col lg:flex-row  inset-0 bg-transparent gap-0 
                    items-center justify-center "
      >
        <div
          className="flex justify-center items-center flex-col gap-2 sm:gap-2 md:gap-1 lg:gap-2 
          sm:ml-0 md:ml-15 lg:ml-15  w-full max-w-[700px]">
         
         
          <div>
            <h1 className="text-[30px] sm:text-[40px] md:text-[40px] tracking-normal leading-none
            lg:text-[45px] font-bold text-white mb-[-1rem]"> Where Style Meets Elegance — Dresses for Every Moment. </h1>
          </div>
          <div className="mt-10">
          <h2 className="text-[25px] sm:text-[40px] md:text-[40px] tracking-normal leading-none
            lg:text-[35px] font-bold text-yellow-500 mb-[-1rem]"> welcome to this Shop. </h2>
          </div>
          <div className="mt-10 max-w-[800px] flex items-start">
            <p
            className="text-[14px] sm:text-[14px] md:text-[17px] lg:text-[17px]
             font-normal tracking-wide text-yellow-100"
            >Discover the perfect dress for every occasion, crafted to make you look and feel your best.
               From casual daywear to show-stopping evening pieces, our collection blends trendsetting designs 
              with timeless elegance. Whether you're dressing up for a party, a date night, or just 
              because — we’ve got the style that fits your vibe.</p>
          </div>

          <div className="flex items-center mt-3 sm:items-center lg:w-[500px] lg:justify-start lg:ml-50">
          <div className="relative inline-block rounded-[6px] p-[2px] 
                bg-transparent border-amber-400 border-[1px] 
                hover:shadow-[0_0_10px_1px_rgba(255,165,0,0.6)]">
           <button
          className="w-[180px] sm:w-[250px] md:w-[250px] cursor-pointer 
               py-2 px-4 bg-transparent text-white text-xl font-normal text-start 
               flex justify-center items-center rounded-[5px] 
               transition duration-300"
            >
          Shop Now
          </button>
         </div>
         </div>



        </div>
         {/* <div className="lg:w-[450px] lg:h-[450px] md:w-0 sm:w-0 sm:h-0  flex lg:mr-[80px] sm:mx-auto bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_20px_2px_rgba(168,85,247,0.5)] mt-8 items-start"></div> */}
      </div>
    </div>
  );
}

export default Banner;
