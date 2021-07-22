import styles from "./SingleCard.module.scss";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

export default function SingleCard(props) {
  const { coinTitle, coinPrice } = props;
  console.log("props =>>>>>>>>", props);
  return (
    <Card className={styles.card} variant="outlined">
      <CardContent>
        <span>{coinTitle}</span>
        <span>{coinPrice}</span>
      </CardContent>
      {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
  );
}
