import { cloneElement, isValidElement } from "react";
import type {
  AlignVariant,
  BorderThickness,
  ColorVariant,
  ComponentSizing,
  RadiusVariant,
} from "../../types";
import { Icon, type IconProps } from "../Icon/Icon";
import styles from "./styles.module.css";
import { Typography, type TypographyElement } from "../Typography";
import { RADIUS_SIZE } from "../../constants";
import { getHeight, getWidth } from "../../utils/measure";

export type ButtonColor = Exclude<
  ColorVariant,
  "secondary" | "dark" | "success"
>;

export type ButtonProps = {
  text?: TypographyElement;
  icon?: React.ReactElement<IconProps>;
  iconPosition?: Exclude<AlignVariant, "center">;
  color?: ButtonColor;
  radius?: RadiusVariant;
  border?: BorderThickness;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
} & ComponentSizing;

export function Button({
  text,
  icon,
  iconPosition = "left",
  width,
  height,
  color = "primary",
  radius = "none",
  border = "thin",
  type = "button",
  onClick,
}: ButtonProps) {
  const isIconElement = isValidElement(icon) && icon.type === Icon;
  const isTextElement = isValidElement(text) && text.type === Typography;
  const isJustIcon = isIconElement && !isTextElement ? "iconOnly" : null;
  if (!isTextElement && !isIconElement) {
    console.warn(
      "Button component requires at least one of the following props: 'text' or 'icon'.",
    );
    return;
  }
  return (
    <button
      type={type}
      className={`flex_align_center ${styles.button} ${styles[color]} ${border} ${styles[isJustIcon ?? iconPosition]}`}
      style={{
        width: getWidth(width),
        height: getHeight(height),
        borderRadius: RADIUS_SIZE[radius],
      }}
      onClick={onClick}
    >
      {isTextElement && cloneElement(text, { color: "inherit" })}
      {isIconElement && icon}
    </button>
  );
}
