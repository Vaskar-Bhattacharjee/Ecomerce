import { useSelector } from 'react-redux'
// import { Cartimage } from '../assets';
import CartItem from './CartItem';
import "@fontsource/poppins/500.css"; 
import { ToastContainer } from 'react-toastify';




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
  const price = productData.reduce((acc, item) => acc + item.price, 0); 
  console.log(productData);
 
  return (
    <div>
      {/* <div
      className="w-auto h-[200px] bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${Cartimage})
      backgroundClip: clip` }} 
    >
    </div> */}
    <div className='max-w-screen-xl mx-auto py-10 flex'>
    <CartItem />
     <div className=' w-1/3 bg-[#fafafa] py-6 px-4 '>
     <div className='flex flex-col gap-6 border-b-gray-500 pb-6'>
      <h2 className='text-2xl font-medium'> Cart Total </h2>
      <p className='flex gap-4 items-center font-medium'
       style={{ fontFamily: "'Poppins', sans-serif" }}
      >Subtotal 
        <span className='text-lg font-semibold text-gray-900'>
          ${price}
        </span>
      </p>
      <p className='flex gap-4 items-start text-base font-medium'
       style={{ fontFamily: "'Poppins', sans-serif" }}
      >Shipping 
        <span className='text-medium font-normal text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, est ipsam?</span>
      
      </p>
      <div className='w-[250px] h-[1px] bg-black mt-3 fle'></div>
      <p className='flex gap-4 items-start text-base font-medium'
       style={{ fontFamily: "'Poppins', sans-serif" }}
      >Total 
        <span  className='text-lg font-semibold text-gray-900'>$200</span>
      </p>
      <button className='w-full h-[40px] bg-black text-white cursor-pointer hover:bg-gray-900 duration-250 '
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
  )
}

export default Cart