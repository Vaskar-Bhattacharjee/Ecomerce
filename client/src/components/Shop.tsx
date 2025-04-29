import ProductsCart from "./ProductsCart";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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

interface ProductsProps {    
    products: Product[]; 
}

function Shop({ products }: ProductsProps): JSX.Element {
    
const [selectedCategory, setSelectedCategory] = useState("All");
const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    console.log("Selected category:", selectedCategory);
    
    if(category === "All") {
        setFilteredProducts(products);
        }
    else {
        const filtered = products.filter((product) => product.category === category);
        setFilteredProducts(filtered);
    }   } 
  useEffect(()=>{
    setFilteredProducts(products)
  },[products])
    return (     
        <div className="min-h-screen"
        >
      
            {/* Professional Banner Section */}
            <div className="w-[100vw] py-6  "
        
            >
                <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <h1 className="text-4xl  mb-4 tracking-wide font-extrabold text-white">
                        Curated Collections
                        <span className="block w-24 h-1 bg-gradient-to-r from-amber-300 to-rose-400 mx-auto mt-4"></span>
                    </h1>
                    <p className="text-lg text-white font-medium">
                        Timeless elegance meets modern design
                    </p>
                </div>
            </div>

            {/* Products Grid (Unchanged) */}
            <motion.div
            initial={{x: 500, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className="w-full h-11 flex items-center justify-center gap-1 bg-transparent">
                <button 
                onClick={
                    () => handleCategoryChange("All")
                }
                style={{
                    backgroundColor: selectedCategory === "All" ? "rgb(8,51,68)" : "transparent"
                  }}
                className="text-white border-[1px] rounded-sm border-cyan-500 bg-transparent
                    hover:bg-cyan-950 w-[100px] h-full
                    transition-colors duration-150"
                    >All</button>
                <button 
                onClick={
                    () => handleCategoryChange("men's clothing")
                }
                style={{
                    backgroundColor: selectedCategory === "men's clothing" ? "rgb(8,51,68)" : "transparent"
                  }}
                className="text-white border-[1px] rounded-sm border-cyan-500 bg-transparent
                    hover:bg-cyan-950 w-[100px] h-full
                    transition-colors duration-150">Man</button>
                <button 
                onClick={
                    () => handleCategoryChange("jewelery")
                }
                style={{
                    backgroundColor: selectedCategory === "jewelery" ? "rgb(8,51,68)" : "transparent"
                  }}
                className="text-white border-[1px] rounded-sm border-cyan-500 bg-transparent
                hover:bg-cyan-950 w-[100px] h-full" >Jwelery</button>
                <button 
                onClick={
                    () => handleCategoryChange("women's clothing")
                }
                style={{
                    backgroundColor: selectedCategory === "women's clothing" ? "rgb(8,51,68)" : "transparent"
                  }}
                className="text-white border-[1px] rounded-sm border-cyan-500 bg-transparent
                    hover:bg-cyan-950 active:bg-cyan-950 w-[100px] h-full">Woman</button>
                <button 
                onClick={
                    () => handleCategoryChange("electronics")
                }
                style={{
                    backgroundColor: selectedCategory === "electronics" ? "rgb(8,51,68)" : "transparent"
                  }}
                className="text-white border-[1px] rounded-sm border-cyan-500 bg-transparent
                    hover:bg-cyan-950 active:bg-cyan-950 w-[100px] h-full">Electronics</button>
            </motion.div>
            <div className="max-w-screen-xl mx-2 sm:mx-2 md:mx-3 lg:mx-auto py-10 grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-1 md:gap-2 lg:gap-10">         
                {filteredProducts.map((item) => (                    
                    <ProductsCart product={item} key={item._id} />                        
                ))}       
            </div>     
        </div>   
    ); 
}

export default Shop