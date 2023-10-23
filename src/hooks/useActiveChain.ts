import { useEffect, useState } from "react";
import { useNetwork } from "wagmi";

const useActiveChain = () => {
  const { chain } = useNetwork();
  const [activeChain, setActiveChain] = useState("");

  useEffect(() => {
    if (chain) {
      setActiveChain(chain.name.toLowerCase());
    }
  }, [chain]);

  return activeChain;
};
export default useActiveChain;
