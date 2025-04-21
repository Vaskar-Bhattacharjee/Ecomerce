import ProductsCart from "./ProductsCart";  


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
            <div className="flex flex-col bg-black items-center gap-4 mt-5 sm:mt-6 md:mt-7 lg:mt-10 ">         
                <h1 className="text-2xl bg-transparent border-amber-500 rounded-xl text-white py-2 w-80 text-center">           
                  Shopping Here   
                </h1>         
                <span className="w-20 h-[3px] bg-black"></span>         
                <p className="max-w-[700px] text-gray-600 text-center">           
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor           
                    cupiditate praesentium nesciunt cumque accusamus, maiores ad repellat           
                    voluptates saepe est earum aut laudantium sunt debitis sint et sit nisi           
                    distinctio.         
                </p>       
            </div>       
            <div className="max-w-screen-xl mx-2 sm:mx-2 md:mx-3 lg:mx-auto py-10 grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-1 md:gap-2 lg:gap-10">         
                {products.map((item) => (                    
                         <ProductsCart product={item} key={item._id} />                        
                         
                         ))}       
            </div>     
        </div>   
    ); 
}  

export default Products;
