import Container from "@/components/Container";
import Heading from "@/components/Heading";
import MobileOverlay from "@/components/MobileOverlay";
import { AdminDashboardComponent } from "@/components/AdminDashboard";
import ToastError from "@/components/toasts/ToastError";
import { Button } from "@/components/ui/button";
import { adminMessageToSign } from "@/constants/messageToSign";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAccount, useSignMessage } from "wagmi";

// Whitelist of authorized addresses
const AUTHORIZED_ADDRESSES = [
  "0xF303Ab4FBD1182ACE7B31E99eCd6A3e8Dc525B7E",
  // Add more addresses as needed
];

function Admin() {
  const router = useRouter();
  const { address } = useAccount();
  const [message, setMessage] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  const { signMessage } = useSignMessage({
    onSuccess: (signature) => verifyAdmin(signature),
  });

  const handleSignIn = () => {
    if (!address) return;

    const newMessage = adminMessageToSign(address, new Date());
    setMessage(newMessage);

    signMessage({ message: newMessage });
  };

  const verifyAdmin = async (signature: string) => {
    if (!address || !message) return;

    try {
      const { data } = await axios.post("/api/verify-admin", {
        address,
        message,
        signature,
      });

      setIsVerified(data.isAuthorized);
      router.push("?section=dashboard");
    } catch (error) {
      console.error("Error verifying address", error);
      toast.error((t) => (
        <ToastError t={t} errorMessage={"Error verifying address"} />
      ));
    }
  };

  return (
    <div>
      <Head>
        <title>Vincask - Admin Dashboard</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileOverlay />

      <Container>
        <Heading title="Admin Dashboard" />
        {/* 
        {isVerified === null && (
          <div>
            <Button
              size="lg"
              onClick={handleSignIn}
              className="text-xl font-semibold"
            >
              Sign In
            </Button>
          </div>
        )}

        {isVerified === true && <SalesDashboardComponent />}

        {isVerified === false && (
          <div>
            <p>You are not authorized to access the admin dashboard</p>
          </div>
        )} */}

        <AdminDashboardComponent />
      </Container>
    </div>
  );
}

export default Admin;
