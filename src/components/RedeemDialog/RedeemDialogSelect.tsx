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
  errorMessage = "This field is required!",
  required,
  redemptionTypeState,
  setRedemptionTypeState,
}: Props) => {
  return (
    <motion.fieldset layout className="relative flex flex-col w-full">
      <select
        id={id}
        autoComplete="off"
        {...register(id, { required })}
        value={redemptionTypeState}
        onChange={(e) =>
          setRedemptionTypeState(e.target.value as RedemptionType)
        }
        className="w-full px-4 py-2 md:text-lg text-black border-b-2 rounded peer bg-[#B2B09B] focus:outline-none focus-within:ring-1 focus-within:ring-primary disabled:cursor-not-allowed border-primary"
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
        } absolute transition duration-300 ease-in-out origin-bottom-left -translate-y-9 md:text-lg peer-placeholder-shown:text-slate-700 peer-focus:text-base-content peer-placeholder-shown:scale-100 inset-y-2 left-4 peer-placeholder-shown:translate-y-0 cursor-text peer-focus:-translate-y-9`}
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
export default RedeemDialogSelect;
