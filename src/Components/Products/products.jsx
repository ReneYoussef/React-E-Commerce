import { useEffect, useState, useRef } from "react";
import ProductCard from "./ProductsCard";
import { useNavigate } from "react-router-dom";

export default function Products({ category, onCategorySelect }) {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Fetch all products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, []);

  // Fetch categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching Categories", err));
  }, []);

  useEffect(() => {
    let filtered = allProducts;


    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }

    const searchTerm = searchInputRef.current?.value.toLowerCase() || "";
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredProducts(filtered);
  }, [category, allProducts]);
  function handleSearchChange() {

    let filtered = allProducts;

    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }

    const searchTerm = searchInputRef.current?.value.toLowerCase() || "";
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredProducts(filtered);
  }

  function handleCategorySelect(cat) {
    onCategorySelect(cat);
    navigate("/Products/products");
  }

  return (
    <div className="product-parent">
      <h1>Products</h1>
      <div className="Product-nav">
        

        {/* Search input */}
        <input
        className="search-input"
          type="text"
          placeholder="Search products..."
          ref={searchInputRef}
          onChange={handleSearchChange}
          style={{ marginRight: "1rem", padding: "0.3rem" }}
        />

        {/* Category selector */}
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
