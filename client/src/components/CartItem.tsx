
import {useSelector} from 'react-redux'

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
  };
}
function CartItem() {
  const productData = useSelector((state: rootState) => state.Hatbazar.productsData)
  return (
     <div className=" w-2/3 pr-10 py-6 ">
      
      <div className='w-full'>
       <h2 className="text-2xl">Shopping Cart</h2>
      </div>
      <div>
        {
            productData.map((item) =>{
             
            })
        }
      </div>
     </div>

  )
}

export default CartItem