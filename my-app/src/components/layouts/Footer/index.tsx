import styles from "./styles.module.css";
import { Typography } from "../../Typography";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <Typography size="medium" text="Get a Pet &copy; 2026" variant="h5" />
    </footer>
  );
}
