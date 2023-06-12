import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input";
import TextArea from "../TextArea";

export interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phoneNumber: number;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 md:gap-10"
    >
      <div className="flex gap-8 md:gap-16">
        <Input
          id="firstName"
          label="First Name*"
          register={register}
          required
          errors={errors}
        />

        <Input
          id="lastName"
          label="Last Name*"
          register={register}
          required
          errors={errors}
        />
      </div>
      <div className="flex gap-8 md:gap-16">
        <Input
          id="email"
          label="Email*"
          register={register}
          required
          type="email"
          errors={errors}
        />

        <Input
          id="company"
          label="Company"
          register={register}
          errors={errors}
        />
      </div>
      <Input
        id="phoneNumber"
        label="Phone Number"
        register={register}
        errors={errors}
        minLength={8}
        maxLength={8}
        errorMessage="Invalid phone number"
      />
      <TextArea
        id="message"
        label="Message*"
        register={register}
        required
        errors={errors}
      />

      <button
        type="submit"
        className="self-end text-white normal-case rounded btn btn-sm md:btn-md bg-primary md:rounded-md md:text-lg hover:bg-primary-focus"
      >
        Submit
      </button>
    </form>
  );
};
export default ContactForm;
