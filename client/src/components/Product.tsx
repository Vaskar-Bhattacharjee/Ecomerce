import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Product {
  _id: string;
  title: string;
  category: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
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
      {details ? (  // ✅ Ensure details is not null
        <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
          <div>
            <img src={details.image} alt={details.title} /> {/* ✅ No error */}
          </div>
        </div>
      ) : (
        <p>Loading or No Data Found</p>
      )}
    </div>
  );
}

export default Product;
