import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps { id: string; label?: string; type?: string; error?: FieldError; placeholder: string;}

const Input = forwardRef(
  (
    { id, label, type, error, ...register }: IInputProps, ref: React.LegacyRef<HTMLInputElement>
  ) => (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...register} ref={ref} />
      <span className="error-message">{error?.message}</span>
    </>
  )
);

export default Input;
