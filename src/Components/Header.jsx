
import React, { useEffect, useState } from "react";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false); // Add this!

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())  // call json()
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching Categories", err));
  }, []);

  function toggleDropdown() {
    setOpen((prev) => !prev);
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-title">
          <h2>React E-Commerce</h2>
        </div>
        <div className="navbar-links">
          <a href="">Products</a>

          {/* Use a single clickable span */}
          <div className="dropdown">
            <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
              Categories ⬇
            </span>

            {/* Show only if open */}
            {open && (
              <ul className="dropdown-menu">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a href={`/category/${cat}`}>{cat}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a href="">Contact Us</a>
          <a href="">Cart</a>
        </div>
      </nav>
    </header>
  );
}
