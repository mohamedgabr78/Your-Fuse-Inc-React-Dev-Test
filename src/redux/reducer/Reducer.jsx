const {
  COIN_LIST_REQUEST,
  COIN_LIST_SUCCESS,
  COIN_LIST_FAIL,
  LIST_VIEW,
  CARD_VIEW_LIMIT,
  NEXT_PAGE,
  PREV_PAGE,
  LIST_VIEW_LIMIT,
} = require("../Constants");

export const coinListReducer = (
  state = { loading: false, coins: [], isCardView: true },
  action
) => {
  switch (action.type) {
    case COIN_LIST_REQUEST:
      return { loading: true, ...state };
    case COIN_LIST_SUCCESS:
      const currentPage = 1;
      const count = action.payload.length;
      const limit = state.isCardView ? CARD_VIEW_LIMIT : LIST_VIEW_LIMIT;

      return {
        ...state,
        loading: false,
        coins: action.payload,
        pagination: {
          count,
          currentPage,
          limit: limit,
          pageCount: Math.ceil(count / limit),
          firstItem: 0,
        },
      };

    case COIN_LIST_FAIL:
      return { loading: false, error: action.payload, ...state };
    case NEXT_PAGE: {
      const currentPage = state.pagination.currentPage + 1;
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage,
          firstItem:
            state.pagination.firstItem +
            parseInt(state.isCardView ? CARD_VIEW_LIMIT : LIST_VIEW_LIMIT),
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
          firstItem:
            state.pagination.firstItem -
            parseInt(state.isCardView ? CARD_VIEW_LIMIT : LIST_VIEW_LIMIT),
        },
      };
    }
    case LIST_VIEW: {
      const limit = !state.isCardView ? CARD_VIEW_LIMIT : LIST_VIEW_LIMIT;
      return {
        ...state,
        isCardView: !state.isCardView,
        pagination: {
          ...state.pagination,
          currentPage: 1,
          pageCount: Math.ceil(state?.pagination?.count / limit),
          firstItem: 0,
          limit: limit,
        },
      };
    }
    default:
      return state;
  }
};
