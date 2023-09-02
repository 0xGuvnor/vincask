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
      className={`mx-auto flex w-full max-w-[1500px] flex-col gap-12 px-4 py-20 md:gap-16 md:px-12 md:py-32 2xl:px-0 ${classNames}`}
    >
      {children}
    </section>
  );
};
export default Container;
