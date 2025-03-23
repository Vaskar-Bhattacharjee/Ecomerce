import { useSelector } from 'react-redux'
 import { Cartimage } from '../assets';
import CartItem from './CartItem';
import "@fontsource/poppins/500.css"; 
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";




type Product ={
  _id: string;
  title: string;
  category: string;
  image: string;
  quantity: number;
  price: number;
};
type rootState ={
  Hatbazar: {  
    productsData: Product[]
  }
}
function Cart() {
 const productData = useSelector((state: rootState) => state.Hatbazar.productsData);
  const [totalAmt, setTotalAmt] = useState(0);
  const Total = totalAmt.toFixed(2) + (totalAmt*0.05).toFixed(1)
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      
      setTotalAmt(price.toFixed(2))
      })
    }
  , [productData])
 
  return (
    productData.length > 0 ? (
    <div>
      {/* <div
      className="w-auto h-[200px] bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${Cartimage})
      backgroundClip: clip` }} 
    >
    </div> */}
    <div className='max-w-screen-xl mx-auto py-10 flex'>
    <CartItem />
     <div className=' w-1/3 bg-[#fafafa] py-6 px-4 flex flex-col justify-center items-start '>
     <h2 className='text-2xl font-medium mb-6 pl-4'> Cart Total </h2>
     <div className='flex flex-col gap-5  w-[280px] border-b-gray-500 pl-4 pb-6'>
      
      <p className='flex gap-4 items-center justify-between font-medium'
       style={{ fontFamily: "'Poppins', sans-serif" }}
      >Subtotal: 
        <span className='text-lg font-semibold text-gray-900'>
          $ {totalAmt}
        </span>
      </p>
      <p className='flex gap-4 items-center justify-between font-medium'
       style={{ fontFamily: "'Poppins', sans-serif" }}
      >Tax: 
        <span className='text-[16px] font-normal text-gray-900'>
          ${`${(totalAmt * 0.05).toFixed(1)}`}(5% of Total Amount)
        </span>
      </p>
      <p className='flex gap-4 items-center justify-between text-base font-medium'
       style={{ fontFamily: "'Poppins', sans-serif" }}
      >Shipping: 
        <span className='text-medium font-semibold text-gray-700'>Free</span>
      
      </p>
      <div className='w-[250px] h-[1px] bg-black mt-3 fle'></div>
      <p className='flex gap-4 items-start justify-between text-base font-medium'
       style={{ fontFamily: "'Poppins', sans-serif" }}
      >Total 
        <span  className='text-lg 
        font-semibold text-gray-900'>{Total}</span>
      </p>
      <button className='w-[270px] h-[40px] bg-black text-white cursor-pointer hover:bg-gray-900 duration-250 '
      style={{ fontFamily: "'Poppins', sans-serif" }}
      >Proceed to Checkout</button>
     </div>
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
  
   
      
    </div>
    ) : (
      <div className='w-screen h-[300px] flex flex-col gap-3 justify-center items-center'>
        {/* <div className='w-full h-[250px] bg-cover no-repeat 
        bg-center bg-gray-900 flex flex-col gap-3 justify-center items-center text-white '
          style={{ backgroundImage: `url(${Cartimage})` }}
        >
        </div> */}
        <h1 className='text-3xl font-semibold px-6 py-3'>Your cart is empty</h1>
        <Link to ='/'>
        <button className='text-2xl font-semibold
         bg-gray-800 px-6 py-3 cursor-pointer
          rounded-[10px] text-white flex gap-3'> <FaArrowLeft 
         className='mt-1' /> Go back to Shopping</button>
        </Link>
        
      </div>
    )
  )
}

export default Cart