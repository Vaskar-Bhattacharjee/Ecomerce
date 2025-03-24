import { githubLogo, googleLogo  } from "../assets"

function Login() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-8">
      <div className="text-[16px] font-semibold w-60 h-12 tracking-wide border-[1px] border-gray-400 
        rounded-md flex items-center justify-center gap-2 hover:border-blue-600 
        cursor-pointer duration-300">
            <img 
            className="w-8"
            src={googleLogo} alt="googleLogo" />
            <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>
        <button className=" bg-black text-white text-[16px] py-3 px-8 tracking-wide
        rounded-md hover:bg-gray-800 duration-300 cursor-pointer ">Sign Out</button>
      </div>
      <div className="w-full flex items-center justify-center gap-8">
      <div className="text-[16px] font-semibold w-60 h-12 tracking-wide border-[1px] border-gray-400 
        rounded-md flex items-center justify-center gap-2 hover:border-blue-600 
        cursor-pointer duration-300">
            <img 
            className="w-8"
            src={githubLogo} alt="githubLogo" />
            <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>
        <button className=" bg-black text-white text-[16px] py-3 px-8 tracking-wide
        rounded-md hover:bg-gray-800 duration-300 cursor-pointer ">Sign Out</button>
      </div>

    </div>
  )
}

export default Login