import CardView from "./components/CardView/CardView";
import styles from "./Container.module.scss";

export default function Container() {
  return (
    <div className={styles.container}>
      <CardView />
    </div>
  );
}
