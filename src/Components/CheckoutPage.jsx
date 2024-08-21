import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function CheckoutPage() {
  const { cartItems, removeFromCart } = useOutletContext();

  if (cartItems.length === 0) {
    return (
      <>
        <div>No Items in cart</div>
      </>
    );
  }
  return (
    <>
      {cartItems.map((item)=>{
        return(<div className="checkout-item-card">
            <img src={item.imageUrl} />
            <div className="checkout item-title">{item.title}</div>
            <div className="checkout item-amount">{item.count}</div>
            <div className="checkout item-total-cost">{item.count*item.price}</div>
            <button onClick={(e)=>{
                e.preventDefault();
                removeFromCart(item.id);
            }}>Remove From Cart</button>
        </div>)
      })}
      <button>Checkout</button>
    </>
  );
}

export default CheckoutPage;
