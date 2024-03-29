import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";
import OrderDetail from "./Orders/OrderDetail";
import Payment from "./Payment/Payment";
import Fulfillment from "./Fulfillment/Fulfillment";

function App() {

  const openMenu = () => { 
    document.querySelector(".sidebar")?.classList.add("open"); 
  }
  
  const closeMenu = () => { 
    document.querySelector(".sidebar")?.classList.remove("open"); 
  }

  return (
    <Router>
    <div className= "grid=container" >
            <link rel="stylesheet" href="style.css" />
            <title>Explosive Memory</title>
           
            <body>
                <div>

                    <header className="header">
                        <div className="brand">
                                <button onClick={openMenu}>&#9776;</button>
                                <Link to="/">Explosive Memory</Link>
                        </div>
                        <div className="header-links">
                            <Link to="/">Home</Link>
                            <Link to="/catalog">Catalog</Link>
                            <Link to="/Orders">Orders</Link>
                            <Link to="/Payment">Payment</Link>
                            <Link to="/Fulfillment">Fulfillment</Link>
                        </div>
                    </header>

        
                    <aside className="sidebar">
                        <h3>Shopping Categories</h3>
                        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                        <ul>
                            <li>
                            <Link to="/">Pants</Link>
                            </li>

                            <li>
                            <Link to="/">Shirt</Link>
                            </li>
                        </ul>
                    </aside>


                <main className = "main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Products />} />
                        <Route path="/orders" element={<Orders />}></Route>
                        <Route path="/order/:id" element={<OrderDetail />}></Route>
                        <Route path="/Payment" element={<Payment />}></Route>
                        <Route path="/Fulfillment" element={<Fulfillment />}></Route>
                    </Routes>
                </main>
        <footer className="footer">
            &copy; 2023 Explosive Memory
        </footer>
        </div>
    </body>
    </div>
</Router>
);
}

export default App;
