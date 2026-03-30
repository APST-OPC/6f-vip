import type { ReactNode } from "react";
import type { USDTLine } from "./type";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

import Bell from "@/assets/svg/ic_svg_bell.svg";
import Token from "@/assets/usdt_token.webp";

import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

import { usdtLine } from "./utils";
import { cn } from "@/lib/utils";

interface ISeparatorText {
  icon?: boolean;
  children: string | ReactNode;
  className?: HTMLDivElement["className"];
  contentClass?: HTMLParagraphElement["className"];
}

const Typography = (props: ISeparatorText) => {
  const { children, className, icon = false, contentClass } = props;
  const asChild = typeof children !== "string";
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {icon && (
        <img
          src={Token}
          className="size-6 md:size-8 object-contain"
          alt="token"
          loading="lazy"
        />
      )}
      {asChild ? children : <p className={contentClass}>{children}</p>}
    </div>
  );
};

const DedicatedLine = ({ contents }: USDTLine) => {
  const { title } = contents;
  const [ping, setPing] = useState<string>("0ms");

  useEffect(() => {
    const generatePing = () => `${Math.floor(Math.random() * 100)}ms`;

    queueMicrotask(() => setPing(generatePing()));

    const interval = setInterval(() => {
      setPing(generatePing());
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="p-1 px-3 md:px-5 w-full rounded-xl bg-white shadow-uniform space-y-1 md:space-y-3">
      <div className="flex items-center justify-between text-black text-base md:text-xl">
        <div className="flex gap-3">
          <Typography className="text-nowrap" icon>
            {title}
          </Typography>
          <Typography contentClass="text-green-600 border-l pl-2 border-black/20">
            {ping}
          </Typography>
        </div>
        <Typography className="pl-3 justify-end">
          <Button
            size="lg"
            className="relative overflow-hidden w-fit bg-full bg-center bg-[url('@/assets/retest_bg.webp')] text-white"
          >
            立即进入 <ChevronRight className="size-5" />
          </Button>
        </Typography>
      </div>
    </section>
  );
};

const LineList = () => {
  return (
    <div className="px-5 rounded-lg">
      <div className="flex w-full gap-2 items-center">
        <img src={Bell} className="size-5" alt="bell-svg" />
        <Marquee className="text-base whitespace-nowrap text-slate-600">
          6F.VIP润豐国际官方声明：本平台所有系统与游戏产品均采用官方真实
        </Marquee>
      </div>
      <div className="space-y-3">
        <DedicatedLine contents={usdtLine[0].contents} />
        <DedicatedLine contents={usdtLine[1].contents} />
      </div>
    </div>
  );
};

export { LineList };
