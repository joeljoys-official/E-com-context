import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Productlist from "./Components/Productlist/productlist";
import Details from "./Components/Product/details";
import Cart from "./Components/Cart/cart";
// import Pagenotfound from "./Components/PagenotFound/Pagenotfound";
import { Switch, Route, Redirect } from "react-router-dom";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Productlist} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Redirect to="/  " />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
