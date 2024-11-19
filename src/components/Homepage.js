import React from 'react';
import {Link} from 'react-router-dom';
function Homepage() {
  return (
    <div className="container">
      <h1>Welcome to Our Cake Shop!</h1>
      <p>Discover our delicious cakes made with love and the finest ingredients.</p>
      <div className='btn'>
     <botton><Link to ="./CakeCategories">Explore Now</Link></botton> 
      </div>
      <section className="grid grid-3">
        <div>
          <img src=".\images\chocolatecake.jpeg" alt="Chocolate Cake" />
          <h3>Chocolate Cake</h3>
          <p>A rich, moist chocolate cake for chocolate lovers.</p>
    
        </div>
        {/* Additional cakes */}
      </section>
    </div>
  );
}
export default Homepage;