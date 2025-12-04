export const initialState = {
  category: "all",
  search: "",
};

export function render(state, action) {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };

    default:
      state;
  }
}
