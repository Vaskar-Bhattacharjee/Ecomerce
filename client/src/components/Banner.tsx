
import {  Banner2 } from "../assets"
function Banner() { 


    return (
    <div className="w-screen h-[85vh] overflow-hidden flex bg-cover  bg-center bg-no-repeat "
    style={{ backgroundImage: `url(${Banner2})`}}
    >
    <div className="flex flex-1 inset-0 bg-black/40 gap-0 justify-end">

            <div className="flex flex-col gap-0 w-1/2  items-end justify-center lg:mt-10 ml-4" >
                <div className=" w-[500px]" > <h1 className="lg:text-[50px] font-bold text-white mb-[-1rem] ">Get  25% OFF</h1> </div>
                <div className="flex items-start  w-[500px]"><h1 className="lg:text-[50px] font-bold text-start text-white mb-[-1rem] ">On Your </h1> </div>
                <div className="flex items-center w-[500px]"><h1 className="lg:text-[50px] font-bold  text-white ">First Purchase</h1></div>
                <div className="flex items-start  w-[500px] mt-2"><h1 className="text-[20px] font-normal text-white ">Use the code: <span className="text-1xl font-semibold">150FF</span></h1></div>
                <div className="flex gap-2  w-[500px] items-start ">
                    <p className="text-[20px] text-white ">Easy and FREE Returns</p>
                </div>
                <div className="flex gap-2  w-[500px] items-start lg:mt-[-5px] "><p className="text-[14px] text-white">*T&Cs apply</p></div>

               <div className=" w-[500px] lg:mt-5"><button className=" w-1/2 cursor-pointer 
               hover:bg-white hover:text-black hover:duration-300 py-2 px-4 flex justify-center
                items-start border bg-transparent text-white
                border-white rounded-[5px] text-xl font-normal text-start ">Shop Now</button></div> 
            </div>
            <div className="w-1/2 flex lg:mr-[20px] mt-8 items-start">
            
            </div>
        
            </div>

    </div>

    

    )
}

export default Banner
