import { useSelector } from 'react-redux'
import { Cartimage } from '../assets';
import CartItem from './CartItem'


type Product ={
  _id: string;
  title: string;
  category: string;
  image: string;
  quantity: number;
};
type rootState ={
  Hatbazar: {  
    productsData: Product[]
  }
}
function Cart() {
  const productData = useSelector((state: rootState) => state.Hatbazar.productsData);
  console.log(productData);
 
  return (
    <div>
      <div
      className="w-auto h-[200px] bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${Cartimage})` }} 
    >
    </div>
    <div className='max-w-screen-xl mx-auto py-10 flex'>
    <CartItem />
     <div className=' w-1/3 bg-[#fafafa] py-6 px-4 '>
     <div className='flex flex-col gap-6 border-b-gray-400 pb-6'>
      <h2 className='text-2xl font-medium'> Cart Total </h2>
      <p className='flex gap-4 items-center font-semibold'>Subtotal 
        <span className='text-lg font-bold text-gray-950'>
          $200
        </span>
      </p>
      <p className='flex gap-4 items-start text-base font-semibold'>Shipping 
        <span className='text-sm font-normal text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, est ipsam?</span>
      
      </p>
      <div className='w-[250px] h-[1px] bg-black mt-3 fle'></div>
      <p className='flex gap-4 items-start text-base font-semibold'>Total 
        <span  className='text-lg font-bold text-gray-900'>$200</span>
      </p>
      <button className='w-full h-[40px] bg-black text-white cursor-pointer hover:bg-gray-900 duration-250 '>Proceed to Checkout</button>
     </div>
     </div>
   
    </div>
  
   
      
    </div>
  )
}

export default Cart