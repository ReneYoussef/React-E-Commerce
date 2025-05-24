import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Products from "./Components/Products/products";
import Admin from "./Components/Local Admin/Admin";
import Intro from "./Components/Home/Intro/Intro";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/Products/products"
          element={
            <Products
              category={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          }
        />

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
