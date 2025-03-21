import { MdOutlineClose } from "react-icons/md";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { addToCart, deleteToCart, clearCart } from "../Redux/HatbazarSlice";
import { toast } from "react-toastify";


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
     <div className=" w-2/3 pr-10 py-6 ">
      
      <div className='w-full'>
       <h2 className="text-2xl">Shopping Cart</h2>
      </div>
      <div>
        {
            productData.map((item) =>(
              <div key={item._id}
              className="flex justify-between items-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <MdOutlineClose 
                  onClick={() => {dispatch(deleteToCart(item._id));
                  toast.error(`${item.title} removed from cart`)} }
                  className="text-xl text-gray-600 hover:text-red-600 
                  cursor-pointer duration-300" />
                  <img 
                  className="w-32 h-32 object-cover"
                  src={item.image} alt="image" />
                </div>
                <h2 className="w-52">{item.title}</h2> 
                <p className="w-10 text-gray-800 font-semibold">${item.price}</p>
                <div className="flex w-52 items-center justify-between text-gray-500 
                gap-4 border p-3">
                  <p className="text-sm text-gray-700">Quantity</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <button 
                    className=" border h-5 font-normal text-lg flex
                    items-center justify-center px-2 hover:bg-gray-700
                    hover:text-white duration-300 active:bg-black cursor-pointer">-</button>
                    <span className="text-1xl text-gray-900">{item.quantity}</span>
                    <button      
                    className=" border h-5 font-normal text-lg flex
                    items-center justify-center px-2 hover:bg-gray-700
                    hover:text-white duration-300 active:bg-black cursor-pointer">+</button>
                  </div>               
                </div> 
                <div className="w-4 text-gray-800 font-semibold">${item.quantity * item.price}</div>
              </div>
            ))
        }
      </div>
      <button 
      onClick={() => {
        dispatch(clearCart());
        toast.error("Cart is empty")
      }}
      className="bg-red-500 text-white mt-8 
      ml-7 py-1 px-6 hover:bg-red-800 duration-300">Reset Cart</button>
 
     </div>
     

  )
}

export default CartItem