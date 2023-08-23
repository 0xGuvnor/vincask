import { SubmitHandler, useForm } from "react-hook-form";
import RedeemDialogInput from "./RedeemDialogInput";
import RedeemDialogSelect from "./RedeemDialogSelect";
import { Dispatch, SetStateAction, useState } from "react";
import { RedemptionType } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { addressVariant } from "@/utils/motionVariants";
import { supabase } from "@/lib/supabase";
import { useAccount } from "wagmi";
import { toast } from "react-hot-toast";
import ToastError from "../toasts/ToastError";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setIsLoading: (value: SetStateAction<boolean>) => void;
  isApproved: boolean | undefined;
  redeem: () => void;
  approve: (() => void) | undefined;
}

export interface IFormInput {
  name: string;
  email: string;
  phone: string;
  redemption_type: RedemptionType;
  address1: string;
  address2: string;
  postal_code: number;
}

const RedemptionForm = ({
  setOpen,
  setIsLoading,
  isApproved,
  redeem,
  approve,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [redemptionTypeState, setRedemptionTypeState] =
    useState<RedemptionType>("");
  const { address } = useAccount();

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    const { error } = await supabase
      .from("customers")
      .insert([{ ...formData, wallet_address: address as string }]);

    if (error) {
      console.error("Error inserting data:", error);
      toast.error((t) => <ToastError t={t} errorMessage={error.message} />);
      return;
    }
    setOpen(false);

    setIsLoading(true);

    if (isApproved) {
      redeem();
    } else {
      approve?.();
    }
  };

  return (
    <motion.form
      layout
      transition={{ duration: 0.25 }}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-14"
    >
      <div className="flex items-center justify-between gap-10">
        <RedeemDialogInput
          id="name"
          register={register}
          label="Name*"
          type="text"
          errors={errors}
          required
          layout={true}
        />
        <RedeemDialogInput
          id="email"
          register={register}
          label="Email*"
          type="email"
          errors={errors}
          required
          layout={true}
        />
      </div>

      <div className="flex items-center justify-between gap-10">
        <RedeemDialogSelect
          id="redemption_type"
          register={register}
          label="Redemption Type*"
          errors={errors}
          required
          redemptionTypeState={redemptionTypeState}
          setRedemptionTypeState={setRedemptionTypeState}
        />

        <RedeemDialogInput
          id="phone"
          register={register}
          label="Phone number"
          type="tel"
          minLength={8}
          maxLength={8}
          pattern={/^[0-9]+$/}
          errors={errors}
          errorMessage="Not a valid phone number!"
          layout={true}
        />
      </div>

      <AnimatePresence>
        {redemptionTypeState === "delivery" && (
          <>
            <RedeemDialogInput
              id="address1"
              register={register}
              label="Address line 1*"
              type="text"
              errors={errors}
              required={redemptionTypeState === "delivery" ? true : false}
              maxLength={50}
              variants={addressVariant}
            />

            <div className="flex items-center justify-between gap-10">
              <RedeemDialogInput
                id="address2"
                register={register}
                label="Address line 2"
                type="text"
                errors={errors}
                maxLength={50}
                variants={addressVariant}
              />

              <RedeemDialogInput
                id="postal_code"
                register={register}
                label="Postal code*"
                type="number"
                errors={errors}
                errorMessage="Invalid postal code"
                required={redemptionTypeState === "delivery" ? true : false}
                minLength={6}
                maxLength={6}
                variants={addressVariant}
              />
            </div>
          </>
        )}
      </AnimatePresence>

      <motion.input
        layout="position"
        transition={{ duration: 0.25 }}
        type="submit"
        className="self-end normal-case btn btn-primary"
      />
    </motion.form>
  );
};
export default RedemptionForm;
