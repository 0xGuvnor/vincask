import { SubmitHandler, useForm } from "react-hook-form";
import RedeemDialogInput from "./RedeemDialogInput";
import RedeemDialogSelect from "./RedeemDialogSelect";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RedemptionType } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useAccount, useSignMessage } from "wagmi";
import { toast } from "react-hot-toast";
import ToastError from "../toasts/ToastError";
import axios from "axios";
import { messageToSign } from "@/constants/messageToSign";
import { useGlobalContext } from "@/context/GlobalContext";
import { addressVariants } from "@/utils/motionVariants";
import RedeemCheckbox from "./RedeemCheckbox";

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
  isOver18: boolean;
  agreedToTandC: boolean;
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
    control,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      isOver18: false,
      agreedToTandC: false,
      address1: "",
      address2: "",
      email: "",
      name: "",
      phone: "",
      postal_code: "",
      redemption_type: "",
    },
  });
  const { address } = useAccount();
  const { setCachedSigHash } = useGlobalContext();
  const datetime = new Date();
  const [cachedMessage, setCachedMessage] = useState("");
  const [formIsLoading, setFormIsLoading] = useState(false);
  const { data: sigHash, signMessage } = useSignMessage();
  const [redemptionTypeState, setRedemptionTypeState] =
    useState<RedemptionType>("");

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    try {
      setFormIsLoading(true);

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
    } finally {
      setFormIsLoading(false);
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
      <div className="flex items-center justify-between gap-5 md:gap-10">
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

      <div className="flex items-center justify-between gap-5 md:gap-10">
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
          errorMessage="Invalid phone number"
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
              variants={addressVariants}
            />

            <div className="flex items-center justify-between gap-5 md:gap-10">
              <RedeemDialogInput
                id="address2"
                register={register}
                label="Address line 2"
                type="text"
                errors={errors}
                maxLength={50}
                variants={addressVariants}
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
                variants={addressVariants}
              />
            </div>
          </>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-x-10 gap-y-4 md:flex-row">
        <RedeemCheckbox
          id="isOver18"
          label="I am over 18 years old*"
          required
          errors={errors}
          control={control}
        />
        <RedeemCheckbox
          id="agreedToTandC"
          label="I agree to the redemption terms and conditions*"
          required
          errors={errors}
          control={control}
        />
      </div>

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
        disabled={formIsLoading}
        onClick={() => {
          if (!sigHash) {
            setCachedMessage(messageToSign(address, datetime));
          } else {
            handleSubmit(onSubmit)();
          }
        }}
        className="btn-primary btn self-end normal-case"
      >
        Submit
      </motion.button>
    </motion.form>
  );
};
export default RedemptionForm;
