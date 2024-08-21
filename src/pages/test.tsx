import { useAnimate, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Test = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scope, animate] = useAnimate();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    if (imageLoaded) {
      animate("#test", { opacity: 1 }, { delay: 0.5 });
      animate(".test2", { opacity: 1 }, { delay: 1.5 });
      animate(".test3", { opacity: 1 }, { delay: 2.5 });
    }
  }, [imageLoaded, animate, scope]);

  return (
    <div className="flex items-center justify-center">
      <Image
        src="https://cyvqrxhvvlfwbqcqfzjq.supabase.co/storage/v1/object/public/images/hero-whisky.png"
        onLoad={handleImageLoad}
        alt="Landing Page"
        height={1000}
        width={400}
        // style={{ visibility: imageLoaded ? "visible" : "hidden" }} // optionally hide image until loaded
      />
      <motion.div ref={scope} className="flex flex-col items-start">
        <motion.h1 id="test" className="test1" initial={{ opacity: 0 }}>
          Your Landing Page Heading
        </motion.h1>
        <motion.h2 className="test2" initial={{ opacity: 0 }}>
          Your Subheading Text
        </motion.h2>
        <motion.button className="test3" initial={{ opacity: 0 }}>
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};
export default Test;
