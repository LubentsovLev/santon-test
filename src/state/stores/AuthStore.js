import { Store } from "../common/store/store";
import { Registry } from "../common/store/registry";

export const SET_AUTH = "SET_AUTH";
export const REMOVE_AUTH = "REMOVE_AUTH";

const AuthStore = new Store("auth", {
  data: {
    login: "",
    password: "",
  },
  options: {
    shouldInitFromState: true,
    stateKey: "auth",
  },
  reducers: [
    {
      type: SET_AUTH,
      action(state, payload) {
        const login = [...state.auth, payload];

        return {
          ...state,
          login,
        };
      },
    },
    {
      type: REMOVE_AUTH,
      action(state, payload) {
        const loginRemove = [...state.auth, payload];

        return {
          ...state,
          loginRemove,
        };
      },
    },
  ],
});

Registry.addStore(AuthStore);

export { AuthStore };
