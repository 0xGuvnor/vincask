import { useEffect, useState } from "react";

const useScroll = (scrollDistance: number = 0) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollDistance) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled, scrollDistance]);

  return isScrolled;
};
export default useScroll;
