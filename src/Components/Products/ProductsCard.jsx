
export default function ProductCard({ product }) {
  return (
    <div className="product-container">
      <div className="products">
        <img src={product.image} alt={product.title} />
        <h3 className="product-title">{product.title}</h3>
        <h5>{product.category}</h5>
        <p className="product-description">{product.description.slice(0, 100)}...</p>
        <h4 className="product-price">${product.price}</h4>
        <div className="product-rating">
          <h5>⭐ {product.rating.rate}</h5>
          <h5>{product.rating.count} reviews</h5>
        </div>
      </div>
    </div>
  );
}
