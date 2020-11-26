import React from "react";
import s from "./modal.module.scss";
let Modal = (props) => {
  const idInput = React.useRef(null);
  const titleInput = React.useRef(null);
  const descriptionInput = React.useRef(null);
  const priceInput = React.useRef(null);

  const deleteItem = () => {
    let inst = {
      id: idInput.current.value,
      title: titleInput.current.value,
      description: descriptionInput.current.value,
      price: priceInput.current.value,
    };
    props.AddProduct(inst);
    props.closeModal(inst);
  };
  return (
    <div className={s.address}>
      <div
        className={s.x}
        onClick={() => {
          props.closeModal();
        }}
      >
        <img
          src="https://www.pngkey.com/png/full/515-5150375_open-multiply-icon.png"
          alt=""
        />
      </div>
      <input ref={idInput} name="id" placeholder="id" required></input>
      <input ref={titleInput} name="title" placeholder="title" required></input>

      <input
        ref={descriptionInput}
        name="description"
        placeholder="description"
        required
      ></input>
      <input ref={priceInput} name="price" placeholder="price" required></input>
      <button
        onClick={() => {
          deleteItem();
        }}
      >
        Add card
      </button>
    </div>
  );
};

export default Modal;
