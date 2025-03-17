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
            <div className="flex flex-col items-center gap-4">         
                <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">           
                    Shopping everyday         
                </h1>         
                <span className="w-20 h-[3px] bg-black"></span>         
                <p className="max-w-[700px] text-gray-600 text-center">           
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor           
                    cupiditate praesentium nesciunt cumque accusamus, maiores ad repellat           
                    voluptates saepe est earum aut laudantium sunt debitis sint et sit nisi           
                    distinctio.         
                </p>       
            </div>       
            <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">         
                {products.map((item) => (                    
                         <ProductsCart product={item} key={item._id} />                        
                         
                         ))}       
            </div>     
        </div>   
    ); 
}  

export default Products;
