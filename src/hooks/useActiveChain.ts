import { useEffect, useState } from "react";
import { useNetwork } from "wagmi";

const useActiveChain = () => {
  const { chain } = useNetwork();
  const [activeChain, setActiveChain] = useState("");

  useEffect(() => {
    if (chain) {
      setActiveChain(chain.network);
    }
  }, [chain]);

  return activeChain;
};
export default useActiveChain;
