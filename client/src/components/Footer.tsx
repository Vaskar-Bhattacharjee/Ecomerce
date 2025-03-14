import { PaymentStripe, websiteLogo2 } from "../assets"
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
} from "react-icons/fa";
import { BsPaypal, BsPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";


function Footer() {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
        <div className="max-w-screen-xl mx-auto flex justify-center items-center gap-12">
            {/* ===========LogoIcon Start here========== */}
            <div className="flex flex-col gap-3">
                <img 
                className="w-fit h-auto mt-[-5px]"
                src={websiteLogo2} alt="logo" />
                <p className="text-sm text-white tracking-wide">ReactBD.com</p>
                <img 
                className="w-60  h-auto"
                src={PaymentStripe} alt="payment" />
                <div className="flex gap-3 text-lg text-gray-500 cursor-pointer">
                  <ImGithub className="hover:text-white duration-300 cursor-pointer" />
                  <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
                  <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                  <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                  <FaLinkedinIn className="hover:text-white duration-300 cursor-pointer" />
                </div>

            </div>

            {/* ===========LogoIcon End here========== */}
            {/* ===========LocateUs Start here========== */}
              <div>
              <h2 className="text-[1.4rem] font-semibold text-white mb-4">Locate Us</h2>
            <div className="text-base flex flex-col gap-1">
              <p>Dar Al Salam Mall, Doha, Qatar</p>
              <p>Mobile: +968 123 4567</p>
              <p>Phone: +968 123 4567
              <p>Email: vaskarbhattacharjee03@gmail.com</p>
              </p>
            </div>
              </div>

            {/* ===========LocateUs End here========== */}

            {/* ===========Profile Start here========== */}
            <div>
            <h2 className="text-[1.4rem] font-semibold text-white mb-4">Profile </h2>
            <div className="text-base flex flex-col gap-2">
            <p className="text-base flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span>
              <BsPersonFill />
              </span>my account</p>

              <p className="text-base flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span>
              <BsPaypal />
              </span>CheckOut</p>

              <p className="text-base flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span>
              <FaHome />
              </span>Order Tracking</p>

              <p className="text-base flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span>
              <MdLocationOn />
              </span>Help & Support</p>
            </div>
            </div>

            {/* ===========Profile End here========== */}

            {/* ===========Subscribe Start here========== */}
            <div className="flex flex-col gap-1">
              <input 
              className="bg-transparent border rounded-lg
              hover:border-amber-200 duration-200 px-4 py-2"
              placeholder="Enter your email"
              type="text" />
              <button className="bg-transparent text-base px-4 py-2 border rounded-lg cursor-pointer hover:bg-amber-200 duration-200 hover:text-black">Subscribe</button>
            </div>

            {/* ===========Subscribe End here========== */}

        </div>
    </div>
  )
}

export default Footer