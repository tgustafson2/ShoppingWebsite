import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import "./Navbar.css";

function Navbar({shoppingItems}) {
  const itemCount = shoppingItems.reduce((total, item)=>{
    return total + item.count;
  }, 0);
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/shopping">Shopping</Link>
      </ul>
      <Link to="/checkout">
        <div className="shoppingCart" value={itemCount}>
        <ShoppingCart />
        </div>
        
      </Link>
    </nav>
  );
}

export default Navbar;
