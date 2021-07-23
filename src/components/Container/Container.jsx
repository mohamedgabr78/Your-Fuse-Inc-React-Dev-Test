import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCoins } from "../../redux/actions/Action";
import CardView from "./components/CardView";
import ListView from "./components/ListView";
import styles from "./Container.module.scss";

export default function Container() {
  const dispatch = useDispatch();
  const isCardView = useSelector((state) => state.coinListReducer.isCardView);

  useEffect(() => {
    dispatch(listCoins());
  }, []);
  return (
    <div className={styles.container}>
      {isCardView ? <CardView /> : <ListView />}
    </div>
  );
}
