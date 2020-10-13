import React from "react";
import { ProductConsumer } from "../../Context/Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../StyledComponents/Button";

const details = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { id, company, img, info, price, title, inCart } = value.details;
        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
                <img src={img} alt={title} className="img-fluid" />
              </div>
              <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
                <h3> model:{title}</h3>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by:{company}
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price: <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Some info about the product:
                </p>
                <p className="text-muted lead">{info}</p>
                <div>
                  <Link to="/">
                    <ButtonContainer>Back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    dispable={inCart}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "inCart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default details;
