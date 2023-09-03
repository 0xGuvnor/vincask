import { SubmitHandler, useForm } from "react-hook-form";
import Container from "./Container";
import Link from "next/link";
import NewsletterInput from "./inputs/NewsletterInput";
import { useMediaQuery } from "react-responsive";
import useIsMounted from "@/hooks/useIsMounted";

export interface INewsletterInput {
  email: string;
}

const Newsletter = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isMounted = useIsMounted();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<INewsletterInput>();

  const onSubmit: SubmitHandler<INewsletterInput> = (data) => {
    console.log(data);
    reset();
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
              className="btn-sm btn h-[42px] rounded bg-primary px-4 py-2 normal-case text-primary-content transition-colors duration-300 ease-in-out hover:bg-primary-focus md:!h-[46px] md:text-lg"
            >
              Subscribe
            </button>
          </form>

          <p className="-bottom-7 left-0 text-xs md:absolute md:text-sm">
            We care about your data. Read our{" "}
            <Link
              href="/"
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
