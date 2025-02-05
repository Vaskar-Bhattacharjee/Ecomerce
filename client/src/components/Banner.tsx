import  {BannerPic}  from "../assets/index";

function Banner() { 


    return (
    <div className="w-[95vw] m-auto h-full flex
    bg-slate-100
    ">
        <div className="w-1/2 h-[100vh] ml-20 lg:mt-[-50px] flex flex-col justify-center" >
            <h1 className=" font-extrabold font-serif text-5xl"> Welcome to our store</h1>
            <h1 className=" font-extrabold font-serif text-5xl">Get all your needs</h1>
            <h1 className=" font-extrabold font-serif text-5xl">in one place</h1>
            <button className="bg-black text-white 
            rounded-bl-sm
            cursor-pointer
            w-40 h-10 mt-10
            hover:bg-slate-100
            hover:text-black
            hover: border-black
            hover:border-2
            duration-200">Shop now</button>
        </div>
        <div className="w-1/2 h-[100vh] lg:mt-10  lg:mr-30 mt-4">
            <img src={BannerPic} alt="Banner" />
        </div>
    </div>

    )
}

export default Banner
