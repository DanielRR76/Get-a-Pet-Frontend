import { Button } from "../button";
import { Icon } from "../icon/Icon";
import { Typography } from "../typography";
import styles from "./styles.module.css";
export function Logo() {
  return (
    <div className={styles.logo}>
      <Button
        icon={<Icon name="get-a-pet" size="huge" color="secondary" />}
        color="transparent"
        text={<Typography text="Get a Pet" variant="h2" size="large" />}
      />
    </div>
  );
}
