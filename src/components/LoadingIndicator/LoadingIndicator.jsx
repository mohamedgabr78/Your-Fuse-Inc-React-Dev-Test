import { useSelector } from "react-redux";
import loadingIndicatorSVG from "../../assets/svg/loading-indicator.svg";
import styles from "./LoadingIndicator.module.scss";

export default function LoadingIndicator() {
  const loading = useSelector((state) => state.coinListReducer.loading);
  return (
    loading && (
      <div className={styles.container}>
        <img src={loadingIndicatorSVG} />
      </div>
    )
  );
}
