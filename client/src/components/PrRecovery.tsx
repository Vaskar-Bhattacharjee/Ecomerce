import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
 import Auth from '../firebase/Auth';
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function PrRecovery() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await Auth.passwordReset(email);
      setIsSubmitted(true);
      toast.success("Password reset email sent successfully!");
    } catch (error) {
      console.error("Password reset error:", error);
      toast.error("Failed to send password reset email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center h-[90vh] justify-center gap-10 py-20 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Password Recovery
        </h2>

        {isSubmitted ? (
          <div className="text-center">
            <p className="mb-4 text-gray-700">
              We've sent a password reset link to <span className="font-semibold">{email}</span>.
            </p>
            <p className="text-gray-600 text-sm mb-6">
              If you don't see the email, check your spam folder or try resending it.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-transparent text-black border border-e-black py-2 px-4 rounded-md hover:bg-gray-600 hover:text-white transition duration-300"
            >
              Try another email
            </button>
          </div>
        ) : (
          <>
            <p className="mb-6 text-black text-center">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-e-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-transparent text-black border cursor-pointer border-e-black py-2 px-4 rounded-md hover:bg-gray-600 hover:text-white transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
           <Link to="/login">
           <div className="mt-6 flex justify-center items-center gap-2 text-center">
              <span><BsArrowLeft /></span>
              <p                
                className="text-sm text-gray-600 hover:underline focus:outline-none"
              >
                Back to Login
              </p>
            </div>
           </Link>
         
          </>
        )}
      </div>

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

export default PrRecovery;