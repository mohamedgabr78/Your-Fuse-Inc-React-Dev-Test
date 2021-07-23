const {
  COIN_LIST_REQUEST,
  COIN_LIST_SUCCESS,
  COIN_LIST_FAIL,
  LIST_VIEW,
  CARD_VIEW_LIMIT,
  NEXT_PAGE,
  PREV_PAGE,
} = require("../Constants");

export const coinListReducer = (
  state = { loading: false, coins: [] },
  action
) => {
  switch (action.type) {
    case COIN_LIST_REQUEST:
      return { loading: true };
    case COIN_LIST_SUCCESS:
      const currentPage = 1;
      const count = action.payload.length;
      return {
        loading: false,
        coins: action.payload,
        pagination: {
          count,
          currentPage,
          cardViewLimit: CARD_VIEW_LIMIT,
          pageCount: Math.ceil(count / CARD_VIEW_LIMIT),
          firstItem: 0,
        },
      };

    case COIN_LIST_FAIL:
      return { loading: false, error: action.payload };
    case NEXT_PAGE: {
      const currentPage = state.pagination.currentPage + 1;
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage,
          firstItem: state.pagination.firstItem + parseInt(CARD_VIEW_LIMIT),
        },
      };
    }
    case PREV_PAGE: {
      const currentPage = state.pagination.currentPage - 1;
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage,
          firstItem: state.pagination.firstItem - parseInt(CARD_VIEW_LIMIT),
        },
      };
    }
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
