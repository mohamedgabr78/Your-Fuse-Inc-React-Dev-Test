import Axios from "axios";
import {
  COIN_LIST_FAIL,
  COIN_LIST_REQUEST,
  COIN_LIST_SUCCESS,
  LIST_VIEW,
} from "../Constants";

export const listCoins = () => async (dispatch) => {
  dispatch({
    type: COIN_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      "https://api.coinmarketcap.com/data-api/v3/topsearch/rank"
    );
    if (
      !data?.data?.cryptoTopSearchRanks?.length ||
      data?.data?.cryptoTopSearchRanks?.length === 0
    )
      throw "data is missing from api";

    dispatch({
      type: COIN_LIST_SUCCESS,
      payload: data.data.cryptoTopSearchRanks,
    });
  } catch (error) {
    dispatch({ type: COIN_LIST_FAIL, payload: error.message });
  }
};

export const toggleListView = () => async (dispatch) => {
  dispatch({
    type: LIST_VIEW,
  });
};
