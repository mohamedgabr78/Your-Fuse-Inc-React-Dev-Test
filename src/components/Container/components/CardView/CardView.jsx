import { useSelector } from "react-redux";
import SingleCard from "../../../Card";
import styles from "./CardView.module.scss";

export default function CardView() {
  const coins = useSelector((state) => state.coinListReducer.coins || []);
  console.log(coins);

  return (
    <div className={styles.container}>
      {coins.map((coin, index) => {
        console.log(coin);
        return (
          <SingleCard
            key={index}
            coinTitle={coin.name}
            coinPrice={coin.priceChange.price}
          />
        );
      })}
    </div>
  );
}
