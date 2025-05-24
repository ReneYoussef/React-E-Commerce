import { useEffect, useState } from "react";
import ProductCard from "./ProductsCard";
import { Link, useNavigate } from "react-router-dom";

export default function Products({ category, onCategorySelect }) {
  /////////////////////////////////////Product State and Api/////////////////////////////////////////////////////
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, []);

  useEffect(() => {
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  }, [category, allProducts]);

  ///////////////////////////Category State and Api///////////////////////////////////////

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching Categories", err));
  }, []);

  function handleCategorySelect(cat) {
    onCategorySelect(cat);
    navigate("/Products/products");
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="product-parent">
      <div className="Product-nav">
        <h1>Products</h1>
        <div className="dropdown">
    
            <div className="category-dropdown">
              <label htmlFor="category-select">Categories: </label>
              <select
                id="category-select"
                className="category-select"
                onChange={(e) => handleCategorySelect(e.target.value)}
                value={category}
              >
                <option value="all">All</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
       
        </div>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
