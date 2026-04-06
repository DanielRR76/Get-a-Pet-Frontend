import { Logo } from "../../logo";
import { MenuOptions } from "../MenuOptions";
import styles from "./styles.module.css";
export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <MenuOptions />
    </nav>
  );
}
