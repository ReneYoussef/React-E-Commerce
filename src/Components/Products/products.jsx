import  { useEffect, useState } from "react";
import ProductCard from "./ProductsCard"; 

export default function Products() {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, []);

  return (
    <div className="product-parent">
      <h1>Products</h1>
      <div className="product-list">
        {allProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
