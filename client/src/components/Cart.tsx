import { useSelector } from 'react-redux';
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
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const totalAmt2 = totalAmt.toFixed(2);
  const Tax = totalAmt * 0.05;
  const Tax2 = Tax.toFixed(2);
  const Total =  totalAmt + Tax;
  const Total2 =  Total.toFixed(2);
  
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      
      setTotalAmt(price);
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
          $ {totalAmt2}
        </span>
      </p>
      <p className='flex gap-4 items-center justify-between font-medium'
       style={{ fontFamily: "'Poppins', sans-serif" }}
      >Tax: 
        <span className='text-[16px] font-semibold text-gray-900'>
          $ {Tax2} <span className='text-gray-700 font-normal text-sm'>(5% of Total Amount)</span>
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
        font-semibold text-gray-900'>$ {Total2}</span>
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
        <button className='text-xl font-semibold
         bg-gray-800 px-4 py-2 cursor-pointer
          rounded-[10px] text-white flex gap-3'> <FaArrowLeft 
         className='mt-1' /> Go back to Shopping</button>
        </Link>
        
      </div>
    )
  )
}

export default Cart