import Auth from '../firebase/Auth'
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { githubLogo, googleLogo } from "../assets";
import { User } from 'firebase/auth';
import {Link} from 'react-router-dom';

function Login() {

  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

 
  const handleGoogleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await Auth.loginWithGoogle();
      // If loginWithGoogle doesn't return the user, you might need to get it from Auth
      const currentUser = Auth.getCurrentUser(); // Assuming this method exists
      setIsLogin(true);
      setUser(currentUser);
      toast.success("Logged in with Google successfully!");
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Failed to login with Google. Please try again.");
    }
  };

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    Auth.logout();
    setIsLogin(false);
    setUser(null);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords don't match");
        return;
    }
    
    if (!formData.agreeToTerms) {
        toast.error("Please agree to terms and privacy policy");
        return;
    }

    try {
        const user = await Auth.signUp(formData.email, formData.password, formData.name);
        if (user) {
            setUser(user);
            toast.success("Account created successfully!");
        }
    } catch (error) {
        toast.error( "Account creation failed");
        console.error("Account creation failed:", error);
    }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="w-full flex flex-col items-center h-[110vh] justify-center gap-10 py-20 px-4">
      {user? (
        <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-2 md:mb-2 lg:mb-3">{`Hello! ${user.displayName}`}</h1>
              <button
              onClick={handleSignOut}
              className="w-full border border-black text-black text-semibold py-2
               px-4 rounded-md hover:bg-gray-200 cursor-pointer transition duration-300"
              >Log out</button>
        </div>
    
      ):(

        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        {isLogin && (
          <form action="">
            <div className="mb-4">

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter you email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-e-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
          
              <input
                type="password"
                name="password"
                placeholder="Enter you password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-e-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mb-4 bg-transparent text-black border text-[18px]
              hover:text-white border-e-black text-semibold py-2 px-4 rounded-md
               hover:bg-gray-600 transition duration-300 cursor-pointer"
            >
              Log In
            </button>
          </form>
        )}
        {!isLogin && (
          <form onSubmit={handleSignUp} className="mb-6">
            <div className="mb-4">
     
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-e-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
 
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-e-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-e-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                minLength={6}
              />
            </div>

            {!isLogin && (
              <div className="mb-4">
          
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-e-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  minLength={6}
                />
              </div>
            )}

            {!isLogin && (
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                  I agree to the <a href="/TermsAndPrivacy" className="text-blue-600 hover:underline">Terms</a> and <a href="/TermsAndPrivacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
            )}

            <button
              type="submit"
              onClick={handleSignUp}
              className="w-full bg-transparent text-black border
              cursor-pointer border-e-black py-2 px-4 rounded-md hover:bg-gray-600 hover:text-white  transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </form>
        )}

        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="space-y-4">
        <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border cursor-pointer border-gray-300 rounded-md hover:border-blue-500 hover:bg-blue-50 transition duration-300"
            aria-label="Continue with Google"
          >
            <img className="w-5" src={googleLogo} alt="" role="presentation" />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border cursor-pointer
           border-gray-300 rounded-md hover:border-gray-800 hover:bg-gray-50 transition duration-300">
            <img className="w-5" src={githubLogo} alt="GitHub logo" />
            <span className="text-sm font-medium text-gray-700">
              Continue with GitHub
            </span>
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-blue-600 hover:underline focus:outline-none"
          >
            {isLogin 
              ? "Don't have an account? Sign Up" 
              : "Already have an account? Sign In"}
          </button>
   
        </div>
        <Link to = "/password-recovery">
        <p className='text-gray-600 cursor-pointer text-center mt-3'>Forget Password ?</p>
        </Link>
        
      </div>
      )}
  

  <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  toastStyle={{
    backgroundColor: "#1f2937",
    color: "#ffffff"
  }}

/>
    </div>
  );
}

export default Login;