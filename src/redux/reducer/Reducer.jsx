const {
  COIN_LIST_REQUEST,
  COIN_LIST_SUCCESS,
  COIN_LIST_FAIL,
  LIST_VIEW,
} = require("../Constants");

export const coinListReducer = (
  state = { loading: false, coins: [] },
  action
) => {
  switch (action.type) {
    case COIN_LIST_REQUEST:
      return { loading: true };
    case COIN_LIST_SUCCESS:
      return { loading: false, coins: action.payload };

    case COIN_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const toggleListReducer = (state = { isCardView: true }, action) => {
  switch (action.type) {
    case LIST_VIEW:
      return { isCardView: !state.isCardView };
    default:
      return state;
  }
};
