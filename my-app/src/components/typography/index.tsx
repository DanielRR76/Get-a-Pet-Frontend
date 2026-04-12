import type { AlignVariant } from "../../types/alignVariant";
import type { ColorVariant } from "../../types/colorVariant";
import type { SizeVariant } from "../../types/sizeVariant";
import styles from "./styles.module.css";

export interface TypographyProps {
  text: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  color?: ColorVariant;
  size?: SizeVariant;
  align?: AlignVariant;
}
export function Typography({
  text,
  variant = "p",
  color = "text",
  size = "medium",
  align = "left",
}: TypographyProps) {
  const Tag = variant;
  return (
    <Tag
      className={styles[size]}
      style={{ color: `var(--${color})`, textAlign: align }}
    >
      {text}
    </Tag>
  );
}
