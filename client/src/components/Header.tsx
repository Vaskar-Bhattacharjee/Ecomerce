import { useState } from 'react'; // Add useState for managing mobile menu state
import { useNavigate } from 'react-router-dom';
import { websiteLogo } from '../assets/index';
import { cart } from '../assets/index';
import { shopingBag } from '../assets/index';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

type Product = {
  _id: string,
  title: string,
  category: string,
  image: string,
  isNew: boolean,
  oldPrice: number,
  price: number,
}

type rootState = {
  Hatbazar: {
    productsData: Product[]
  }
}

function Header() {
  const productData = useSelector((state: rootState) => state.Hatbazar.productsData);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
  };

  return (
    <div className="w-full bg-white z-40 h-20 border-b-[1px] border-b-gray-800 sticky top-0">
      <div className="container mx-auto flex justify-between items-center h-20 px-4">
        {/* Logo */}
        <div className=" w-[200px] h-[200px]">
          <img className="w-full h-full" src={websiteLogo} alt="logo" />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-8">
            <li
              onClick={() => navigate('/')}
              className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Home
            </li>
            <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
        </div>

        {/* Cart and Shopping Bag Icons */}
        <div className="flex items-center gap-4">
          <Link to="/login">
          <div className="relative">
            <img src={cart} className="w-8 cursor-pointer" alt="cart" />
          </div>
          </Link>
          <Link to="/cart">
            <div className="relative">
              <img className="w-8 cursor-pointer" src={shopingBag} alt="shopping bag" />
              <span className="absolute w-4 left-2 top-2.5 text-sm flex items-center justify-center font-semibold text-black">
                {productData.length}
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu} // Add onClick handler to toggle mobile menu
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-4 p-4">
            <li
              onClick={() => {
                navigate('/');
                toggleMobileMenu(); // Close menu after navigation
              }}
              className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Home
            </li>
            <li
              onClick={toggleMobileMenu}
              className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Pages
            </li>
            <li
              onClick={toggleMobileMenu}
              className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Shop
            </li>
            <li
              onClick={toggleMobileMenu}
              className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Element
            </li>
            <li
              onClick={toggleMobileMenu}
              className="text-base text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Blog
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;