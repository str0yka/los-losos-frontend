import React, { ComponentProps } from "react";

import s from "./Input.module.scss";

interface InputProps extends ComponentProps<"input"> {
  variant?: "default" | "phone";
  otherProps?: ComponentProps<"input">;
}

const Input: React.FC<InputProps> = ({
  variant = "default",
  ...otherProps
}) => {
  return (
    <label className={s.label}>
      {variant === "phone" ? (
        <>
          <span>+7 &nbsp;|&nbsp; </span>
          <input {...otherProps} className={s.input} />
        </>
      ) : (
        <input {...otherProps} className={s.input} />
      )}
    </label>
  );
};

export default Input;
