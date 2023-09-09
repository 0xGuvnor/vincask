import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IFormInput } from "../ContactForm";
import { HTMLInputTypeAttribute } from "react";

interface Props {
  id: keyof IFormInput;
  label: string;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegister<IFormInput>;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  errors: FieldErrors<IFormInput>;
  errorMessage?: string;
}

const ContactFormInput = ({
  id,
  label,
  type,
  register,
  required,
  minLength,
  maxLength,
  errors,
  errorMessage = "This field is required",
}: Props) => {
  return (
    <fieldset className="relative flex w-full flex-col gap-1">
      <input
        {...register(id, { required, minLength, maxLength })}
        id={id}
        type={type}
        placeholder=" "
        autoComplete="off"
        className="peer w-full rounded border-b-2 border-primary bg-[#B2B09B] px-4 py-2 text-black focus-within:ring-1 focus-within:ring-primary focus:outline-none disabled:cursor-not-allowed md:text-lg"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-2 origin-bottom-left -translate-y-8 scale-75 cursor-text transition duration-300 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-slate-700 peer-focus:-translate-y-8 peer-focus:!text-base-content md:-translate-y-9 md:text-lg peer-focus:md:-translate-y-9"
      >
        {label}
      </label>
      {errors[id] && (
        <span className="absolute -bottom-[22px] left-0 ml-4 text-red-500 md:-bottom-[1.7rem] md:text-lg">
          {errorMessage}
        </span>
      )}
    </fieldset>
  );
};
export default ContactFormInput;
