import { useSelector } from "react-redux";
import SingleCard from "../../../Card";
import styles from "./CardView.module.scss";

export default function CardView() {
  const { coins, firstItem, currentPage, limit } = useSelector((state) => ({
    coins: state.coinListReducer.coins || [],
    firstItem: state.coinListReducer?.pagination?.firstItem,
    currentPage: state.coinListReducer?.pagination?.currentPage,
    limit: state.coinListReducer?.pagination?.limit,
  }));

  return (
    <div className={styles.container}>
      {[...coins].slice(firstItem, currentPage * limit).map((coin, index) => {
        return (
          <SingleCard
            key={index}
            coinTitle={coin.name}
            coinPrice={coin.priceChange.price}
            volume24h={coin.priceChange.volume24h}
            marketCap={coin.marketCap}
            rank={coin.rank}
            id={coin.id}
          />
        );
      })}
    </div>
  );
}
