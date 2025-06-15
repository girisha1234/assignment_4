function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} className="product-img" />
      
      <div className="product-info">
        <h2 className="product-name">{props.name}</h2>
        <p className="price">₹{props.price}</p>
        <p className="desc">{props.description}</p>

        <a 
        href={props.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="buy-btn"
        >
        Buy Now
        </a>

      </div>
    </div>
  );
}

export default ProductCard;