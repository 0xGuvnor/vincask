import { useForm } from "react-hook-form";
import Container from "./Container";
import Link from "next/link";
import NewsletterInput from "./inputs/NewsletterInput";
import { useMediaQuery } from "react-responsive";

export interface INewsletterInput {
  email: string;
}

const Newsletter = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const {
    register,
    formState: { errors },
  } = useForm<INewsletterInput>();

  return (
    <Container classNames="md:flex-row justify-between items-center w-full !gap-10">
      <div className="w-full text-3xl md:text-5xl sm:w-auto">
        <h3>
          Want product news and updates? {!isMobile && <br />}Sign up for our
          newsletter.
        </h3>
      </div>

      <div className="relative flex-1 w-full">
        <form className="flex gap-4">
          <NewsletterInput
            label="Enter your email address"
            register={register}
            errors={errors}
            type="email"
            id="email"
          />

          <button
            type="submit"
            className="px-4 h-[38px] md:text-base text-sm md:!h-[42px] py-2 normal-case transition-colors duration-300 ease-in-out rounded btn btn-sm bg-primary hover:bg-primary-focus"
          >
            Subscribe
          </button>
        </form>

        <p className="absolute left-0 text-xs md:text-sm -bottom-7">
          We care about your data. Read our{" "}
          <Link
            href="/"
            className="underline transition-colors duration-300 ease-in-out cursor-pointer hover:text-blue-500 decoration-primary underline-offset-[3px]"
          >
            privacy policy.
          </Link>
        </p>
      </div>
    </Container>
  );
};
export default Newsletter;
