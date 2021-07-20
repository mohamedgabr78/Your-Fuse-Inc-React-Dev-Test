const {
  COIN_LIST_REQUEST,
  COIN_LIST_SUCCESS,
  COIN_LIST_FAIL,
} = require("../Constants");

export const coinListReducer = (
  state = { loading: true, coins: [] },
  action
) => {
  switch (action.type) {
    case COIN_LIST_REQUEST:
      return { loading: true };
    case COIN_LIST_SUCCESS:
      return { loading: false, coins: action.payload.cryptoTopSearchRanks };

    case COIN_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};