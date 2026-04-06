import type { ColorVariant } from "../../types/colorVariant";
import type { SizeVariant } from "../../types/sizeVariant";
import { mappedIcons } from "./mappedIcons";
import styles from "./styles.module.css";
export interface IconProps {
  name: string;
  size?: SizeVariant;
  color?: ColorVariant;
}
export function Icon({ name, size = "medium", color }: IconProps) {
  const icon = mappedIcons.find((icon) => icon.name === name);
  if (!icon) return null;
  return (
    <div className={styles[size]} style={{ color: `var(--${color})` }}>
      {icon.svg}
    </div>
  );
}
