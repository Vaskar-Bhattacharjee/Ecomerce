import { BsArrowRight} from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/HatbazarSlice";
import { ToastContainer, toast } from "react-toastify";


type Product = {
  _id: string,
  title: string,
  category: string,
  image: string,
  isNew: boolean,
  oldPrice: number,
  price: number,
 description: string,

};


function ProductsCart({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const _id = product.title;
  const idString = (_id: string) =>{
    return String(_id).toLowerCase().split(" ").join("-")
  }
  const rootId = idString(_id);


  const handleDetails =() =>{
    console.log("Navigating with product:", product); // Debug log
    Navigate(`/product/${rootId}`, { state: product });
    
}
  
  return <div className="group relative">
    <div 
    onClick={handleDetails}
    className="w-full h-55 sm:h-60 md:h-70 lg:h-96 cursor-pointer overflow-hidden">
      <img
      className="w-full h-full object-cover group-hover:scale-110 duration-500"
      src={product.image} alt="productImage" />

    </div>
    <div className="w-full flex justify-between items-center border-[1px] px-2 py-4 h-[99px] sm:h-[99px] md:h-[90px] ">
      <div className="flex flex-col gap-1.5 ">
        <h2 className="text-[14px] font-semibold">{product.title}</h2>
        <p className="text-[14px] font-normal">{product.category}</p>
      </div>
      <div className="flex gap-2 items-center relative overflow-x-hidden">
          <div className="text-sm relative w-28 flex gap-2 items-center
          transform group-hover:translate-x-24 transition-transform duration-500 justify-end ">
            <p className="text-[12px] line-through">${product.oldPrice}</p>
            <p className="text-[14px] font-semibold">${product.price}</p>
          </div>
          <p
            onClick={() => {
              dispatch(addToCart({
                _id: product._id,
                title: product.title,
                category: product.category,
                image: product.image,
                price: product.price,
                description: product.description,
                quantity: 1,
              }));
              toast.success(`${product.title} added to cart`);
            }}
       
          className="absolute text-sm z-20 w-[100px] text-gray-500 hover:text-gray-900 flex gap-1
          items-center top-0 transform translate-x-32 group-hover:translate-x-0 duration-500
          cursor-pointer transition-transform"
          >Add to Cart <span> <BsArrowRight /></span></p>
      </div>
    </div>
    <div>
        {
          product.isNew && <p className="text-[15px] bg-black text-white px-4 py-1.5
          top-4 right-0 absolute">Sale</p>
        }
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
}

export default ProductsCart