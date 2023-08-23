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
  errorMessage = "This field is required!",
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
      className="relative flex flex-col w-full"
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
        className="w-full px-4 py-2 md:text-lg text-black border-b-2 rounded peer bg-[#B2B09B] focus:outline-none focus-within:ring-1 focus-within:ring-primary disabled:cursor-not-allowed border-primary"
      />
      <label
        htmlFor={id}
        className="absolute transition duration-300 ease-in-out origin-left scale-75 -translate-y-9 md:text-lg peer-placeholder-shown:text-slate-700 peer-focus:text-base-content peer-placeholder-shown:scale-100 inset-y-2 left-4 peer-placeholder-shown:translate-y-0 cursor-text peer-focus:-translate-y-9"
      >
        {label}
      </label>
      {errors[id] && (
        <span className="absolute text-xs text-red-500 left-4 -bottom-5 md:-bottom-6 md:text-sm">
          {errorMessage}
        </span>
      )}
    </motion.fieldset>
  );
};
export default RedeemDialogInput;
