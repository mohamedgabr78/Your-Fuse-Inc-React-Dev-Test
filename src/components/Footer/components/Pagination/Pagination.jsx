import styles from "../../Footer.module.scss";
import { default as MUIPagination } from "@material-ui/lab/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getNextPage, getPrevPage } from "../../../../redux/actions/Action";

export default function Pagination() {
  const dispatch = useDispatch();
  const { pageCount, currentPage } = useSelector((state) => ({
    pageCount: state.coinListReducer?.pagination?.pageCount || null,
    currentPage: state.coinListReducer?.pagination?.currentPage,
  }));

  const handlePage = (event, value) => {
    if (currentPage < value) {
      dispatch(getNextPage());
      return;
    }
    dispatch(getPrevPage());
  };

  return (
    pageCount && (
      <div>
        <MUIPagination count={pageCount} onChange={handlePage} />
      </div>
    )
  );
}
