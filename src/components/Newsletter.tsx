import { useForm } from "react-hook-form";
import Container from "./Container";
import Link from "next/link";
import NewsletterInput from "./inputs/NewsletterInput";

export interface INewsletterInput {
  email: string;
}

const Newsletter = () => {
  const {
    register,
    formState: { errors },
  } = useForm<INewsletterInput>();

  return (
    <Container classNames="md:flex-row justify-between items-center w-full">
      <div className="md:text-4xl">
        <h3>Want product news and updates?</h3>
        <h3>Sign up for our newsletter.</h3>
      </div>

      <div className="relative flex-1">
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
            className="px-4 py-2 transition-colors duration-300 ease-in-out rounded bg-primary hover:bg-primary-focus"
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
