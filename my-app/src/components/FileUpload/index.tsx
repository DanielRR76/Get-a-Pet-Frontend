import { Button, type ButtonProps } from "../Button";
import { Input } from "../Input";
import { useRef } from "react";

type FileUploadProps = Omit<ButtonProps, "type" | "onClick">;

export function FileUpload({
  text,
  icon,
  iconPosition,
  width,
  height,
  color = "primary",
  radius = "none",
  border = "thin",
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onCLick = () => {
    inputRef.current?.click();
  };
  return (
    <>
      <Button
        text={text}
        icon={icon}
        width={width}
        height={height}
        radius={radius}
        color={color}
        border={border}
        iconPosition={iconPosition}
        onClick={onCLick}
      />
      <Input ref={inputRef} type="file" name="file-upload" hidden />
    </>
  );
}
