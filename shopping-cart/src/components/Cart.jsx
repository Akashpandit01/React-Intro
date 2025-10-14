import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../fetures/cartSlice";


function Cart() {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "20px" }}>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <span>{item.name} - ₹{item.price}</span>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
