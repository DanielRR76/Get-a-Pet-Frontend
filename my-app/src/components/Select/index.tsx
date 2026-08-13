import type { ComponentSizing } from "../../types";
import { getHeight, getWidth } from "../../utils/measure";
import type { FormFieldProps } from "../forms";
import styles from "./styles.module.css";
type SelectProps = FormFieldProps<HTMLSelectElement> & {
  options: string[];
} & ComponentSizing;
export function Select({
  label,
  name,
  options,
  value,
  width,
  height,
  onChange,
}: SelectProps) {
  return (
    <div
      className={`${styles.select_container} flex_column`}
      style={{ width: getWidth(width), height: getHeight(height) }}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <select id={name} name={name} value={value} onChange={onChange}>
        <option value={""}>Selecione uma opção</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
