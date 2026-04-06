import { isValidElement } from "react";
import type { ColorVariant } from "../../types/colorVariant";
import { Icon, type IconProps } from "../icon/Icon";
import styles from "./styles.module.css";
import type { SizeVariant } from "../../types/sizeVariant";
import { Typography, type TypographyProps } from "../typography";

type IconPosition = "left" | "right";
interface ButtonProps {
  text?: React.ReactElement<TypographyProps>;
  icon?: React.ReactElement<IconProps>;
  iconPosition?: IconPosition;
  size?: SizeVariant;
  color?: ColorVariant;
}

export function Button({
  text,
  icon,
  iconPosition = "left",
  size,
  color,
}: ButtonProps) {
  const isIconElement = isValidElement(icon) && icon.type === Icon;
  const isTextElement = isValidElement(text) && text.type === Typography;
  return (
    <button
      className={`${styles.button} ${styles[iconPosition]}`}
      style={{ width: size, backgroundColor: `var(--${color})` }}
    >
      {isTextElement && text}
      {isIconElement && icon}
    </button>
  );
}
