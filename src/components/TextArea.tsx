import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IFormInput } from "./ContactForm";

interface Props {
  id: keyof IFormInput;
  label: string;
  rows?: number;
  register: UseFormRegister<IFormInput>;
  required?: boolean;
  errors: FieldErrors<IFormInput>;
  errorMessage?: string;
}

const TextArea = ({
  id,
  label,
  rows = 4,
  register,
  required,
  errors,
  errorMessage = "This field is required",
}: Props) => {
  return (
    <div className="relative flex w-full flex-col gap-1">
      <textarea
        {...register(id, { required })}
        id={id}
        rows={rows}
        placeholder=" "
        className="peer w-full rounded border-b-2 border-primary bg-[#B2B09B] px-4 py-2 text-black focus-within:ring-1 focus-within:ring-primary focus:outline-none disabled:cursor-not-allowed md:text-lg"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-2 origin-bottom-left -translate-y-9 scale-75 transition duration-300 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-slate-700 peer-focus:-translate-y-9 peer-focus:!text-base-content md:text-lg"
      >
        {label}
      </label>
      {errors[id] && (
        <span className="absolute -bottom-[22px] left-0 ml-4 text-red-500 md:-bottom-[1.7rem] md:text-lg">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
export default TextArea;
