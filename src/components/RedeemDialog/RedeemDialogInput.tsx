import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";
import { IFormInput } from "./RedemptionForm";
import { HTMLInputTypeAttribute } from "react";
import { Variants, motion } from "framer-motion";

interface Props {
  id: keyof IFormInput;
  type?: HTMLInputTypeAttribute;
  label: string;
  register: UseFormRegister<IFormInput>;
  errors: FieldErrors<IFormInput>;
  errorMessage?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: ValidationRule<RegExp> | undefined;
  layout?: boolean | "position" | "size" | "preserve-aspect" | undefined;
  variants?: Variants;
}

const RedeemDialogInput = ({
  id,
  type,
  label,
  register,
  errors,
  errorMessage = "This field is required",
  required,
  minLength,
  maxLength,
  pattern,
  layout,
  variants,
}: Props) => {
  return (
    <motion.fieldset
      layout={layout}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="relative flex w-full flex-col"
    >
      <input
        id={id}
        type={type}
        autoComplete="off"
        placeholder=" "
        {...register(id, {
          required,
          minLength,
          maxLength,
          pattern,
        })}
        className="peer w-full rounded border-b-2 border-primary bg-[#B2B09B] px-4 py-2 text-sm text-black focus-within:ring-1 focus-within:ring-primary focus:outline-none disabled:cursor-not-allowed md:text-lg"
      />
      <label
        htmlFor={id}
        className="absolute inset-y-2 left-4 origin-left -translate-y-9 scale-75 cursor-text text-sm transition duration-300 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-slate-700 peer-focus:-translate-y-9 peer-focus:text-base-content md:text-lg"
      >
        {label}
      </label>
      {errors[id] && (
        <span className="absolute -bottom-5 left-0 w-full text-xs text-red-500 md:-bottom-6 md:text-sm">
          {errorMessage}
        </span>
      )}
    </motion.fieldset>
  );
};
export default RedeemDialogInput;
