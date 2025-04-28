import { useState, useEffect } from 'react';
import Shop from '../components/Shop';
import { productsData } from '../api/Api';

function ShopPage() {

   const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productsData(); // Call the API function
        setProducts(response.data); // Assuming the data is in response.data
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Shop products={products} />
    </div>
  );
}

export default ShopPage;