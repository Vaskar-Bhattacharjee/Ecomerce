import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setDetails(location.state);
    }
  }, [location.state]);

  return (
    <div>
      {details ? (

        <div className="max-w-screen-xl h-fit mx-auto my-10  flex gap-10">
          <div className="w-1/3 relative lg:ml-20">
            <img 
            className="w-full h-[500px]" src={details.image} alt={details.title} /> 
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
              <div>
                <div className="flex w-52 items-center justify-between text-gray-500 
                gap-4 border p-3">
                  <p className="text-sm text-gray-700">Quantity</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <button className=" border h-5 font-normal text-lg flex
                    items-center justify-center px-2 hover:bg-gray-700
                    hover:text-white duration-300 active:bg-black cursor-pointer">-</button>
                    <span className="text-1xl text-gray-900">{1}</span>
                    <button className=" border h-5 font-normal text-lg flex
                    items-center justify-center px-2 hover:bg-gray-700
                    hover:text-white duration-300 active:bg-black cursor-pointer">+</button>
                  </div>

                </div>
              </div>
          </div>
          
        </div> 
      ) : (
        <p>Loading or No Data Found</p>
      )}
       </div> 
  );
{/* main div end here */}
    
}

export default Product;
