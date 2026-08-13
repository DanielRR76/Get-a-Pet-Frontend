import type { ComponentSizing } from "../../types";
import { getHeight, getWidth } from "../../utils/measure";
import type { FormFieldProps } from "../forms";
import styles from "./styles.module.css";
type InputProps = FormFieldProps<HTMLInputElement> & {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  multiple?: boolean;
  hidden?: boolean;
  ref?: React.Ref<HTMLInputElement>;
} & ComponentSizing;
export function Input({
  type = "text",
  label,
  name,
  placeholder,
  value,
  multiple,
  width,
  height,
  hidden,
  ref,
  onChange,
}: InputProps) {
  const isFileInput = type === "file";
  return (
    <div className={`${styles.input_container} flex_column`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        ref={ref}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        multiple={isFileInput ? multiple : undefined}
        style={{
          width: getWidth(width),
          height: getHeight(height),
          ...(hidden && { display: "none" }),
        }}
      />
    </div>
  );
}
