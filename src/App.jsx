// src/App.jsx
import './index.css';
import { products } from './data/product';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="container">
      <h1 className="title">My Apple Product List</h1>
      <div className="product-container">
        {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          img={product.img}
          price={product.price}
          description={product.description}
          link={product.link} 
        />
        ))}
      </div>
    </div>
  );
}

export default App;