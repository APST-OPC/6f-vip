import { useState, useEffect } from "react";
import { motion } from "motion/react";
import EventIcon from "@/assets/svg/ic_svg_event.svg";
import ChatIcon from "@/assets/svg/ic_svg_chat.svg";
import { cn } from "@/lib/utils";

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
        transition={{ duration: 0.6 }}
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute w-full h-full flex items-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h1 className="text-2xl md:text-3xl gold-text tracking-tighter px-2 ">
            6F.VIP
          </h1>
        </div>
        <div
          className="absolute w-full h-full flex items-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <h1 className="text-2xl md:text-3xl gold-text tracking-tighter px-2 flex items-center gap-2">
            6F.VIP <span className="text-xl md:text-2xl">润豐國際</span>
          </h1>
        </div>
      </motion.div>
    </div>
  );
};
const LandingHeader = () => {
  const btnClass = () =>
    cn(
      "flex items-center gap-2 w-fit transform-all duration-200",
      "py-1 px-2 md:px-4",
      "bg-[#E2E8F0] hover:bg-[#E2E8F0]/70 rounded-full shadow-sm shadow-black/20",
      "active:translate-y-px",
    );
  return (
    <nav className="shadow-sm flex justify-between h-[8%] bg-white">
      <FlippingNavIcon />
      <div className="h-full w-full flex gap-3 items-center justify-end pr-2">
        <div role="button" className={cn(btnClass())}>
          <img
            src={EventIcon}
            className="size-6 md:size-8"
            alt="header-btn-event"
          />
          <p className=" text-black">活动</p>
        </div>
        <div role="button" className={cn(btnClass())}>
          <img
            src={ChatIcon}
            className="size-6 md:size-8"
            alt="header-btn-chat"
          />
          <p className=" text-black">客服</p>
        </div>
      </div>
    </nav>
  );
};

export { LandingHeader };
