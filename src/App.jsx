import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Products from "./Components/Products/products";
import Admin from "./Components/Local Admin/Admin"; 

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <Router>
      <Header onCategorySelect={setSelectedCategory} />
      <Routes>
        <Route
          path="/"
          element={<Products category={selectedCategory} />}
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
