import type { LandingButtonValues } from "./type";
import EventIcon from "@/assets/svg/ic_svg_event.svg";
import ChatIcon from "@/assets/svg/ic_svg_chat.svg";
import { cn } from "@/lib/utils";

export const buttonValues: LandingButtonValues[] = [
  {
    label: "活动",
    icon: EventIcon,
    action: () => window.open("https://6f.vip/event", "_blank"),
  },
  {
    label: "客服",
    icon: ChatIcon,
    action: () => window.open("https://t.me/runfengkefu", "_blank"),
  },
];

export const btnClass = cn(
  "w-fit rounded-full bg-[#E2E8F0]",
  "flex items-center gap-2",
  "py-1 px-2 md:px-4",
  "inset-shadow-sm inset-shadow-black/20",
  "transform-all duration-200 active:translate-y-px hover:bg-[#E2E8F0]/70",
);
