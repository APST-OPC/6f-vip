import type { ISeparatorText, USDTLine } from "./type";
import { ChevronRight } from "lucide-react";
import Bell from "@/assets/svg/ic_svg_bell.svg";
import Token from "@/assets/usdt_token.webp";
import { useGenereatePing } from "@/zustand/store";
import { Button, Marquee } from "@/components/ui";
import { getUsdtLine } from "./utils";
import { cn } from "@/lib/utils";

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
  const { title, ping } = contents;

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

const RetestButton = () => {
  const { generatePing } = useGenereatePing();
  return (
    <Button
      variant="custom"
      size="custom"
      className="relative w-full bg-full bg-center"
      onClick={generatePing}
    >
      <p className="z-10 text-sm md:text-lg">重新检测</p>
    </Button>
  );
};

const LineList = () => {
  const { ping } = useGenereatePing();
  return (
    <div className="rounded-lg">
      <div className="flex w-full gap-2 items-center">
        <img src={Bell} className="size-5" alt="bell-svg" />
        <Marquee className="text-base whitespace-nowrap text-slate-600">
          6F.VIP润豐国际官方声明：本平台所有系统与游戏产品均采用官方真实
        </Marquee>
      </div>
      <div className="space-y-3">
        <DedicatedLine contents={getUsdtLine(ping)[0].contents} />
        <DedicatedLine contents={getUsdtLine(ping)[1].contents} />
        <RetestButton />
      </div>
    </div>
  );
};

export { LineList };
