import styles from "./SingleCard.module.scss";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { renderStaticText } from "../../locale";
import { formatPrice } from "../../utils";

export default function SingleCard(props) {
  const { coinTitle, coinPrice, marketCap, volume24h, rank, id } = props;

  const coinInfo = [
    {
      label: "coinPrice",
      value: `${formatPrice(coinPrice)} $`,
    },
    {
      label: "volume",
      value: volume24h,
    },
    {
      label: "marketRate",
      value: marketCap,
    },
    {
      label: "rank",
      value: rank,
    },
  ];

  return (
    <Card className={styles.card} variant="outlined">
      <h1>{coinTitle}</h1>
      <div className={styles.row}>
        <ul>
          {coinInfo.map((coin, index) => {
            return (
              <li key={index}>
                <span className={styles.label}>
                  {renderStaticText(coin.label)}
                </span>
                <span className={styles.value}>{coin.value}</span>
              </li>
            );
          })}
        </ul>
        <img
          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
        />
      </div>
    </Card>
  );
}
