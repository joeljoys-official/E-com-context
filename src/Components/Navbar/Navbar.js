import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/logo.png";
import { ButtonContainer } from "../StyledComponents/Button";
import { NavWrapper } from "../StyledComponents/Navbar";

class Navbar extends Component {
  render() {
    return (
      <div>
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
          <Link to="/">
            <img
              className="navbar-brand px-sm-0  "
              src={Logo}
              style={{
                height: "40px",
                objectFit: "contain",
                padding: "0",
                margin: "0",
              }}
              alt="Coders Pad"
            />
          </Link>
          <ul className="navbar-nav align-items-center ">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                products
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <i className="fas fa-cart-plus" />
              My cart
            </ButtonContainer>
          </Link>
        </NavWrapper>
      </div>
    );
  }
}

export default Navbar;
