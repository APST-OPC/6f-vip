import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { btnClass, buttonValues } from "./utils";
import { Image } from "@/components/ui";

const FlippingNavIcon = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="perspective-1000 w-full">
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute w-full h-full flex items-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h1 className="text-2xl md:text-3xl gold-text tracking-tighter pr-0.5">
            6F.VIP
          </h1>
        </div>
        <div
          className="absolute w-full h-full flex items-center pr-0.5"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <h1 className="text-2xl md:text-3xl gold-text tracking-tighter flex items-center gap-2">
            6F.VIP
            <span translate="no" className="text-xl md:text-2xl">
              润豐國際
            </span>
          </h1>
        </div>
      </motion.div>
    </div>
  );
};
const NavButtons = () => {
  return (
    <div className="h-full w-full flex gap-1 md:gap-3 items-center justify-end">
      {buttonValues.map(({ label, icon, action }, index) => (
        <div key={index} role="button" className={btnClass} onClick={action}>
          <Image src={icon} size="md" alt="header-btn-event" />
          <p className=" text-black">{label}</p>
        </div>
      ))}
    </div>
  );
};
const LandingHeader = () => {
  return (
    <nav className="shadow-sm flex justify-between h-[8%] bg-white px-3 md:px-5">
      <FlippingNavIcon />
      <NavButtons />
    </nav>
  );
};

export { LandingHeader };
