import styles from "./styles.module.css";
interface FormProps {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
}

export interface FormFieldProps<T extends HTMLElement> {
  label?: string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<T>) => void;
}
export function Form({ onSubmit, children }: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`${styles.form_container} flex_align_center`}
    >
      {children}
    </form>
  );
}
