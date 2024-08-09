import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Navbar(shoppingItems) {
  console.log(shoppingItems);
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/shopping">Shopping</Link>
      </ul>
      <Link to="/checkout">
        <ShoppingCart className="shoppingCart" />
      </Link>
    </nav>
  );
}

export default Navbar;
