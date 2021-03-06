import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../Context/Context";
import { ButtonContainer } from "../StyledComponents/Button";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal } = value;
        const { img, title, price } = value.modalProduct;

        if (!modalOpen) {
          return null;
        } else {
          return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className=" col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-2"
                  >
                    <h5>Item added to Cart</h5>
                    <img src={img} className="img-fluid p-0 m-0" alt={title} />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price:${price}</h5>
                    <Link to="/">
                      <ButtonContainer
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Store
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer
                        cart
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Go To Cart
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }}
    </ProductConsumer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  #modal {
    background: var(--mainWhite);
  }
`;

export default Modal;
