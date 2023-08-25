import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IGlobalContext {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  cachedSigHash: string;
  setCachedSigHash: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<IGlobalContext>({
  show: false,
  setShow: () => {},
  cachedSigHash: "",
  setCachedSigHash: () => {},
});

const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [cachedSigHash, setCachedSigHash] = useState("");

  const contextValue: IGlobalContext = {
    show,
    setShow,
    cachedSigHash,
    setCachedSigHash,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export { useGlobalContext, GlobalProvider };
