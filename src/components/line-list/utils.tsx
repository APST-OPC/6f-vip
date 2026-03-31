import type { USDTLineStore } from "@/zustand/store";
import type { USDTLine } from "./type";

export const usdtLine: USDTLine[] = [
  {
    contents: {
      title: "USDT专线1",
      link: "5a615.com",
      ping: "0ms",
    },
  },
  {
    contents: {
      title: "USDT专线2",
      link: "5a195.com",
      ping: "0ms",
    },
  },
];

export const getUsdtLine = (ping: USDTLineStore) => {
  return usdtLine.map((line, i) => {
    return {
      ...line,
      contents: {
        ...line.contents,
        ping: i === 0 ? ping.usdtLine1 : ping.usdtLine2,
      },
    };
  });
};
