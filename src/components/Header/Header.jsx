import { renderStaticText } from "../../locale";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { listCoins, toggleListView } from "../../redux/actions/Action";

export default function Header() {
  const dispatch = useDispatch();
  const isCardView = useSelector((state) => state.coinListReducer.isCardView);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{renderStaticText("title")}</h1>
      <div className={styles.buttons_container}>
        <Button
          variant="contained"
          onClick={(e) => {
            dispatch(listCoins());
          }}
        >
          Refresh
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            dispatch(toggleListView());
          }}
        >
          {isCardView ? "LIST" : "CARD"}
        </Button>
      </div>
    </div>
  );
}
