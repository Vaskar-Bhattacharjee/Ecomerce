import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import "@fontsource/poppins/500.css"; 
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";



type Product = {
  _id: string;
  title: string;
  category: string;
  image: string;
  quantity: number;
  price: number;
};

type rootState = {
  Hatbazar: {  
    productsData: Product[],
    userInfo: User,
  }
};

type User = {
  name: string;
  email: string;
};




function Cart() {
  const productData = useSelector((state: rootState) => state.Hatbazar.productsData);
  const userInfo = useSelector((state: rootState) => state.Hatbazar.userInfo);
  const [payNow, setPayNow] = useState(false);
  const [totalAmt, setTotalAmt] = useState<number>(0);
  
  const totalAmt2 = totalAmt.toFixed(2);
  const Tax = totalAmt * 0.05;
  const Tax2 = Tax.toFixed(2);
  const Total = totalAmt + Tax;
  const Total2 = Total.toFixed(2);
  
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please login to proceed with payment");
    }
  }

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price);
  }, [productData]);

  return (
    productData.length > 0 ? (
      <div className='bg-white/80'>
        <div
       
        className='max-w-screen-xl mx-auto py-10 flex flex-col lg:flex-row justify-center items-center'>
          <CartItem />
          
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }} // Only animate once
            transition={{ duration: 1 }}
          className='w-1/3 bg-transparent  border-[1px] border-black py-6 px-4 flex flex-col justify-center items-center lg:items-start'>
            <h2 className='text-2xl font-medium mb-6 pl-4'>Cart Total</h2>
            <div className='flex flex-col gap-5 w-[280px] border-b-gray-500 pl-4 pb-6'>
              <p className='flex gap-4 items-center justify-between font-medium'
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Subtotal: 
                <span className='text-lg font-semibold text-gray-900'>
                  $ {totalAmt2}
                </span>
              </p>
              <p className='flex gap-4 items-center justify-between font-medium'
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Tax: 
                <span className='text-[16px] font-semibold text-gray-900'>
                  $ {Tax2} <span className='text-gray-700 font-normal text-sm'>(5% of Total Amount)</span>
                </span>
              </p>
              <p className='flex gap-4 items-center justify-between text-base font-medium'
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Shipping: 
                <span className='text-medium font-semibold text-gray-700'>Free</span>
              </p>
              <div className='w-[250px] h-[1px] bg-black mt-3'></div>
              <p className='flex gap-4 items-start justify-between text-base font-medium'
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Total 
                <span className='text-lg font-semibold text-gray-900'>$ {Total2}</span>
              </p>
              <button 
                onClick={handleCheckout}
                className='w-[270px] h-[40px] bg-black text-white cursor-pointer hover:bg-gray-900 duration-250 '
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
          
        
          
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
        <h1 className='text-3xl font-semibold px-6 py-3 text-white'>Your cart is empty</h1>
        <Link to='/'>
          <button className='text-xl font-semibold bg-gray-600 shadow-md shadow-emerald-400 hover:shadow-transparent  shadow-opacity-50 px-4 py-2 cursor-pointer rounded-[10px] text-white flex gap-3'>
            <FaArrowLeft className='mt-1' />  Back to Shopping
          </button>
        </Link>
      </div>
    )
  );
}

export default Cart;
