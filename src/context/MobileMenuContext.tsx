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
  cachedSigHash: string;
  setCachedSigHash: Dispatch<SetStateAction<string>>;
}

const MobileMenuContext = createContext<IMobileMenuContext>({
  show: false,
  setShow: () => {},
  cachedSigHash: "",
  setCachedSigHash: () => {},
});

const useMobileMenuContext = () => useContext(MobileMenuContext);

const MobileMenuProvider: FC<PropsWithChildren> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [cachedSigHash, setCachedSigHash] = useState("");

  const contextValue: IMobileMenuContext = {
    show,
    setShow,
    cachedSigHash,
    setCachedSigHash,
  };

  return (
    <MobileMenuContext.Provider value={contextValue}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export { useMobileMenuContext, MobileMenuProvider };
