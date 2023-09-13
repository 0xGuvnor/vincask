import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type CountdownTimer = {
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
};

interface IGlobalContext {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  cachedSigHash: string;
  setCachedSigHash: Dispatch<SetStateAction<string>>;
  mintCountdownTimer: CountdownTimer;
}

const GlobalContext = createContext<IGlobalContext | null>(null);

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("Must be used within GlobalProvider");
  }
  return context;
};

const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [cachedSigHash, setCachedSigHash] = useState("");
  const mintCountdownTimer: CountdownTimer = {
    year: 2023,
    month: 10,
    date: 4,
    hour: 17,
    minute: 0,
  };

  const contextValue: IGlobalContext = {
    show,
    setShow,
    cachedSigHash,
    setCachedSigHash,
    mintCountdownTimer,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export { useGlobalContext, GlobalProvider };
