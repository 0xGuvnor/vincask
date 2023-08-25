import { SubmitHandler, useForm } from "react-hook-form";
import RedeemDialogInput from "./RedeemDialogInput";
import RedeemDialogSelect from "./RedeemDialogSelect";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RedemptionType } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { addressVariant } from "@/utils/motionVariants";
import { supabase } from "@/lib/supabase";
import { useAccount, useSignMessage } from "wagmi";
import { toast } from "react-hot-toast";
import ToastError from "../toasts/ToastError";
import axios from "axios";
import { messageToSign } from "@/constants/messageToSign";
import { useMobileMenuContext } from "@/context/MobileMenuContext";

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
  postal_code: string;
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
  const { address } = useAccount();
  const { setCachedSigHash } = useMobileMenuContext();
  const datetime = new Date();
  const [cachedMessage, setCachedMessage] = useState("");
  const { data: sigHash, signMessage } = useSignMessage();
  const [redemptionTypeState, setRedemptionTypeState] =
    useState<RedemptionType>("");

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    try {
      // Verification to ensure only the person signing the message is allowed to
      // upload their details to the redemption form DB.

      // Supabase login credentials are returned by the API
      const {
        data: { email, password },
      } = await axios.post("/api/auth", {
        address,
        message: cachedMessage,
        signature: sigHash,
      });

      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        console.error(authError);
        toast.error((t) => (
          <ToastError t={t} errorMessage={authError?.message} />
        ));
        return;
      }

      const { error: insertError } = await supabase
        .from("customers")
        .insert([
          {
            ...formData,
            wallet_address: address as string,
            message_hash: sigHash as string,
          },
        ])
        .select();

      if (insertError) {
        console.error("Error inserting data:", insertError);
        toast.error((t) => (
          <ToastError t={t} errorMessage={insertError.message} />
        ));
        return;
      }
      setOpen(false);

      setIsLoading(true);

      if (isApproved) {
        redeem();
      } else {
        approve?.();
      }
    } catch (error) {
      toast.error((t) => (
        <ToastError t={t} errorMessage="Signature verification failed" />
      ));
    }
  };

  useEffect(() => {
    // sigHash is generated after user signs the message
    if (sigHash) {
      setCachedSigHash(sigHash);
      handleSubmit(onSubmit)();
    }
  }, [sigHash]);

  useEffect(() => {
    // Once there's a cached message, user is prompted to sign it
    if (cachedMessage) {
      signMessage({
        message: cachedMessage,
      });
    }
  }, [cachedMessage]);

  return (
    <motion.form
      layout
      transition={{ duration: 0.25 }}
      // onSubmit={handleSubmit(onSubmit)}
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
          pattern={/^[89]\d*$/}
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

      {/* <motion.input
        layout="position"
        transition={{ duration: 0.25 }}
        type="submit"
        className="self-end normal-case btn btn-primary"
      /> */}
      <motion.button
        layout="position"
        transition={{ duration: 0.25 }}
        type="button"
        onClick={() => {
          if (!sigHash) {
            setCachedMessage(messageToSign(address, datetime));
          } else {
            handleSubmit(onSubmit)();
          }
        }}
        className="self-end normal-case btn btn-primary"
      >
        Submit
      </motion.button>
    </motion.form>
  );
};
export default RedemptionForm;
