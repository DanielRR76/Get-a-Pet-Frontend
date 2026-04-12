import { Button } from "../Button";
import { Icon } from "../Icon/Icon";
import { Typography } from "../Typography";
import styles from "./styles.module.css";
export function Logo() {
  return (
    <div className={styles.logo}>
      <Button
        // size="large"
        icon={<Icon name="get-a-pet" size="huge" color="secondary" />}
        color="transparent"
        text={<Typography text="Get a Pet" variant="h2" size="large" />}
        border="none"
        radius="small"
      />
    </div>
  );
}
