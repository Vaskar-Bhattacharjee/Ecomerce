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
  console.log(productData);
  const Navigate = useNavigate();
  return (
    <div className="w-[95vw] m-auto bg-white z-40  h-20 border-b-[1px]
     border-b-gray-800 sticky top-0 ">
      <div className="flex justify-between lg:h-20 items-center mx-auto  ">
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
            <img src={cart} className='w-8 cursor-pointer' />
           
          </div>
          <Link to="/cart">
              <div className='relative'>
              <img className="w-8 cursor-pointer" src={shopingBag} alt="googleLogo" />
              <span
                className='absolute w-4 left-2 top-2.5 text-sm flex items-center
                justify-center font-semibold rounded-4xl text-black'
                >{productData.length}</span>
            </div>
          </Link>
        </div>    
      </div>
    </div>
  );
}

export default Header;
