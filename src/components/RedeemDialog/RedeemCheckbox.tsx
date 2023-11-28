import * as Checkbox from "@radix-ui/react-checkbox";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { HiCheck } from "react-icons/hi";
import { IFormInput } from "./RedemptionForm";

interface Props {
  label: string;
  id: keyof IFormInput;
  errors: FieldErrors<IFormInput>;
  required?: boolean;
  control: Control<IFormInput, any>;
}

const RedeemCheckbox = ({ label, id, errors, required, control }: Props) => {
  return (
    <Controller
      name={id}
      control={control}
      rules={{ required }}
      render={({ field }) => (
        <div className="relative flex items-center justify-start gap-1 md:gap-1.5">
          <Checkbox.Root
            id={id}
            checked={field.value as boolean}
            onCheckedChange={field.onChange}
            className="h-5 w-5 rounded bg-[#B2B09B] md:h-6 md:w-6"
          >
            <Checkbox.Indicator className="flex items-center justify-center">
              <HiCheck className="h-5 w-5 text-black md:h-6 md:w-6" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor={id} className="select-none text-xs md:text-sm">
            {label}
          </label>

          {errors[id] && (
            <span className="absolute -bottom-5 left-0 w-full text-xs text-red-500 md:-bottom-6 md:text-sm">
              This field is required
            </span>
          )}
        </div>
      )}
    />
  );
};
export default RedeemCheckbox;
