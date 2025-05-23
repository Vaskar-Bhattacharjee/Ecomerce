// import { useRef, useEffect } from "react";
import BannerPic from '../assets/BannerPic.png'
import {motion} from 'framer-motion'

function Banner() { 
  // const glowRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const moveLight = (e) => {
  //     if (glowRef.current) {
  //       glowRef.current.style.left = `${e.clientX}px`;
  //       glowRef.current.style.top = `${e.clientY}px`;
  //     }
  //   };
  //   window.addEventListener("mousemove", moveLight);
  //   return () => window.removeEventListener("mousemove", moveLight);
  // }, []);
  return (
    
    <div className="w-screen h-[100vh] bg-transparent overflow-x-hidden flex relative ">
      {/* <div
      ref={glowRef}
      className="absolute w-[250px] h-[250px] rounded-full 
    bg-yellow-500
    opacity-25 blur-3xl pointer-events-none z-10"
  style={{ transform: "translate(-50%, -50%)" }}
      ></div> */}

      <div
        className="flex items-center justify-center w-[100vw]  sm:flex-col
         md:flex-col lg:flex-row  inset-0 bg-transparent gap-0  "
      >
        <motion.div
          initial={{x: -100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 1}}
          className="flex justify-center items-start flex-col gap-2 sm:gap-2 md:gap-1 lg:gap-2 
          sm:ml-0 md:ml-16 lg:ml-20  w-full ">
             {/* //left div starts here */}
         
         
          <div>
            <h1 className="text-[30px] max-w-[700px] sm:text-[40px] md:text-[40px] tracking-normal leading-none
            lg:text-[45px] font-bold text-white mb-[-1rem]"> Where Style Meets Elegance — Dresses for Every Moment. </h1>
          </div>
          <div className="mt-10">
          <h2 className="text-[25px] sm:text-[40px] md:text-[40px] tracking-normal leading-none
            lg:text-[35px] font-bold text-yellow-500 mb-[-1rem]"> welcome to this Shop. </h2>
          </div>
          <div className="mt-10 max-w-[800px] flex items-start">
            <p
            className="text-[14px] sm:text-[14px] md:text-[17px] lg:text-[15px]
             font-normal tracking-wide text-yellow-100 max-w-[650px] "
            >Discover the perfect dress for every occasion, crafted to make you look and feel your best.
               From casual daywear to show-stopping evening pieces, our collection blends trendsetting designs 
              with timeless elegance. Whether you're dressing up for a party, a date night, or just 
              because — we’ve got the style that fits your vibe.</p>
          </div>

          
          <div className="relative  flex items-start rounded-[6px] p-[2px] 
                bg-transparent border-amber-400 border-[1px] mt-5
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
        </motion.div> 
        {/* left div ends here */}

         <motion.div
         initial={{x: 100, opacity: 0}}
         animate={{x: 0, opacity: 1}}
         transition={{duration: 1}}
        
         className="lg:w-[600px] lg:h-[500px] md:w-0 sm:w-0 sm:h-0
           flex lg:mr-[80px] sm:mx-auto bg-transparent mt-8 items-start"> 
          {/* Right div starts here */}
          
          <img
            className="w-[500px] h-full "
            src={BannerPic} /> 
         </motion.div> 
         {/* // Right div ends here */}
      </div>
    </div>
  );
}

export default Banner;
