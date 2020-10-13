import React from "react";
import Title from "../Productlist/title";
import CartColums from "./innerComponents/CartColums";
import EmptyCart from "./innerComponents/EmptyCart";
import { ProductConsumer } from "../../Context/Context";
import CartList from "./innerComponents/CartList";
import CartTotals from "./innerComponents/CartTotals";
const cart = (props) => {
  return (
    <section>
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <Title name="your" title="cart" />
                <CartColums />
                <CartList value={value} />
                <CartTotals value={value} history={props.history} />
              </React.Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
};

export default cart;
