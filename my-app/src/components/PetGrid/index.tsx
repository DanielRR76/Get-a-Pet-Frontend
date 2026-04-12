import styles from "./styles.module.css";
import petTest from "../../assets/petTest3.jpg";
import { Typography } from "../Typography";
import { Button } from "../Button";
export const PetGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={petTest} alt="Pet Test" className={styles.image} />
        <Typography
          size="medium"
          align="center"
          variant="h2"
          text="Pequetita"
        />
        <Typography size="base" align="center" variant="p" text="Peso: 5kg" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            color="primary"
            width="8rem"
            height="2rem"
            radius="large"
            text={<Typography text="Detalhes" />}
          />
        </div>
      </div>
      <div className={styles.card}>
        <img src={petTest} alt="Pet Test" className={styles.image} />
        <Typography
          size="medium"
          align="center"
          variant="h2"
          text="Pequetita"
        />
        <Typography size="base" align="center" variant="p" text="Peso: 5kg" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            color="primary"
            width="8rem"
            height="2rem"
            radius="large"
            text={<Typography text="Detalhes" />}
          />
        </div>
      </div>
      <div className={styles.card}>
        <img src={petTest} alt="Pet Test" className={styles.image} />
        <Typography
          size="medium"
          align="center"
          variant="h2"
          text="Pequetita"
        />
        <Typography size="base" align="center" variant="p" text="Peso: 5kg" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            color="primary"
            width="8rem"
            height="2rem"
            radius="large"
            text={<Typography text="Detalhes" />}
          />
        </div>
      </div>
      <div className={styles.card}>
        <img src={petTest} alt="Pet Test" className={styles.image} />
        <Typography
          size="medium"
          align="center"
          variant="h2"
          text="Pequetita"
        />
        <Typography size="base" align="center" variant="p" text="Peso: 5kg" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            color="primary"
            width="8rem"
            height="2rem"
            radius="large"
            text={<Typography text="Detalhes" />}
          />
        </div>
      </div>
    </div>
  );
};
