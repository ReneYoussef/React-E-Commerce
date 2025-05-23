import { useState } from "react";
import Header from "./Components/Header"
import Products from "./Components/Products/products"

export default function App() {
 const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <Header onCategorySelect={setSelectedCategory} />
      <Products category={selectedCategory} />
    </>
  );
}

