import footerStyles from "./Footer.module.scss";
import { Pagination } from "./components";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <Pagination />
    </footer>
  );
}
