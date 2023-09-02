import Newsletter from "./Newsletter";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

const Footer = () => {
  const {
    data: { publicUrl: logoUrl },
  } = supabase.storage.from("images").getPublicUrl("logos/logo2.png");

  return (
    <motion.div
      layout
      transition={{
        duration: 0.25,
      }}
    >
      <Newsletter />

      <footer className="bg-base-100">
        <div className="mx-auto w-full max-w-[1500px] space-y-8 px-4 py-16 md:px-12 lg:space-y-16 2xl:px-0">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="relative left-0 top-0 h-[4.999rem] w-32 md:h-[8.35rem] md:w-[13.5rem]">
                <Image
                  src={logoUrl}
                  alt="Vincask logo"
                  quality={100}
                  priority
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>

              <ul className="mt-8 flex w-[13.5rem] items-center justify-between">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>

                    <FaFacebookF className="h-6 w-6" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>

                    <FaInstagram className="h-6 w-6" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <span className="sr-only">TikTok</span>

                    <FaTiktok className="h-6 w-6" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>

                    <FaTwitter className="h-6 w-6" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <span className="sr-only">Telegram</span>

                    <FaTelegramPlane className="h-6 w-6" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-white">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Company Review
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Accounts Review
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      HR Consulting
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Contact
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">Legal</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Accessibility
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Returns Policy
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Refund Policy
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Hiring Statistics
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-xs">
            &copy; {new Date().getFullYear()}. Vincask Pte Ltd. All rights
            reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};
export default Footer;
