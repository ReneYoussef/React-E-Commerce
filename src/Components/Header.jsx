import { useEffect, useState } from "react";

export default function Header({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
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

          <div className="dropdown">
            <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
              Categories ⬇
            </span>

            {open && (
              <div className="dropdown-menu">
                <button
                  className="category-button"
                  onClick={() => onCategorySelect("all")}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => onCategorySelect(cat)}
                    className="category-button"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="">Contact Us</a>
          <a href="">Cart</a>
        </div>
      </nav>
    </header>
  );
}
