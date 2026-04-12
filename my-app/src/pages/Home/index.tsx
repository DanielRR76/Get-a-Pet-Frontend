import { PetGrid } from "../../components/PetGrid";
import { Typography } from "../../components/Typography";
import styles from "./styles.module.css";
export function Home() {
  return (
    <>
      <header className={styles.home_header}>
        <Typography
          size="xlarge"
          align="center"
          variant="h1"
          text="Adote um Pet"
        />
        <Typography
          size="medium"
          align="center"
          variant="p"
          text="Veja os detalhes de cada pet e conheça seus tutores."
        />
      </header>

      <PetGrid />
    </>
  );
}
