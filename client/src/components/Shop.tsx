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

function Shop({ products }: ProductsProps) {   
    return (     
        <div className="min-h-screen">
            {/* Professional Banner Section */}
            <div className="w-full bg-gray-50 py-10">
                <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-light mb-4 tracking-wide text-gray-800">
                        Curated Collections
                        <span className="block w-24 h-1 bg-gradient-to-r from-amber-300 to-rose-400 mx-auto mt-4"></span>
                    </h1>
                    <p className="text-lg text-gray-600 font-medium">
                        Timeless elegance meets modern design
                    </p>
                </div>
            </div>

            {/* Products Grid (Unchanged) */}
            <div className="max-w-screen-xl mx-2 sm:mx-2 md:mx-3 lg:mx-auto py-10 grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-1 md:gap-2 lg:gap-10">         
                {products.map((item) => (                    
                    <ProductsCart product={item} key={item._id} />                        
                ))}       
            </div>     
        </div>   
    ); 
}
export default Shop