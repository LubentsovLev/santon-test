import React from "react";
import "./state/stores/ProductsStore";
import "./state/stores/AuthStore";
import "./index.scss";

import ProductList from "./components/productList";
import Auth from "./components/auth/auth";
import { SET_AUTH } from "./state/stores/AuthStore";
import { withStore } from "./state/withStore";

export class AppCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authShow: false,
    };
  }

  render() {
    const closeModal = () => {
      this.setState({ authShow: false });
    };
    const openModal = () => {
      this.setState({ authShow: true });
    };
    const logOut = () => {
      let data = {
        auth: {
          login: "",
          pass: "",
        },
      };
      this.props.dispatch(SET_AUTH, data);
    };

    return (
      <main>
        <Header logOut={logOut} openModal={openModal} />
        {this.state.authShow ? <Auth closeModal={closeModal} /> : null}
        <ProductList />
      </main>
    );
  }
}
let HeaderCom = (props) => {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__right">
          {props.auth.login ? (
            <h6 className="header__title">{props.auth.login}</h6>
          ) : null}
          {props.auth.login === "" ? (
            <div
              onClick={() => {
                props.openModal();
              }}
              className="header__auth header__auth_gr"
            >
              login
            </div>
          ) : (
            <div
              onClick={() => {
                props.logOut();
              }}
              className="header__auth header__auth_rd"
            >
              logOut
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const Header = withStore("auth", (data) => data)(HeaderCom);
export const App = withStore("auth", (data) => data)(AppCom);
