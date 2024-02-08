// STATE
const initialState = {
  isLogin: JSON.parse(localStorage.getItem("isLogin")),
};

// REDUCER
export const reducerAuth = (state = initialState, actions) => {
  switch (actions.type) {
    case "LOGIN":
      return {
        isLogin: actions.value,
      };

    case "LOGOUT":
      return {
        isLogin: actions.value,
      };

    default:
      return state;
  }
};

// ACTIONS
export const handleLogin = () => {
  return {
    type: "LOGIN",
    value: true,
  };
};

export const handleLogout = (payload) => {
  return {
    type: "LOGOUT",
    value: payload,
  };
};
