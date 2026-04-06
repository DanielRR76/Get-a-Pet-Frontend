import styles from "./styles.module.css";
import { Typography } from "../../typography";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <Typography text="Get a Pet &copy; 2026" variant="h5" />
    </footer>
  );
}
