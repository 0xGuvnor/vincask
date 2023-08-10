import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  classNames?: string;
}

const Container = ({ children, id, classNames }: Props) => {
  return (
    <section
      id={id}
      className={`flex flex-col gap-12 px-4 py-16 md:px-12 md:py-24 md:gap-16 2xl:px-0 max-w-[1500px] mx-auto w-full ${classNames}`}
    >
      {children}
    </section>
  );
};
export default Container;
