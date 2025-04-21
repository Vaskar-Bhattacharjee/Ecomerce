import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/HatbazarSlice";
import { ToastContainer, toast } from "react-toastify";

interface Product {
  _id: string;
  title: string;
  category: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  description: string;
}

function Product() {
  const [details, setDetails] = useState<Product | null>(null);
  const [baseQty, setBaseQty] = useState(1);
  const dispatch = useDispatch();
  const location = useLocation();
  

  useEffect(() => {
    if (location.state) {
      setDetails(location.state);     
    }else{
      console.warn("No product details found in state!");
    }
  }, [location.state]);

  return (
    <div>
      {details ? (
          
        <div className="max-w-screen-xl h-fit mx-auto my-10  flex gap-10">
          <div className="w-1/3 relative lg:ml-20">
            <img 
            className="w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[500px]" src={details.image} alt={details.title} /> 
            <div className="absolute top-5 right-0">
              {
                details.isNew && (
                  <p className="text-xl font-normal bg-black text-white
                  px-8 py-1 ">Sale</p>

                 
                )
              }
            </div>
          </div>
          <div className="w-3/5 flex flex-col gap-8 justify-center">
              <div> {/* image and price div starts here */}

                <h2 className="text-4xl font-semibold">{details.title}</h2>
                <div className="flex items-center gap-4 lg:mt-3">
                  <p className="line-through text-gray-500 ">
                    ${details.oldPrice}
                  </p>
                  <p className="text-2xl font-medium text-gray-900 ">
                    ${details.price}
                  </p>
                </div>
                </div>
              {/*   //image and price div ends here */}
              <div className="flex items-center gap-2 ">
                  <div className="flex">
                    <MdOutlineStar/>
                    <MdOutlineStar/>
                    <MdOutlineStar/>
                    <MdOutlineStar/>
                    <MdOutlineStar/>
                  </div>
                  <p className="text-xs text-gray-500">(1 customer review)</p>
              </div>
              <p className="text-gray-500">{details.description}</p>
              <div className="flex gap-4">
                <div className="flex w-52 items-center justify-between text-gray-500 
                gap-4 border p-3">
                  <p className="text-sm text-gray-700">Quantity</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <button 
                    onClick={() => setBaseQty(baseQty ===1 ? 1 : baseQty - 1)}
                    className=" border h-5 font-normal text-lg flex
                    items-center justify-center px-2 hover:bg-gray-700
                    hover:text-white duration-300 active:bg-black cursor-pointer">-</button>
                    <span className="text-1xl text-gray-900">{baseQty}</span>
                    <button
                    onClick={() => setBaseQty(baseQty + 1)}
                    className=" border h-5 font-normal text-lg flex
                    items-center justify-center px-2 hover:bg-gray-700
                    hover:text-white duration-300 active:bg-black cursor-pointer">+</button>
                  </div>               
                </div>
                  <button
                  onClick={() => {dispatch(addToCart({
                    _id: details._id,
                    title: details.title,
                    category: details.category,
                    image: details.image,
                    price: details.price,
                    description: details.description,
                    quantity: baseQty,
                  }));
                  toast.success(`${details.title}  added to cart!`);}} 
                  className="bg-black text-white px-6 py-3
                  cursor-pointer hover:bg-gray-700  duration-300 border active:bg-gray-800">Add to Cart</button>
              </div>
              <div className="flex gap-4">
              <span className="text-white text-[18px]">Category :</span><p className="text-white text-[18px] "> {details.category}</p>
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
      ) : (
        <p>Loading or No Data Found</p>
      )}
       </div> 
  );
{/* main div end here */}
    
}

export default Product;
