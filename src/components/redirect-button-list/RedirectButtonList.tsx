import { Button } from "@/components";
import type { RedirectBtn, RedirectContent } from "./type";
import { redirectInfo } from "./utils";

const RetestButton = () => {
  return (
    <Button
      variant="custom"
      size="custom"
      className="relative w-full bg-full bg-center"
    >
      <p className="z-10 text-sm md:text-lg">重新检测</p>
    </Button>
  );
};

const RedirectButton = ({ items }: RedirectBtn) => {
  const { title, subTitle, image } = items as RedirectContent;
  return (
    <div className="flex justify-center border-b-4 border-[#D2D2E2] bg-white transform-all duration-200 active:translate-y-px shadow-uniform rounded-lg w-full py-1 cursor-pointer">
      <div className="flex items-center w-[70%] md:w-1/2 gap-2">
        <img src={image} className="size-7 md:size-9" alt={`svg-${title}`} />
        <div>
          <p className="text-nowrap text-lg text-[#2f57b8] font-bold tracking-wider">
            {title}
          </p>
          <p className="text-nowrap text-[9px] text-slate-400">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

const RedirectButtonList = () => {
  return (
    <div className="px-5 space-y-3">
      <RetestButton />
      {redirectInfo.map(({ items }, index) =>
        items === "retest" ? (
          <RetestButton key={index} />
        ) : (
          <RedirectButton key={index} items={items} />
        ),
      )}
    </div>
  );
};

export { RedirectButtonList };
