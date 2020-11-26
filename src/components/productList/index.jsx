import React from "react";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../../state/stores/ProductsStore";
import { withStore } from "../../state/withStore";
import { Product } from "../product";
import Modal from "./PLModal/modal";
import "./product-list.scss";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      modalShow: false,
    };
  }
  // componentDidUpdate(prevProps) {
  //   if (this.props !== prevProps) {
  //     this.render();
  //   }
  // }

  render() {
    const { products, dispatch } = this.props;
    console.log(this.props.data);
    const AddProduct = (data = products[0]) => {
      dispatch(ADD_PRODUCT, data);
    };
    const removeProduct = (id) => {
      dispatch(REMOVE_PRODUCT, id);
    };
    const closeModal = () => {
      this.setState({ modalShow: false });
    };
    const openModal = () => {
      this.setState({ modalShow: true });
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
        <div
          
          onClick={() => {
            this.setState({ modalShow: true });
          }}
        >
          Add new one
        </div>
        {products.map((product) => (
          <Product
            removeProduct={removeProduct}
            key={product.id}
            product={product}
          />
        ))}
        <div
          onClick={() => {
            AddProduct();
          }}
        >
          Add More
        </div>
      </div>
    );
  }
}

export default withStore("products", (data) => data)(ProductList);
