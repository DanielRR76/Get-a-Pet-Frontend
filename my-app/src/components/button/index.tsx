import { isValidElement } from "react";
import type { ColorVariant } from "../../types/colorVariant";
import { Icon, type IconProps } from "../Icon/Icon";
import styles from "./styles.module.css";
import { Typography, type TypographyProps } from "../Typography";

type IconPosition = "left" | "right";
interface ButtonProps {
  text?: React.ReactElement<TypographyProps>;
  icon?: React.ReactElement<IconProps>;
  iconPosition?: IconPosition;
  /** The only supported unit of measurement is `rem` */
  width?: string;
  /** The only supported unit of measurement is `rem` */
  height?: string;
  color?: ColorVariant;
  radius?: "none" | "small" | "medium" | "large" | "x-large" | "full";
  border?: "none" | "thin" | "thick";
  onClick?: () => void;
}

export function Button({
  text,
  icon,
  iconPosition = "left",
  width,
  height,
  color,
  radius = "none",
  border = "thin",
  onClick,
}: ButtonProps) {
  const isIconElement = isValidElement(icon) && icon.type === Icon;
  const isTextElement = isValidElement(text) && text.type === Typography;
  const isJustIcon = isIconElement && !isTextElement ? "iconOnly" : null;
  const getWidth = () => {
    if (width?.includes("rem")) return width;
    return "fit-content";
  };
  const getHeight = () => {
    if (height?.includes("rem")) return height;
    return "fit-content";
  };
  const getRadius = () => {
    switch (radius) {
      case "none":
        return "0";
      case "small":
        return "0.25rem";
      case "medium":
        return "0.5rem";
      case "large":
        return "0.75rem";
      case "x-large":
        return "1rem";
      case "full":
        return "100%";
      default:
        return "0";
    }
  };
  return (
    <button
      className={`${styles.button} ${styles[border]} ${styles[isJustIcon ?? iconPosition]}`}
      style={{
        width: getWidth(),
        height: getHeight(),
        backgroundColor: `var(--${color})`,
        borderRadius: getRadius(),
      }}
      onClick={onClick}
    >
      {isTextElement && text}
      {isIconElement && icon}
    </button>
  );
}
