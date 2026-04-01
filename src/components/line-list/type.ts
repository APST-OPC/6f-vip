import type { ReactNode } from "react";

export interface ISeparatorText {
  icon?: boolean;
  children: string | ReactNode;
  className?: HTMLDivElement["className"];
  contentClass?: HTMLParagraphElement["className"];
}

interface LineContent {
  title: string;
  link: string;
  ping: string;
}

export interface USDTLine {
  contents: LineContent;
}
