import React from "react";
import CartItem from "./CartItem";

const CartList = (props) => {
  const { cart } = props.value;
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem key={props.id} item={item} value={props.value} />;
      })}
    </div>
  );
};

export default CartList;
