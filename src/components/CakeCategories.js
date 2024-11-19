import React from 'react';
import { useCart } from './CartContext';
function CakeCategories() {
 const product = [
  { 
    id: 1, 
    name: 'Vanilla Cake', 
    price: 270, 
    image: './images/vanillacake.jpeg' // Image URL or path
  },
  { 
    id: 2, 
    name: 'Chocolate Cake', 
    price: 190, 
    image: './images/Chocolatecake.jpeg' // Image URL or path
  },
  { 
    id: 3, 
    name: 'Coconut Cake', 
    price: 320, 
    image: './images/coconutcake.jpeg' // Image URL or path
  },
  { 
    id: 4, 
    name: 'Coffee Cake', 
    price: 170, 
    image: './images/Coffeecake.jpeg' // Image URL or path
  },
  { 
    id: 5, 
    name: 'Blackforest', 
    price: 210, 
    image: './images/Blackforest.jpeg' // Image URL or path
  },
  { 
    id: 6, 
    name: 'Christmas Plum Cake', 
    price: 120, 
    image: './images/Christmasplumcake.jpeg' // Image URL or path
  },
  { 
    id: 7, 
    name: 'Cotton Cheese Cake', 
    price: 100, 
    image: './images/Cottoncheesecake.jpeg' // Image URL or path
  },
  { 
    id: 8, 
    name: 'Cup Cake', 
    price: 40, 
    image: './images/Cupcake.jpeg' // Image URL or path
  },
  { 
    id: 9, 
    name: 'Fruit Cake', 
    price: 100, 
    image: './images/Fruitcake.jpeg' // Image URL or path
  },
  { 
    id: 10, 
    name: 'Brownie', 
    price: 60, 
    image: './images/Brownie.jpeg' // Image URL or path
  },
  { 
    id: 11, 
    name: 'Plane Cake', 
    price: 30, 
    image: './images/planecake.jpeg' // Image URL or path
  },
  { 
    id: 12, 
    name: 'Red-Velvet Cake', 
    price: 200, 
    image: './images/redvelvetcake.jpeg' // Image URL or path
  },
  
 ];
  
    const { addToCart } = useCart();
    return (
      <div className="product-list">
        <h2>Products</h2>
        <br></br>
        <div className="grid">
          {product.map((product) => (
            <div key={product.id} className="cake-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default CakeCategories;
 /* return (
    <>
    <section>
      <h2>Browse Cakes by Category</h2>
     {/* <ul>
        {categories.map((category) => (
         <li> {category}</li>
        ))}
      </ul>
      {/* Include filtering and sorting options 
   </section>
    <section  className="grid grid-3">
    <div key={product.id} className="cake-card">
      <img src="./images/chocolatecake.jpeg" alt="Chocolate Cake" />
      <h3>Chocolate Cake</h3>
      <p>A rich, moist chocolate cake for chocolate lovers.</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  
    <div key={product.id} className="cake-card">
      <img src="./images/blackforest.jpeg" alt="BlackForest Cake" />
      <h3>BlackForest Cake</h3>
      <p>A rich, moist chocolate cake for chocolate lovers.</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>

    <div key={product.id} className="cake-card">
      <img src="./images/brownie.jpeg" alt="Brownie" />
      <h3>Brownies</h3>
      <p>A rich, moist chocolate cake for chocolate lovers.</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>

    <div key={product.id} className="cake-card">
      <img src="./images/cottoncheesecake.jpeg" alt="Cheese Cake" />
      <h3>Cotton Cheese Cake</h3>
      <p>A rich, moist chocolate cake for chocolate lovers.</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>

    <div key={product.id} className="cake-card">
      <img src="./images/christmasplumcake.jpeg" alt="Plum Cake" />
      <h3>Plum Cake</h3>
      <p>A rich, moist chocolate cake for chocolate lovers.</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
 
    <div key={product.id} className="cake-card">
      <img src="./images/coconutcake.jpeg" alt="Coconut Cake" />
      <h3>coconutcake Cake</h3>
      <p>A rich, moist chocolate cake for chocolate lovers.</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  
    <div key={product.id} className="cake-card">
      <img src="./images/Coffee Cake.jpeg" alt="Coffee Cake" />
      <h3>Coffee Cake</h3>
      <p>A rich, moist chocolate cake for chocolate lovers.</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>

    <div key={product.id} className="cake-card">
      <img src="./images/christmasplumcake.jpeg" alt="Plum Cake" />
      <h3>Plum Cake</h3>
      <p>A rich, moist chocolate cake for chocolate lovers.</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
 
    <div key={product.id} className="cake-card">
      <img src="./images/coconutcake.jpeg" alt="Coconut Cake" />
      <h3>Coconut Cake</h3>
      <p>A rich, moist chocolate cake for chocolate lovers.</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
   
  </section>

   
  </>
  );*/



