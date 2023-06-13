import { useForm } from "react-hook-form";
import Container from "./Container";
import Input from "./Input";
import Link from "next/link";

const Newsletter = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <Container classNames="md:flex-row justify-between items-center w-full">
      <div className="md:text-4xl">
        <h3>Want product news and updates?</h3>
        <h3>Sign up for our newsletter.</h3>
      </div>

      <div className="relative flex-1">
        <form className="flex gap-4">
          <Input
            label="Enter your email"
            register={register}
            errors={errors}
            type="email"
            id="subscribe"
          />
          {/* <input
            placeholder=" "
            className="peer bg-white/5 focus:outline-none"
          />
          <label>Enter your email</label> */}
          <button type="submit" className="px-4 py-2 rounded bg-secondary">
            Subscribe
          </button>
        </form>
        <p className="absolute left-0 text-xs md:text-sm -bottom-7">
          We care about your data. Read our{" "}
          <Link
            href="/"
            className="underline transition-colors duration-300 ease-in-out cursor-pointer hover:text-primary decoration-primary underline-offset-2"
          >
            privacy policy.
          </Link>
        </p>
      </div>
    </Container>
  );
};
export default Newsletter;
