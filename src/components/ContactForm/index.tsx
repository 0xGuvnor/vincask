import { SubmitHandler, useForm } from "react-hook-form";
import ContactFormInput from "../inputs/ContactFormInput";
import TextArea from "../TextArea";

export interface IFormInput {
  firstName: string;
  lastName: string;
  contactEmail: string;
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
      <div className="flex gap-8 md:gap-16 2xl:gap-32">
        <ContactFormInput
          id="firstName"
          label="First Name*"
          register={register}
          required
          errors={errors}
        />

        <ContactFormInput
          id="lastName"
          label="Last Name*"
          register={register}
          required
          errors={errors}
        />
      </div>
      <div className="flex gap-8 md:gap-16 2xl:gap-32">
        <ContactFormInput
          id="contactEmail"
          label="Email*"
          register={register}
          required
          type="email"
          errors={errors}
        />

        <ContactFormInput
          id="company"
          label="Company"
          register={register}
          errors={errors}
        />
      </div>
      <ContactFormInput
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
        className="btn self-end rounded bg-primary normal-case text-primary-content hover:bg-primary-focus md:rounded-md md:text-lg"
      >
        Submit
      </button>
    </form>
  );
};
export default ContactForm;
