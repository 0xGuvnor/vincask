import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  classNames?: string;
}

const Container = ({ children, id, classNames }: Props) => {
  return (
    <div
      id={id}
      className={`flex flex-col gap-12 px-4 py-14 md:px-12 md:py-20 md:gap-16 2xl:px-0 max-w-[1500px] mx-auto ${classNames}`}
    >
      {children}
    </div>
  );
};
export default Container;
