import { Button } from "../../button";
import styles from "./styles.module.css";
import { Icon } from "../../icon/Icon";
export function MenuOptions() {
  return (
    <div className={styles.menu}>
      <Button
        icon={<Icon name="moon" size="xlarge" color="secondary" />}
        color="transparent"
      />
      <Button
        icon={<Icon name="login" size="xlarge" color="secondary" />}
        color="transparent"
      />
    </div>
  );
}
