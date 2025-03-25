import { githubLogo, googleLogo  } from "../assets"
import { toast, ToastContainer } from "react-toastify";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

function Login() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();


  const handleGoogleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
    .then((result) => {

      const user = result.user;
      console.log(user);
    }).catch((error) => {
      console.log(error);
    })    
  };

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        toast.success("Signed out successfully");
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.log("Error signing out:", error);
      });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-8">
      <div onClick={handleGoogleLogin} className="text-[16px] font-semibold w-60 h-12 tracking-wide border-[1px] border-gray-400 
        rounded-md flex items-center justify-center gap-2 hover:border-blue-600 
        cursor-pointer duration-300">
            <img 
            className="w-8"
            src={googleLogo} alt="googleLogo" />
            <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>
        <button
        onClick={handleSignOut}
        className=" bg-black text-white text-[16px] py-3 px-8 tracking-wide
        rounded-md hover:bg-gray-800 duration-300 cursor-pointer ">Sign Out</button>
      </div>
      <div className="w-full flex items-center justify-center gap-8">
      <div className="text-[16px] font-semibold w-60 h-12 tracking-wide border-[1px] border-gray-400 
        rounded-md flex items-center justify-center gap-2 hover:border-blue-600 
        cursor-pointer duration-300">
            <img 
            className="w-8"
            src={githubLogo} alt="githubLogo" />
            <span className="text-sm text-gray-900">Sign in with Github</span>
        </div>
        <button className=" bg-black text-white text-[16px] py-3 px-8 tracking-wide
        rounded-md hover:bg-gray-800 duration-300 cursor-pointer ">Sign Out</button>
      </div>

                <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />

    </div>
  )
}

export default Login