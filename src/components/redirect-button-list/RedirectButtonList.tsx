import type { RedirectBtn, RedirectContent } from "./type";
import { Image } from "@/components/ui";
import { redirectInfo } from "./utils";

const RedirectButton = ({ items }: RedirectBtn) => {
  const { title, subTitle, image } = items as RedirectContent;
  const openNewWindow = () => window.open(items.link, "_blank");
  return (
    <div
      className="flex justify-center border-b-4 border-[#D2D2E2] bg-white transform-all duration-200 active:translate-y-px shadow-uniform rounded-lg w-full py-1 cursor-pointer"
      onClick={openNewWindow}
    >
      <div className="flex items-center w-[70%] md:w-1/2 gap-2">
        <Image src={image} size="lg" alt={`svg-${title}`} />
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
    <div className="space-y-3">
      {redirectInfo.map(({ items }, index) => (
        <RedirectButton key={index} items={items} />
      ))}
    </div>
  );
};

export { RedirectButtonList };
