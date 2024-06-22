import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <div className="logo">
        <h1>GO <span>FOOD</span></h1>
         <nav>
           <ul>
             <li><a href="#home">Home</a></li>
             <li><a href="#groceries">Groceries</a></li>
             <li><a href="#pages">Pages</a></li>
             <li><a href="#connect">Connect with Us</a></li>
             <li><a href="#searchicon"><i className="fas fa-search"></i></a></li>
             <li><a href="#carticon"><i className="fas fa-shopping-cart"></i></a></li>
             <li><a href="#hearticon"><i className="fas fa-heart"></i></a></li>
           </ul>
         </nav>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Discount up to 20%</h2>
            <h1>Buy Fresh And Organic Grocery Food</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit purus nec nibh tortor ipsum. Placerat consequat lorem.</p>
            <button className="btn">SHOP NOW</button>
            <div className="stats">
              <div>
                <span>35k +</span>
                <p>Users</p>
              </div>
              <div>
                <span>18k +</span>
                <p>Products</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
          <img src= "banner.jpg" alt="Food Image"/>
          </div>
        </section>
        <section className="categories">
          <h2>Shop by Category</h2>
          <h3>Top Category Of Organic Food</h3>
          <div className="categories-list">
            <button className="category-btn">FRUITS AND VEGETABLES</button>
            <button className="category-btn">BAKERY</button>
            <button className="category-btn">MEAT AND SEAFOOD</button>
            <button className="category-btn">BEVERAGE</button>
            <button className="category-btn">BISCUIT AND SNACKS</button>
          </div>
        </section>
        <section className="products">
          <div class="left-part">
           <div className="product">
            <img src="meatballs.jpg" alt="Product Image" />
            <h3>Italian-Style chicken Maetballs</h3>
            <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
            <div class="price-btn">
             <p>$8.45</p>
             <button>SHOP NOW</button>
            </div>
           </div>
           <div className="product">
            <img src="salmon.jpg" alt="Product Image" />
            <h3>Seafoods Stuffed Alaskan Salmon</h3>
            <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
            <div class="price-btn">
             <p>$8.45</p>
             <button>SHOP NOW</button>
            </div>
           </div>
           <div className="product">
            <img src="stew-meat.jpg" alt="Product Image" />
            <h3>Choice Angus Beef Stew Meat</h3>
            <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
            <div class="price-btn">
             <p>$8.45</p>
             <button>SHOP NOW</button>
            </div>
           </div>
          </div>
          <div class="right-part">
          <div className="product">
            <img src="meatballs.jpg" alt="Product Image" />
            <h3>Italian-Style chicken Maetballs</h3>
            <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
            <div class="price-btn">
             <p>$8.45</p>
             <button>SHOP NOW</button>
            </div>
           </div>
           <div className="product">
            <img src="buffalo-wings-.jpg" alt="Product Image" />
            <h3>Crispy Classic Buffalo Wings</h3>
            <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
            <div class="price-btn">
             <p>$8.45</p>
             <button>SHOP NOW</button>
            </div>
           </div>
           <div className="product">
            <img src="ground-beef.jpg" alt="Product Image" />
            <h3>Grass-fed 85_15 Ground Beef</h3>
            <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
            <div class="price-btn">
             <p>$8.45</p>
             <button>SHOP NOW</button>
            </div>
           </div>
           
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 GO FOOD. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
