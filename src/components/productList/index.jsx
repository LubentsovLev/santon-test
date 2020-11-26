import React from "react";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../../state/stores/ProductsStore";
import { withStore } from "../../state/withStore";
import { Product } from "../product";
import Modal from "./PLModal/modal";
import "./product-list.scss";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }
  render() {
    const { products, dispatch } = this.props;
    const AddProduct = (data = products[0]) => {
      dispatch(ADD_PRODUCT, data);
    };
    const removeProduct = (id) => {
      dispatch(REMOVE_PRODUCT, id);
    };
    const closeModal = () => {
      this.setState({ modalShow: false });
    };
    return (
      <div className="product-list">
        {this.state.modalShow ? (
          <div className="product-list__modal">
            <div className="product-list__modal-container">
              <Modal AddProduct={AddProduct} closeModal={closeModal} />
            </div>
          </div>
        ) : null}
        <button
          className="product-list-btn"
          onClick={() => {
            this.setState({ modalShow: true });
          }}
        >
          Add new one
        </button>
        <div className="product-list__inner">
          {products.map((product) => (
            <Product
              removeProduct={removeProduct}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withStore("products", (data) => data)(ProductList);
