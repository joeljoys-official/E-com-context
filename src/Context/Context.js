import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    details: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.StoreProducts();
  }

  getItem = (id) => {
    const product = this.state.products.find((item) => {
      return item.id === id;
    });
    return product;
  };

  handleDetails = (id) => {
    const product = this.getItem(id);
    this.setState({ details: product });
  };
  StoreProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState({ products: tempProducts });
  };
  addToCartHandler = (id) => {
    let tempProducts = [...this.state.products];
    let index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      {
        products: tempProducts,
        cart: [...this.state.cart, product],
      },
      () => {
        this.addTotal();
      }
    );
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState({ modalProduct: product, modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState({ cart: [...tempCart] }, () => {
      this.addTotal();
    });
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState({ cart: [...tempCart] }, () => {
        this.addTotal();
      });
    }
  };

  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.StoreProducts();
      this.addTotal();
    });
  };

  addTotal = () => {
    let SubTotal = 0;
    this.state.cart.map((item) => (SubTotal += item.total));
    const tempTax = SubTotal * 0.18;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = SubTotal + tax;
    this.setState({ cartSubTotal: SubTotal, cartTax: tax, cartTotal: total });
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState({ cart: [...tempCart], products: tempProducts }, () =>
      this.addTotal()
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handledetails: this.handleDetails,
          addToCart: this.addToCartHandler,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
