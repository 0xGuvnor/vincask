import { SubmitHandler, useForm } from "react-hook-form";
import Container from "./Container";
import Link from "next/link";
import NewsletterInput from "./inputs/NewsletterInput";
import { useMediaQuery } from "react-responsive";
import useIsMounted from "@/hooks/useIsMounted";
import ToastError from "./toasts/ToastError";
import toast from "react-hot-toast";
import axios from "axios";
import ToastSuccess from "./toasts/ToastSuccess";
import { useState } from "react";

export interface INewsletterInput {
  email: string;
}

const Newsletter = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useIsMounted();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<INewsletterInput>();

  const onSubmit: SubmitHandler<INewsletterInput> = async (formData) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/subscribe", formData);

      if (data) {
        const id = data[0].id;
        await axios.post("/api/subscribe-newsletter", { ...formData, id });
      }

      toast.success((t) => (
        <ToastSuccess t={t} message="Successfully subscribed to newsletter." />
      ));

      reset();
    } catch (error) {
      toast.error((t) => (
        <ToastError
          t={t}
          errorMessage="Something went wrong. Please try again."
        />
      ));
    } finally {
      setIsLoading(false);
    }
  };

  return isMounted ? (
    <div className="border-y-[0.5px] border-white/30">
      <Container classNames="md:flex-row justify-between items-center w-full !gap-10">
        <div className="w-full text-2xl sm:w-auto md:text-4xl">
          <h3 className="font-header">
            Want the latest product news and updates? {!isMobile && <br />}Sign
            up for our newsletter.
          </h3>
        </div>

        <div className="relative w-full flex-1 space-y-2 md:space-y-0">
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
            <NewsletterInput
              label="Enter your email address"
              register={register}
              errors={errors}
              type="email"
              id="email"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="hover:bg-primary-focus btn btn-sm h-[42px] rounded bg-primary px-4 py-2 normal-case text-primary-content transition-colors duration-300 ease-in-out md:!h-[46px] md:text-lg"
            >
              Subscribe
            </button>
          </form>

          <p className="-bottom-7 left-0 text-xs md:absolute md:text-sm">
            We care about your data. Read our{" "}
            <Link
              href="/privacy-policy"
              className="cursor-pointer underline decoration-primary underline-offset-[3px] transition-all duration-300 ease-in-out hover:text-white hover:decoration-2"
            >
              privacy policy
            </Link>
            .
          </p>
        </div>
      </Container>
    </div>
  ) : null;
};
export default Newsletter;
