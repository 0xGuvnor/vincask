import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IFormInput } from "./RedemptionForm";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { RedemptionType } from "@/types";
import { motion } from "framer-motion";

interface Props {
  id: keyof IFormInput;
  label: string;
  register: UseFormRegister<IFormInput>;
  errors: FieldErrors<IFormInput>;
  errorMessage?: string;
  required?: boolean;
  redemptionTypeState: RedemptionType;
  setRedemptionTypeState: Dispatch<SetStateAction<RedemptionType>>;
}

const RedeemDialogSelect = ({
  id,
  label,
  register,
  errors,
  errorMessage = "This field is required",
  required,
  redemptionTypeState,
  setRedemptionTypeState,
}: Props) => {
  return (
    <motion.fieldset layout className="relative flex w-full flex-col">
      <select
        id={id}
        autoComplete="off"
        {...register(id, { required })}
        value={redemptionTypeState}
        onChange={(e) =>
          setRedemptionTypeState(e.target.value as RedemptionType)
        }
        style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
        className="py-2x peer w-full rounded border-b-2 border-primary bg-[#B2B09B] px-4 text-sm text-black focus-within:ring-1 focus-within:ring-primary focus:outline-none disabled:cursor-not-allowed md:text-lg"
      >
        <option value="" disabled>
          Choose one
        </option>
        <option value="pickup">Self-pickup</option>
        <option value="delivery">Delivery</option>
      </select>

      <label
        htmlFor={id}
        className={`${
          redemptionTypeState !== "" && "scale-75"
        } absolute inset-y-2 left-4 w-full origin-bottom-left -translate-y-9 cursor-text text-sm transition duration-300 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-slate-700 peer-focus:-translate-y-9 peer-focus:text-base-content md:text-lg`}
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
export default RedeemDialogSelect;
