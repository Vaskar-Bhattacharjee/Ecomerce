
import { HeroPic, Return } from "../assets"
function Banner() { 


    return (
    <div className="w-screen h-[90vh] overflow-x-hidden flex ">
    <div className="flex flex-1  gap-0 justify-end">

            <div className="flex flex-col gap-0 w-1/2 items-center justify-center lg:mt-[-40px] ml-4" >
                <div className="bg-gradient-to-b from-[#82da88] to-[#76efaa] rounded-[10px] py-[1px] px-2 w-[314px]"> <h1 className="lg:text-[40px] font-bold  ">Get  25% OFF</h1> </div>
                <div className="flex items-start w-[314px]"><h1 className="lg:text-[40px] font-bold text-start ">On Your </h1> </div>
                <div className="flex items-start w-[314px]"><h1 className="lg:text-[40px] font-bold  ">First Purchase</h1></div>
                <div className="flex items-start w-[314px] mt-2"><h1 className="text-[20px] font-normal ">Use the code: <span className="text-1xl font-semibold">150FF</span></h1></div>
                <div className="flex gap-2 w-[314px] items-start ">
                    <img className="w-[24px] h-[24px]" src={Return} alt="Return" />
                    <p className="text-[20px] ">Easy and FREE Returns</p>
                </div>
                <div className="flex gap-2 w-[314px] items-start lg:mt-[-5px] "><p className="text-[14px]">*T&Cs apply</p></div>

               <div className="w-[314px] lg:mt-5"><button className="w-[140px] cursor-pointer 
               hover:bg-white hover:text-black hover:duration-300 py-1 px-2 flex justify-center
                items-start border bg-black text-white
                border-black rounded-[5px] text-xl font-normal text-start ">Shop Now</button></div> 
            </div>
            <div className="w-1/2 flex lg:mr-[20px] mt-8 items-start">
                <img 
                className="w-auto h-fit  "
                src={HeroPic} alt="hero" />
            </div>
        
            </div>

    </div>

    

    )
}

export default Banner
