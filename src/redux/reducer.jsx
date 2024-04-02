const initialState = {
  dark: false,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK_MOOD":
      return state;
    default:
      return state;
  }
};
