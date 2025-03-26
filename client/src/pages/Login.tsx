import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User
} from "firebase/auth";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { githubLogo, googleLogo } from "../assets";

function Login() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [isLogin, setIsLogin] = useState(true); // Toggle between login/signup
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser); 

    });
  
    return () => unsubscribe();
  }, []);
  const handleGoogleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success(`Welcome ${user.displayName || 'User'}!`);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Google login failed");
      });
  };

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        setIsLogin(!isLogin)
        toast.success("Signed out successfully");
      })
      .catch((error) => {
        toast.error("Error signing out");
        console.log("Error signing out:", error);
      });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    if (!formData.agreeToTerms) {
      toast.error("Please agree to terms and privacy policy");
      return;
    }
    // const handleSignOut =(e: React.MouseEvent) => {
    //   e.preventDefault();
    //   const auth = getAuth();
    //     signOut(auth).then(() => {
    //       // Sign-out successful.
    //     }).catch((error) => {
    //       // An error happened.
    //     })
    // }

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success(`Welcome ${formData.name}!`);
        // You might want to update user profile with displayName here
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20 px-4">
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
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        {!isLogin && (
          <form onSubmit={handleSignUp} className="mb-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                minLength={6}
              />
            </div>

            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  I agree to the <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
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
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border cursor-pointer
             border-gray-300 rounded-md hover:border-blue-500 hover:bg-blue-50 transition duration-300"
          >
            <img className="w-5" src={googleLogo} alt="Google logo" />
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
        theme="light"
      />
    </div>
  );
}

export default Login;