import { useNavigate } from 'react-router-dom';
import { websiteLogo } from '../assets/index';
import { cart } from '../assets/index';
import { shopingBag } from '../assets/index';

function Header() {
  const Navigate = useNavigate();
  return (
    <div className="w-[95vw] m-auto  h-20 border-b-[1px]
     border-b-gray-800 ">
      <div className="flex justify-between lg:h-20 items-center mx-auto">
        <div className='ml-0'>
          <img className="w-auto h-60" src={websiteLogo} alt="logo" />
        </div>
        <div className='mr-3 flex gap-5 lg:mr-[5rem]'>
          <ul className="flex gap-8 items-center lg:mr-[5rem]" >
            <li 
            onClick={() => Navigate('/')}
            className="
            text-base text-black font-semibold hover:text-orange-900 *
            hover:underline underline-offset-2 decoration-[1px]
            cursor-pointer duration-300">Home</li>
            <li className="
            text-base text-black font-semibold hover:text-orange-900 *
            hover:underline underline-offset-2 decoration-[1px]
            cursor-pointer duration-300">Pages</li>
            <li className="
            text-base text-black font-semibold hover:text-orange-900 *
            hover:underline underline-offset-2 decoration-[1px]
            cursor-pointer duration-300">Shop</li>
            <li className="
            text-base text-black font-semibold hover:text-orange-900 *
            hover:underline underline-offset-2 decoration-[1px]
            cursor-pointer duration-300">Element</li>
            <li className="
            text-base text-black font-semibold hover:text-orange-900 *
            hover:underline underline-offset-2 decoration-[1px]
            cursor-pointer duration-300">Blog</li>

          </ul>
          <div className='relative '>
            <img src={cart} className='w-7 cursor-pointer' />
            <span
            className='absolute w-4 left-0 top-[-1rem] text-sm flex items-center
            justify-center font-semibold bg-red-500  rounded-4xl text-white'
            >0</span>
          </div>
          <div className='relative'>
          <img className="w-7 cursor-pointer" src={shopingBag} alt="googleLogo" />
          <span
            className='absolute w-4 left-0 top-[-1rem] text-sm flex items-center
            justify-center font-semibold bg-red-500  rounded-4xl text-white'
            >0</span>
        </div>
        </div>
    
      </div>
    </div>
  );
}

export default Header;
