import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IMobileMenuContext {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const MobileMenuContext = createContext<IMobileMenuContext>({
  show: false,
  setShow: () => {},
});

const useMobileMenuContext = () => useContext(MobileMenuContext);

const MobileMenuProvider: FC<PropsWithChildren> = ({ children }) => {
  const [show, setShow] = useState(false);

  const contextValue: IMobileMenuContext = { show, setShow };

  return (
    <MobileMenuContext.Provider value={contextValue}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export { useMobileMenuContext, MobileMenuProvider };
