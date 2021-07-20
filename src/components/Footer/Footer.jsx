import styles from "./Footer.module.scss";
import { Pagination } from "./components";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Pagination />
    </footer>
  );
}
