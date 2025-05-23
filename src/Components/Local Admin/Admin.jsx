import { useState } from "react";

export default function Admin() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },

  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rate" || name === "count") {
      setProduct((prev) => ({
        ...prev,
        rating: { ...prev.rating, [name]: value },
      }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const newProduct = {
    ...product,
    price: parseFloat(product.price),
    rating: {
      rate: parseFloat(product.rating.rate),
      count: parseInt(product.rating.count, 10),
    },
  };

  console.log("Submitting product:", newProduct);  // Log the product before sending

  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Response from API:", data);  // Log API response
      setMessage(`Product added with id: ${data.id}`);
      setProduct({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: { rate: "", count: "" },
      });
    })
    .catch((err) => {
      console.error("Failed to add product:", err);
      setMessage("Failed to add product");
    });
};

  return (
    <div className="admin-container">
      <h1 className="admin-title">Add New Product</h1>
      {message && <p className="admin-message">{message}</p>}
      <form className="admin-form" onSubmit={handleSubmit}>
        <label className="admin-label">
          Title:
          <input
            className="admin-input"
            name="title"
            type="text"
            value={product.title}
            onChange={handleChange}
            required
          />
        </label>

        <label className="admin-label">
          Price:
          <input
            className="admin-input"
            name="price"
            type="number"
            step="0.01"
            value={product.price}
            onChange={handleChange}
            required
          />
        </label>

        <label className="admin-label">
          Description:
          <textarea
            className="admin-textarea"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </label>

        <label className="admin-label">
          Category:
          <input
            className="admin-input"
            name="category"
            type="text"
            value={product.category}
            onChange={handleChange}
            required
          />
        </label>

        <label className="admin-label">
          Image URL:
          <input
            className="admin-input"
            name="image"
            type="text"
            value={product.image}
            onChange={handleChange}
            required
          />
        </label>

        <label className="admin-label">
          Rating Rate:
          <input
            className="admin-input"
            name="rate"
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={product.rating.rate}
            onChange={handleChange}
            required
          />
        </label>

        <label className="admin-label">
          Rating Count:
          <input
            className="admin-input"
            name="count"
            type="number"
            min="0"
            value={product.rating.count}
            onChange={handleChange}
            required
          />
        </label>

        

        <button className="admin-button" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}
