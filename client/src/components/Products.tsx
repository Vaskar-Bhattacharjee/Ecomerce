import ProductsCart from "./ProductsCart";  
import {motion} from "framer-motion"


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

function Products({ products }: ProductsProps) {   
    return (     
        <div>       
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} // Only animate once
            transition={{ duration: 1 }}
            className="flex flex-col bg-transparent items-center gap-4 mt-5 sm:mt-6 md:mt-7 lg:mt-10 ">         
                <h1 className="text-3xl bg-transparent border border-amber-500 rounded-sm text-white py-2 w-80 text-center">           
                  Shopping Here   
                </h1>         
                {/* <span className="w-20 h-[3px] bg-white"></span>          */}
                <p className="max-w-[700px] text-white text-center">           
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor           
                    cupiditate praesentium nesciunt cumque accusamus, maiores ad repellat           
                    voluptates saepe est earum aut laudantium sunt debitis sint et sit nisi           
                    distinctio.         
                </p>       
            </motion.div>       
            <div className="max-w-screen-xl mx-2 sm:mx-2 md:mx-3 lg:mx-auto py-10 grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-1 md:gap-2 lg:gap-10">         
                {products.map((item) => (                    
                         <ProductsCart product={item} key={item._id} />                        
                         
                         ))}       
            </div>     
        </div>   
    ); 
}  

export default Products;
