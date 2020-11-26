import React from "react";
import { SET_AUTH } from "../../state/stores/AuthStore";
import { withStore } from "../../state/withStore";
import s from "./auth.module.scss";
let Auth = (props) => {
  const loginInput = React.useRef(null);
  const passInput = React.useRef(null);
  const [log, setlog] = React.useState(0);
  const handleSubmit = function (e) {
    e.preventDefault();
    let data = {
      auth: {
        login: loginInput.current.value,
        pass: passInput.current.value,
      },
    };
    if (data.auth.login === "superMan" && +data.auth.pass === 12345) {
      props.dispatch(SET_AUTH, data);
      setlog(true);
      props.closeModal();
    } else {
      setlog(false);
    }
  };
  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={log === false ? s.err : s.form}>
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
        <input ref={loginInput} required type="text" placeholder="login" />
        <input
          ref={passInput}
          required
          type="password"
          placeholder="password"
        />
        <button>login</button>
        <div className="">login: superMan</div>
        <div className="">pass: 12345</div>
      </form>
    </div>
  );
};
export default withStore("auth", (data) => data)(Auth);
