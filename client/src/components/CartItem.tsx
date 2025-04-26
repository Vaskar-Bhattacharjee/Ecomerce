import { MdOutlineClose } from "react-icons/md";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import {  deleteToCart, clearCart, incrementQuantity, decrementQuantity } from "../Redux/HatbazarSlice";
import { toast } from "react-toastify";
import {motion} from "framer-motion"

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
    productsData: Product[];
  };
}
function CartItem() {
  const dispatch = useDispatch()
  const productData = useSelector((state: rootState) => state.Hatbazar.productsData)
  return (
     <motion.div
     initial={{ x: -100, opacity: 0 }}
     whileInView={{ x: 0, opacity: 1 }}
     viewport={{ once: true }} // Only animate once
     transition={{ duration: 1 }}
     className="w-full lg:w-2/3 pr-0 lg:pr-10 py-6">
          
      
      <div className='w-full px-4 lg:px-0'>
       <h2 className="text-xl font-semibold  lg:text-2xl">Shopping Cart</h2>
      </div>
      <div className="px-4 lg:px-0">
        {
            productData.map((item) =>(
              <div key={item._id}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6 mt-6 p-3 lg:p-0 border-b lg:border-none">
                {/* Left section (image + title) */}
                <div className="flex items-center justify-center gap-2 w-full lg:w-auto">
                  <MdOutlineClose 
                  onClick={() => {dispatch(deleteToCart(item._id));
                  toast.error(`${item.title} removed from cart`)} }
                  className="text-xl text-gray-600 hover:text-red-600 
                  cursor-pointer duration-300" />
                  <img 
                  className="w-20 h-20 lg:w-32 lg:h-32 object-cover"
                  src={item.image} alt="image" />
                  <h2 className="w-full lg:w-52  lg:text-xl lg:ml-4 font-sans font-medium text-serif line-clamp-2 lg:line-clamp-none">{item.title}</h2> 
                </div>

                {/* Right section (price + quantity + total) */}
                <div className="flex items-center justify-center md:justify-between lg:justify-between  w-full lg:w-auto gap-2 lg:gap-6">
                  <p className="w-16 lg:w-10 text-black font-semibold text-right lg:text-left">${item.price}</p>
                  <div className="flex w-full lg:w-52 items-center justify-center text-black gap-2 lg:gap-4 lg:border lg:border-black p-3">
  {/* Keep the Quantity label exactly as you had it */}
                   <p className="text-sm text-black">Quantity</p>
  
  {/* Only modify the button container width behavior */}
          <div className="flex  items-center gap-2 lg:gap-4 text-sm font-semibold">
            <button 
              onClick={() => {
                if(item.quantity > 1){
                  dispatch(decrementQuantity(item._id))
                }                     
              }}
              className="border border-black h-8 lg:h-5 w-8 lg:w-auto font-normal text-lg flex
              items-center justify-center px-2 hover:bg-gray-700
              hover:text-white duration-300 active:bg-black cursor-pointer">-</button>
            <span className="text-1xl text-black">{item.quantity}</span>
            <button 
              onClick={() => {
                dispatch(incrementQuantity(item._id))
              }}   
              className="border border-black h-8 lg:h-5 w-8 lg:w-auto font-normal text-lg flex
              items-center justify-center px-2 hover:bg-black
              hover:text-white duration-300 active:bg-black cursor-pointer">+</button>
          </div>               
        </div> 
                  <div className="w-16 lg:w-4 text-gray-800 font-semibold text-right">${item.quantity * item.price}</div>
                </div>
              </div>
            ))
        }
      </div>
    {productData.length !== 0?

      (
        <button 
        onClick={() => {
          dispatch(clearCart());
          toast.error("Cart is empty")
        }}
        className="bg-red-500 text-white mt-8 cursor-pointer
        ml-7 py-1 px-6 hover:bg-red-800 duration-300">Reset Cart</button>
      )

    : null
    }

     </motion.div>
  )
}

export default CartItem