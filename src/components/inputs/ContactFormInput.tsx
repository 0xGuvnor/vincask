import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IFormInput } from "../ContactForm";

interface Props {
  id: keyof IFormInput;
  label: string;
  type?: string;
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
    <div className="relative flex flex-col w-full gap-1">
      <input
        {...register(id, { required, minLength, maxLength })}
        id={id}
        type={type}
        placeholder=" "
        autoComplete="off"
        className="w-full px-4 py-2 md:text-base text-sm text-black border-b-2 rounded peer bg-[#B2B09B] focus:outline-none focus-within:ring-1 focus-within:ring-primary disabled:cursor-not-allowed border-primary"
      />
      <label
        htmlFor={id}
        className="absolute transition duration-300 md:text-base text-sm ease-in-out origin-bottom-left scale-75 peer-placeholder-shown:text-slate-700 peer-focus:!text-base-content -translate-y-8 peer-focus:-translate-y-8 md:-translate-y-9 left-4 top-2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:md:-translate-y-9 cursor-text"
      >
        {label}
      </label>
      {errors[id] && (
        <span className="absolute left-0 ml-4 text-sm text-red-500 md:-bottom-[26px] -bottom-[22px] md:text-base">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
export default ContactFormInput;
