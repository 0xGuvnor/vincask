import AgeVerificationModal from "@/components/AgeVerificationModal";
import { useEffect, useState } from "react";

const useAgeVerification = () => {
  const [ageVerified, setAgeVerified] = useState(true);

  const setAgeVerificationCookie = () => {
    document.cookie = "ageVerified=true; max-age=2592000; path=/"; // 30 days
  };

  const isAgeVerified = () => {
    return document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("ageVerified="));
  };

  const handleConfirm = () => {
    setAgeVerificationCookie();
    setAgeVerified(true);
  };

  useEffect(() => {
    if (!isAgeVerified()) {
      setAgeVerified(false);
    }
  }, []);

  return ageVerified ? null : (
    <AgeVerificationModal onConfirm={handleConfirm} />
  );
};
export default useAgeVerification;
